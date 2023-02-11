# Next.js Project

```bash
yarn dev
yarn build
```

## package.json

今回のプロジェクトは yarn を使用

```json
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
```

## ESlint

```bash
yarn lint
```

## prettier

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prettier": "prettier --write ." // <--
  },
```

```bash
yarn prettier
```

- インストール後、`.prettierrc`と`.prettierignore`を作成する

## husky を利用して git hooks を作る[^1]

```bash
yarn add -D husky
npx husky install
```

- `.huskyrc`フォルダが作成される
  > husky - Git hooks installed

```bash
npx husky add .husky/pre-commit "yarn lint"
npx husky add .husky/pre-push "yarn build"
```

```bash
git add .
git commit -m "comment"
git push
```

## commitlint.config.js

```bash
yarn add -D @commitlint/config-conventional @commitlint/cli
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## cross-env

```bash
yarn add -D cross-env
```

```json
  "scripts": {
    "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
  },
```

## storybook

To run your Storybook, type: `yarn storybook`

```bash
npx sb init --builder webpack5
yarn add util
yarn add typescript@"<4.8"
```

エラーの関係で typescript のバージョンは上のように指定。[^3]

### Adding Webpack as a resolution dependency

> We need this to ensure the webpack is installed as a dependency, somehow this will cause a bug if we don’t install it

Append this to your `package.json`

```json
"resolutions": {
    "webpack": "^5"
}
```

▼ 上記の設定してもエラーが出た時は以下のインストールが必要かも[^2]

```bash
yarn add -D @storybook/react
yarn add @storybook/manager-webpack5
```

### storybook で alias を使うための設定[^5]

▼ `.storybook/main.js`

```js
const path = require('path'); //<--
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/pra/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules-preset', //  to keep using CSS modules
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  //▼　追加　▼
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };
    return config;
  },
};
```

## SCSS

```bash
yarn add -D sass
```

## Install Tailwind CSS [^4]

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Storybook Support for Tailwind

```bash
yarn add -D @storybook/addon-postcss
```

OPTIONAL: If you want to keep using CSS modules as well:

```bash
yarn add -D storybook-css-modules-preset
```

[^1]: https://typicode.github.io/husky/#/
[^2]: https://stackoverflow.com/questions/64402821/module-not-found-error-cant-resolve-util-in-webpack
[^3]: https://stackoverflow.com/questions/73507563/deprecationwarning-getmutableclone-has-been-deprecated-since-v4-0-0-use-an-a
[^4]: https://tailwindcss.com/docs/guides/nextjs
[^5]: https://github.com/storybookjs/storybook/issues/11639

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

[^1]: https://typicode.github.io/husky/#/

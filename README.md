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

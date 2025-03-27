**Установку на исходном проекте делал так:**

```npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge```

```npm install --save-dev json-server```

```npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier husky lint-staged```

```npm install --save-dev clean-webpack-plugin```

**Далее создал основные файлы с настройками.**

```npx husky install```

```Добавление хука pre-commit: npx husky add .husky/pre-commit "npm run lint && npm run format"```

```Обновление Husky хукаа: npx husky add .husky/pre-commit "npx lint-staged"```

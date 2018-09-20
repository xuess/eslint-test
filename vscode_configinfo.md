# 语法检查工具

## vscode 配置

安装插件：

* ESlint 语法检查
* Prettier 代码美化
* stylelint 样式美化




## 工程安装依赖


**ESlint 相关**

```
npm i eslint eslint-config-prettier eslint-config-react-app  eslint-loader eslint-plugin-react babel-eslint -D
```

**stylelint**

```
npm i prettier -D
```

**Prettier**

```
npm i stylelint  stylelint-config-prettier stylelint-config-standard -D
```


### 配置文件：


.editorconfig

> vscode 全局格式配置文件

```bash
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

---

.eslintrc.js

> eslint 语法检查配置文件

```js
module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};

```

---

.eslintignore

> eslint ignore配置

```bash
src/style/**/*.js
!src/style/xxx/b.js
```



---

.prettierrc

> prettier 配置文件


```json
{
    "singleQuote": true,
    "trailingComma": "none",
    "semi": true,
    "printWidth": 120,
    "tabWidth": 4,
    "overrides": [
        {
            "files": ".prettierrc",
            "options": { "parser": "json" }
        }
    ]
}

```

---

.prettierignore

>prettier ignore配置

```
**/*.md
**/*.svg
**/*.ejs
**/*.eot
**/*.ttf
**/*.woff
```

---

.stylelintrc

```
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "rules": {
    "selector-pseudo-class-no-unknown": null,
    "shorthand-property-no-redundant-values": null,
    "at-rule-empty-line-before": null,
    "at-rule-name-space-after": null,
    "comment-empty-line-before": null,
    "declaration-bang-space-before": null,
    "declaration-empty-line-before": null,
    "function-comma-newline-after": null,
    "function-name-case": null,
    "function-parentheses-newline-inside": null,
    "function-max-empty-lines": null,
    "function-whitespace-after": null,
    "number-leading-zero": null,
    "number-no-trailing-zeros": null,
    "rule-empty-line-before": null,
    "selector-combinator-space-after": null,
    "selector-descendant-combinator-no-non-space": null,
    "selector-list-comma-newline-after": null,
    "selector-pseudo-element-colon-notation": null,
    "unit-no-unknown": null,
    "no-descending-specificity": null,
    "font-family-no-missing-generic-family-keyword": null,
    "value-list-max-empty-lines": null
  }
}
```




[eslint规则](http://eslint.cn/docs/rules/)

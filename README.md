
## 项目运行

```
# 安装依赖
npm i

# 执行修复并语法检查
./node_modules/.bin/eslint --fix test.js

```


## 什么是eslint

>可组装的JavaScript和JSX检查工具

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。在许多方面，它和 JSLint、JSHint 相似，除了少数的例外：

ESLint 使用 Espree 解析 JavaScript。
ESLint 使用 AST 去分析代码中的模式
ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。



## Installation and Usage

先决条件：`Node.js` (>=4.x), `npm` version 2+。

有两种方式安装 ESLint： 全局安装和本地安装。

### Local Installation and Usage

如果你想让 ESLint 成为你项目构建系统的一部分，我们建议在本地安装。你可以使用 npm：

```
$ npm install eslint --save-dev
```

紧接着你应该设置一个配置文件：

```
$ ./node_modules/.bin/eslint --init
```

之后，你可以在你项目根目录运行 ESLint：

```
$ ./node_modules/.bin/eslint yourfile.js
```

使用本地安装的 `ESLint` 时，你使用的任何插件或可分享的配置也都必须在本地安装。

### Global Installation and Usage

如果你想使 ESLint 适用于你所有的项目，我们建议你全局安装 ESLint。你可以使用 npm：

```
$ npm install -g eslint
```

紧接着你应该设置一个配置文件：

```
$ eslint --init
```

之后，你可以在任何文件或目录运行 `ESLint`：

```
$ eslint yourfile.js
```

使用全局安装的 `ESLint` 时，你使用的任何插件或可分享的配置也都必须在全局安装。

>注意：eslint --init适用于对某个项目进行设置和配置 ESLint，并在其运行的的目录执行本地安装的 ESLint 及 插件。如果你倾向于使用全局安装的 ESLint，你配置中使用的任何插件也必须是全局安装的。


## Configuration

运行 `eslint --init` 之后，`.eslintrc` 文件会在你的文件夹中自动创建。你可以在 `.eslintrc` 文件中看到许多像这样的规则：

```
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

"`semi`" 和 "`quotes`" 是 `ESLint` 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：


* "`off`" or `0` - 关闭规则
* "`warn`" or `1` - 将规则视为一个警告（不会影响退出码）
* "`error`" or `2` - 将规则视为一个错误 (退出码为1)


这三个错误级别可以允许你细粒度的控制 `ESLint` 是如何应用规则（更多关于配置选项和细节的问题，请查看配置文件）

你的 `.eslintrc` 配置文件可以包含下面的一行：

```json
    "extends": "eslint:recommended"
```

由于这行，所有在 规则页面 被标记为 “`√`” 的规则将会默认开启。另外，你可以在 `npmjs.com` 搜索 “`eslint-config`” 使用别人创建好的配置。只有在你的配置文件中扩展了一个可分享的配置或者明确开启一个规则，`ESLint` 才会去校验你的代码。



## 命令行

[命令行](./code.md)


## 配置项

[配置项](./configuring.md)
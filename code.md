
## 命令行

```bash
eslint [options] [file|dir|glob]*
```

```bash
eslint file1.js file2.js
```

或者

```bash
eslint lib/**
```


## Options

命令行工具有几个选项，你可以通过运行 `eslint -h` 查看所有选项。

```bash
eslint [options] file.js [file.js] [dir]

Basic configuration:
  --no-eslintrc                  Disable use of configuration from .eslintrc.*
  -c, --config path::String      Use this configuration, overriding .eslintrc.* config options if present
  --env [String]                 Specify environments
  --ext [String]                 Specify JavaScript file extensions - default: .js
  --global [String]              Define global variables
  --parser String                Specify the parser to be used
  --parser-options Object        Specify parser options

Specifying rules and plugins:
  --rulesdir [path::String]      Use additional rules from this directory
  --plugin [String]              Specify plugins
  --rule Object                  Specify rules

Fixing problems:
  --fix                          Automatically fix problems
  --fix-dry-run                  Automatically fix problems without saving the changes to the file system

Ignoring files:
  --ignore-path path::String     Specify path of ignore file
  --no-ignore                    Disable use of ignore files and patterns
  --ignore-pattern [String]      Pattern of files to ignore (in addition to those in .eslintignore)

Using stdin:
  --stdin                        Lint code provided on <STDIN> - default: false
  --stdin-filename String        Specify filename to process STDIN as

Handling warnings:
  --quiet                        Report errors only - default: false
  --max-warnings Int             Number of warnings to trigger nonzero exit code - default: -1

Output:
  -o, --output-file path::String  Specify file to write report to
  -f, --format String            Use a specific output format - default: stylish
  --color, --no-color            Force enabling/disabling of color

Inline configuration comments:
  --no-inline-config             Prevent comments from changing config or rules
  --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives

Caching:
  --cache                        Only check changed files - default: false
  --cache-file path::String      Path to the cache file. Deprecated: use --cache-location - default: .eslintcache
  --cache-location path::String  Path to the cache file or directory

Miscellaneous:
  --init                         Run config initialization wizard - default: false
  --debug                        Output debugging information
  -h, --help                     Show help
  -v, --version                  Output the version number
  --print-config path::String    Print the configuration for the given file
```

这些选项可以通过重复该选项或使用逗号分隔的列表进行指定（除了 `--ignore-pattern` 不允许第二种风格）。

```bash
eslint --ext .jsx --ext .js lib/

eslint --ext .jsx,.js lib/
```


### --ext


这个选项允许你指定 ESLint 在指定的目录下查找 JavaScript 文件时要使用的文件扩展名。默认情况下，它使用 .js 作为唯一性文件扩展名。

示例：

```bash
# Use only .js2 extension
eslint . --ext .js2

# Use both .js and .js2
eslint . --ext .js --ext .js2

# Also use both .js and .js2
eslint . --ext .js,.js2
```

> 注意：`--ext` 只有在参数为目录时，才生效。如果你使用 `glob` 模式或文件名，`--ext` 将被忽略

例如，`eslint lib/* --ext .js` 将匹配 `lib/` 下的所有文件，忽略扩展名。

### --global

这个选项定义了全局变量，这样它们就不会被 `no-undef` 规则标记为未定义了。任何指定的全局变量默认是只读的，在变量名字后加上 `:true` 后会使它变为可写。要指定多个变量，使用逗号分隔它们，或多次使用这个选项。

示例：

```
eslint --global require,exports:true file.js
eslint --global require --global exports:true
```


### --parser

该选项允许你为 ESLint 指定一个解析器。默认情况下，使用 `espree`

### --ignore-path

这个选项允许你指定一个文件作为 `.eslintignore`。默认情况下，ESLint 在当前工作目录下查找 `.eslintignore`。你可以通过提供另一个文件的路径改变这种行为。

示例：

```
eslint --ignore-path tmp/.eslintignore file.js
eslint --ignore-path .gitignore file.js
```

### --no-ignore

禁止排除 `.eslintignore`、`--ignore-path` 和 `--ignore-pattern` 文件中指定的文件。

示例：
```
eslint --no-ignore file.js
```

### --quiet

这个选项允许你禁止报告警告。如果开启这个选项，ESLint 只会报告错误。

示例：

```
eslint --quiet file.js
```

### -o, --output-file

将报告写到一个文件。

示例：

```
eslint -o ./test/test.html
```

当指定这个选项时，就会按给定的格式输出到指定的文件名。

### -f, --format

* checkstyle
* codeframe
* compact
* html
* jslint-xml
* json
* junit
* stylish (默认)
* table
* tap
* unix
* visualstudio

示例：

```
eslint -f compact file.js
```


### --color, --no-color

此选项强制启用/禁用彩色输出。你可以使用此方法来覆盖默认行为，即在未检测到TTY的情况下启用彩色输出，例如通过 `cat` 或 `less` 进行管道输出 `eslint`。

示例：

```
eslint --color file.js | cat
eslint --no-color file.js
```

### --init

这个选项将会配置初始化向导。它被用来帮助新用户快速地创建 `.eslintrc` 文件，用户通过回答一些问题，选择一个流行的风格指南，或检查你的源文件，自动生成一个合适的配置。

生成的配置文件将被创建在当前目录。

### --fix

该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。不是所有的问题都能使用这个选项进行修复，该选项在以下情形中不起作用：

当代码传递给 ESLint 时，这个选项抛出一个错误。
这个选项对使用处理器的代码不起作用。
该选项对使用处理器的代码没有影响，除非处理器选择允许自动修复。
如果你想从 `stdin` 修复代码或希望在不实际写入到文件的情况下进行修复，使用 `--fix-dry-run` 选项。

### --fix-dry-run

该选项与 --fix 有相同的效果，唯一一点不同是，修复不会保存到文件系统中。这也是从 stdin（当使用 --stdin 标记时）修复代码成为可能。

因为默认的格式化器不会输出修复的代码，你必须使用另外一个（比如 json）进行修复。下面是这个模式的一个例子：

```
getSomeText | eslint --stdin --fix-dry-run --format=json
```


该标记对集成（比如，编辑器插件）很有用，它需要从命令行进行自动修复，而不需要保存到文件系统。

###　--debug

这个选项将调试信息输出到控制台。当你看到一个问题并且很难定位它时，这些调试信息会很有用。ESLint 团队可能会通过询问这些调试信息帮助你解决 `bug`。



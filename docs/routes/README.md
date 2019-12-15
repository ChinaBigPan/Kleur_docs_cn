---
sidebar: 'auto'
---

## 欢迎使用Kleur

> 用ANSI码让您的终端绚丽多彩

::: warning
从3.0版本开始，我们不再使用类`chalk`语法。3.0以下的版本已经废弃(deprecated)
如果您仍想使用这种语法，可以考虑使用[ansi-colors](https://github.com/doowb/ansi-colors)
:::

## 安装

```bash
$ npm install --save kleur
```

## 使用

```js
const { red, white, blue, bold } = require('kleur');

// 基本用法
red('red text');

// 链式调用
blue().bold().underline('howdy partner');

// 嵌套调用
bold(`${ white().bgRed('[ERROR]') } ${ red().italic('Something happened')}`);
```

### 链式调用

```js
console.log(bold().red('this is a bold red message'));
console.log(bold().italic('this is a bold italicized message'));
console.log(bold().yellow().bgRed().italic('this is a bold yellow italicized message'));
console.log(green().bold().underline('this is a bold green underlined message'));
```

![image](/kleur_docs_cn/images/chainMethods.png)

### 嵌套调用

```js
const { yellow, red, cyan } = require('kleur');

console.log(yellow(`foo ${red().bold('red')} bar ${cyan('cyan')} baz`));
console.log(yellow('foo ' + red().bold('red') + ' bar ' + cyan('cyan') + ' baz'));
```

![image](/kleur_docs_cn/images/nestedMethods.png)

### 有条件支持

按需切换颜色支持形式。`kleur`自带了简单的自动检测，当然可能有些局限性，无法覆盖所有情况。

```js
const kleur = require('kleur');

// 手动禁用
kleur.enabled = false;

// 也可以依赖其他库来检测适用性
kleur.enabled = require('color-support').level;

console.log(kleur.red('I will only be colored red if the terminal supports colors'));
```

## API

当用户通过输入调用时，所有的kleur方法都返回一个**字符串**。

> 开发者自主决定输出形式，如`console.log`、`process.stdout.write`等。

👇下面的方法虽然按照类型进行了分组，但实际上彼此之间是可以**链式调用**和**嵌套调用**的。

### 颜色 Colors  

<br />

> black — red — green — yellow — blue — magenta — cyan — white — gray — grey

### 背景色 Backgrounds

<br />

> bgBlack — bgRed — bgGreen — bgYellow — bgBlue — bgMagenta — bgCyan — bgWhite

### 修饰符 Modifiers

<br />

> reset — bold — dim — italic* — underline — inverse — hidden — strikethrough*      

<br />
* 支持的并不广泛

## 支持版本

<br />

> Node v10.13.0

## 加载时间对比

```txt
chalk       ::  4.858ms
kleur       ::  0.482ms
ansi-colors ::  1.738ms
```

## 性能对比

```js
# 所有颜色
  ansi-colors  x 182,395 ops/sec ±0.51% (96 runs sampled)
  chalk        x 656,387 ops/sec ±0.80% (93 runs sampled)
  kleur        x 711,729 ops/sec ±0.33% (94 runs sampled)

# 链式颜色
  ansi-colors  x  23,900 ops/sec ±0.34% (92 runs sampled)
  chalk        x 306,865 ops/sec ±0.32% (97 runs sampled)
  kleur        x  76,154 ops/sec ±0.29% (95 runs sampled)

# 嵌套颜色
  ansi-colors  x  69,508 ops/sec ±0.29% (95 runs sampled)
  chalk        x 124,142 ops/sec ±0.43% (91 runs sampled)
  kleur        x 138,659 ops/sec ±0.32% (98 runs sampled)

```

## License

MIT © [Luke Edwards](https://lukeed.com/)
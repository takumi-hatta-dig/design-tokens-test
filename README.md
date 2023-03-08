# Design Tokens Test

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/@jpdigitalagency)

## インストール

```
$ npm i @takumi-hatta/design-tokens-test
```

## サンプル

https://github.com/takumi-hatta-dig/design-tokens-test-examples

## ローカルで tokens を生成したい場合

```
# dist以下にcss, scss, js, d.tsが出力されます
$ npm run transform
```

## バージョニングについて

`npm version ...` コマンドを利用してください。  
Figma のバージョンとは別物だが、major.minor くらいまでは合わせるかどうか...

## figma ブランチについて

Tokens Studio for Figma との連携用のブランチです。  
figma/tokens.json が更新された場合、StyleDictionary 用の json に変換して PR を作成してくれる Actions が実行されます。

## 主なプラグインやライブラリ

- [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin/tree/main/token-transformer)
- [Style Dictionary](https://github.com/amzn/style-dictionary)

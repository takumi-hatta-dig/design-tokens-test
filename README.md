# Design Tokens Test

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/@jpdigitalagency)のデザイントークンを css, scss, js + d.ts のいずれかで扱える仕組みを実装したリポジトリです。
変換されたデザイントークンは npm パッケージとして公開しています。  
サンプルは[こちら](https://github.com/takumi-hatta-dig/design-tokens-test-examples)です。

デザイントークンの変換の仕組みは以下のようになります。

1. [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)で管理中のデザイントークンを json として出力
2. 出力された json を StyleDictionary で扱いやすい json に変換
3. StyleDictionary を実行し、css, scss, js + d.ts ファイルを出力

## 環境構築

```
$ npm install
```

## 運用について

### ローカルで css, scss, js+d.ts を生成したい場合

```
# dist以下にcss, scss, js + d.tsが出力されます
$ npm run transform
```

### バージョニングについて

`npm version ...` コマンドを利用してください。  
Figma とは別物なので合わせる必要はないと思うが、major, minor くらいまでは合わせるかどうか考え中...

### figma ブランチについて

[Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin) との連携用のブランチです。  
figma/tokens.json が更新された場合のみ、StyleDictionary 用の json に変換して PR を作成してくれる Actions が実行されます。

## 主なプラグインやライブラリ

- [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin/tree/main/token-transformer)
- [StyleDictionary](https://github.com/amzn/style-dictionary)

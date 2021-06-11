# AWS CDK + Step Functions サンプルプロジェクト

## 概要

[【Developers.IO 2020 CONNECT】AWS CDK + AWS Step Functions入門](https://dev.classmethod.jp/articles/developers-io-2020-connect-aws-cdk-aws-step-functions/) を参考にAWS CDK, AWS Lambda, Step Functionsを試すためのプロジェクトです。

作成されるステートマシン

<img width="727" alt="stepfunctions_image" src="https://user-images.githubusercontent.com/5232435/121681117-5cf09100-caf5-11eb-9122-b73aa291ee09.png">


## セットアップ

### AWS CDK インストール

```shell
$ npm install -g aws-cdk
```

### npm インストール

```shell
$ npm install
```

### AWS ACCOUNT IDを書き換える

bin/stepfunctions.ts に `YOUR_AWS_ACCOUNT_ID` と書かれている部分を自身が利用しているAWSアカウントIDに書き換えてください。

### cdk bootstrapを実行する

```shell
$ cdk bootstrap aws://YOUR_AWS_ACCOUNT_ID/ap-northeast-1 --profile your-profile-name
```

## ビルド

```shell
$ npm run build
```

## デプロイ

```shell
$ cdk deploy --profile your-profile-name
```

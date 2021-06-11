# AWS CDK + Step Functions サンプルプロジェクト

## 概要

[【Developers.IO 2020 CONNECT】AWS CDK + AWS Step Functions入門](https://dev.classmethod.jp/articles/developers-io-2020-connect-aws-cdk-aws-step-functions/) を参考にAWS CDK, AWS Lambda, Step Functionsを試すためのプロジェクトです。


## セットアップ

### AWS ACCOUNT IDを書き換える

bin/stepfunctions.ts に `YOUR_AWS_ACCOUNT_ID` と書かれている部分を自身が利用しているAWSアカウントIDに書き換えてください。

### cdk bootstrapを実行する

```
$ cdk bootstrap aws://YOUR_AWS_ACCOUNT_ID/ap-northeast-1 --profile your-profile-name
```

## ビルド

```
$ npm run build
```

## デプロイ

```
$ cdk deploy --profile your-profile-name
```

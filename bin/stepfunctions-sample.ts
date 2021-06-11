#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StepfunctionsSampleStack } from '../lib/stepfunctions-sample-stack';

const app = new cdk.App();
new StepfunctionsSampleStack(app, 'StepfunctionsSampleStack', {
  env: {
    region: 'ap-northeast-1',
    account: 'YOUR_AWS_ACCOUNT_ID',
  }
});

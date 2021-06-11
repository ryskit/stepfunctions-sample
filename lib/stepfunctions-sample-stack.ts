import * as cdk from '@aws-cdk/core';

import * as lambda from '@aws-cdk/aws-lambda';
import * as sfn from '@aws-cdk/aws-stepfunctions';
import * as tasks from '@aws-cdk/aws-stepfunctions-tasks';

export class StepfunctionsSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const taskFn = new lambda.Function(this, 'TaskFn', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('handlers'),
      handler: 'task.handler'
    })
    
    const firstState = new tasks.LambdaInvoke(this, '最初の処理', {
      lambdaFunction: taskFn,
      outputPath: '$.Payload',
    })
    
    const lastState = new tasks.LambdaInvoke(this, '最後の処理', {
      inputPath: '$.SdkResponseMetadata',
      lambdaFunction: taskFn,
    })
    
    const process1State = new tasks.LambdaInvoke(this, '処理1', {
      inputPath: '$',
      lambdaFunction: taskFn,
    })
    
    const process2State = new tasks.LambdaInvoke(this, '処理2', {
      inputPath: '$',
      lambdaFunction: taskFn,
    })

    const wait10 = new sfn.Wait(this, '10秒待つ', {
      time: sfn.WaitTime.duration(cdk.Duration.seconds(10)),
    })
    
    const paralell = new sfn.Parallel(this, 'Parallel');
    const paralellState1 = new tasks.LambdaInvoke(this, '並列処理1', {
      lambdaFunction: taskFn,
    })
    const paralellState2 = new tasks.LambdaInvoke(this, '並列処理2', {
      lambdaFunction: taskFn,
    })
    
    const choice = new sfn.Choice(this, 'ChoiceState');
    choice.when(sfn.Condition.stringEquals('$.message', 'Hello'), process1State.next(wait10).next(lastState));
    choice.when(sfn.Condition.stringEquals('$.message', 'World'), process2State.next(paralell.branch(paralellState1, paralellState2).next(lastState)));
    choice.otherwise(lastState)
    
    const definition = firstState.next(choice)    
    new sfn.StateMachine(this, 'stateMachine', {
      definition: definition,
    })
  }
}

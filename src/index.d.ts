import { SNS } from "aws-sdk";

declare function messenger(topic: string, payload: object, options: SNS.PublishInput): Promise<SNS.PublishResponse>;

export = messenger;

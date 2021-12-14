import { Injectable } from '@nestjs/common';
import { WebClient , LogLevel} from '@slack/web-api';


@Injectable()
export class AppService {
  
  async gethello(): Promise<String> {
  const client = new WebClient('xoxb-2836415954595-2833681403029-cX3f6gU8935ArIzZEMF27S2g',{
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG
  });
  const chanelid = 'U02QLB908FL';
  try {
    //https://api.slack.com/methods/chat.postMessage
    const result = await client.chat.postMessage({
    text: 'Hello world!',
    channel: chanelid,
     });

      console.log( `Successfully send message ${result.ts} in chanelid ${chanelid}`);
      return "";
    }
    catch (error) {
      console.error(error);
    }
    
  }
}


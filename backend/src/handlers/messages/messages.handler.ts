/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { APIGatewayEvent } from 'aws-lambda';

import result from '../../data/messages.json';

export function MessagesHandler () {

  const getMessages = async (event: APIGatewayEvent) => {
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  }

    return { 
      getMessages
    }
}

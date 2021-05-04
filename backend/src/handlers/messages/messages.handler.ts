/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { APIGatewayEvent } from 'aws-lambda';

import result from '../../data/messages.json';
import { Repository } from './messages.database';

export function MessagesHandler (repository = Repository()) {

  const getMessages = async (event: APIGatewayEvent) => {

    const res = await repository.getMessageList()
    return {
      statusCode: 200,
      body: JSON.stringify({
        messages: res
      }),
    };
  }

    return { 
      getMessages
    }
}

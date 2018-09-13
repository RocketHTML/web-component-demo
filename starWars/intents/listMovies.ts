import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
import Client from './client'

export default class ListMoviesIntent {
  static intentName: string = 'listMovies'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
    Client().get('/people')
      .then(({ data }) => {
        callback({ data })
      })
      .catch(error => {
        callback({ error: error.toString() })
      })
  }
}


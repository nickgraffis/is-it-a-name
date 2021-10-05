import { Handler } from '@netlify/functions'
import data_names from '../../data/allNames.json'

const handler: Handler = async (event, context) => {
  try {
    const params = event.queryStringParameters
    const names: string[] = params?.name.split(' ') || []
    
    if (!names.length || !params?.name) return {
      statusCode: 400,
      body: 'Include a name in the query string.',
    }
 
    let itsAName: boolean = false

    if (names.length < 4) {
      for (let i = 0; i < data_names.length; i++) {
        for (let j = 0; j < names.length; j++) {
          if (data_names[i].toLowerCase().includes(names[j].toLowerCase())) {
            itsAName = true
            break
          }
        }
      }
    }
    
    return {
      statusCode: 200,
      body: itsAName ? 
      JSON.stringify({ message: `Its probably a name!`, result: true }) :
      JSON.stringify({ message: `Its probably not a name!`, result: false }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTION",
      },
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
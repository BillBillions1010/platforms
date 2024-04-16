import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(

  request: NextApiRequest,

  response: NextApiResponse<{}>

) {

  const result = await fetch("https://api.vercel.com/v2/deployments/dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa/aliases?teamId=SOME_STRING_VALUE", {

  "body": {

    "alias": "my-alias.vercel.app",

    "redirect": "SOME_STRING_VALUE"

  },

  "headers": {

    "Authorization": "Bearer <TOKEN>"

  },

  "method": "post"

});

  const data = await result.json();

  res.status(200).json(data);

}
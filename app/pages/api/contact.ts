// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



interface ContactRequest{
    email: string,
    name: string, 
    message: string
}

interface Data  {
    message: string
    contact: ContactRequest | null
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST"){
    const {email, name, message} = req.body as ContactRequest;
    if(!email || !email.includes("@") || !name || !message){
        return res.status(422).json({message: "invalid input", contact: null})
    }

    const newContact = {
        email,
        name,
        message
    }
    res.status(201).json({message: "saved", contact: newContact })
  }
}

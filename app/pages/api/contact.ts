// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface ContactRequest {
  email: string;
  name: string;
  message: string;
}

interface Data {
  message: string;
  contact: ContactRequest | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, name, message } = req.body as ContactRequest;
    if (!email || !email.includes("@") || !name || !message) {
      return res.status(422).json({ message: "invalid input", contact: null });
    }

    const newContact = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://schwobsi:4forGlesa@cluster0.zxwti.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client?.db();
      await db?.collection("messages").insertOne(newContact);
      res.status(201).json({ message: "saved", contact: newContact });
    } catch (err) {
      res.status(500).json({ message: "server Error", contact: null });
    }

    client?.close();
  }
}

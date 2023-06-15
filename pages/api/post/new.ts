import { connectDB } from "@util/database";

export default async function handler(req: Request, res: Response) {
  if (req.method == "POST") {
    if(req.body?.title =="") {
      return res.status(500).json("?제목 안씀")
    }
    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").insertOne(req.body);
    return res.redirect(302, "/list");
  }
}

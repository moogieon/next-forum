import { connectDB } from "@util/database";

export default async function handler(req: Request, res: Response) {
  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    let edit = { title: req?.body?.title, content: req?.body?.content };
    let result = await db
      .collection("post")
      .updateOne({ _id: "2" }, { $set: edit });
    return result.redirect(200, "/list");
  }
}

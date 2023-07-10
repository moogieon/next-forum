import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

export default async function handler(req: Request, res: Response) {
  if (req.method == "POST") {
    const client = await connectDB;
    const db = client.db("forum");
    let edit = { title: req?.body?.title, content: req?.body?.content };
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(req.body._id) }, { $set: edit });
    console.log(result);
    res.status(200).redirect("/list");
  }
}

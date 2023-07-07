import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

interface Props {
  params: {
    _id: string;
  };
}
export default async function Edit(props: Props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params._id) });

  //   await db.collection("post").updateOne(
  //     { _id: new ObjectId(props.params._id) },
  //     {
  //       $set: {
  //         title: "",
  //         content: "",
  //       },
  //     }
  //   );
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result?.title} />
        <input name="content" defaultValue={result?.contnet} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

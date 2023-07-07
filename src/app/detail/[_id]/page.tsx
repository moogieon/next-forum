import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";

interface Props {
  params: {
    _id: string;
  };
}
export default async function Detail(props: Props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params._id) });

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
    </div>
  );
}

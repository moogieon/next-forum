import { connectDB } from "@util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

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
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">{result?.title}</h2>
        <p className="text-gray-600 mb-4">작성자: </p>
        <p className="text-gray-600 mb-4">게시일: </p>
        <hr className="my-4" />
        <div className="prose">
          <p>{result?.content}</p>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            <Link href={`/edit/${props.params._id}`}>수정</Link>
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

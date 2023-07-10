import { connectDB } from "@util/database";
import DetailLink from "./DetailLink";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-3xl font-bold mb-8">게시판</h2>
        <ul>
          {result.map((post) => (
            <>
              <DetailLink _id={post._id.toString()}>
                <li
                  key={post.id}
                  className="bg-gray-100 rounded-md p-4 mb-4 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600">작성자: {post.author}</p>
                  <p className="text-gray-600">게시일: {post.date}</p>
                </li>
              </DetailLink>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

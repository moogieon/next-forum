import { connectDB } from "@util/database";
import DetailLink from "./DetailLink";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ul>
        {result.map((data) => (
          <>
            <li key={data.title} className="list-item">
              <DetailLink _id={data._id.toString()}>
                <h4>{data.title}</h4>
                <p>{data.content}</p>
              </DetailLink>
              <Link href={`/edit/${data._id}`}>✏️</Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

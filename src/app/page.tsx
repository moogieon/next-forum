import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await MongoClient.connect(
    "mongodb+srv://cmlee:Leeky731!@coding-apple.f9nta4k.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  const db = client.db("forum");

  db.collection("post").find;
  return <div>hi</div>;
}

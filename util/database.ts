import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://cmlee:Leeky731!@coding-apple.f9nta4k.mongodb.net/?retryWrites=true&w=majority";

let client: MongoClient;
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).

  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>;
  };

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(url);
    globalWithMongoClientPromise._mongoClientPromise = client.connect();
  }

  connectDB = globalWithMongoClientPromise._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(url);
  connectDB = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { connectDB };

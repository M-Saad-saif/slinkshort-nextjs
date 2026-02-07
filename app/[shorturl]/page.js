import { redirect } from "next/navigation";
import clientPromise from "../lib/moongoDB";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("urlshorten");
  const collection = db.collection("urls");

  // checking if the short URL is already taken
  const existingShortUrl = await collection.findOne({
    shorturl: shorturl,
  });
  if (existingShortUrl) {
    redirect(existingShortUrl.url);
  }
  else{
    redirect('/')
  }
}

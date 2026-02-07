import clientPromise from "@/app/lib/moongoDB";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("urlshorten");
  const collection = db.collection("urls");

  // checking if the short URL is already taken
  const existingShortUrl = await collection.findOne({
    shorturl: body.shorturl,
  });
  if (existingShortUrl) {
    return Response.json({
      success: false,
      message: "URL already exist",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return Response.json({
    success: true,
    message: "URL generated successfully",
  });
}

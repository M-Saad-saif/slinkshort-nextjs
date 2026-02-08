import clientPromise from "@/app/lib/moongoDB";

// Generate random short URL alias
function generateRandomAlias() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("urlshorten");
  const collection = db.collection("urls");

  // Generate random alias if not provided
  let shorturl = body.shorturl || generateRandomAlias();
  
  // Check if the short URL is already taken
  let existingShortUrl = await collection.findOne({
    shorturl: shorturl,
  });
  
  // If randomly generated alias exists, keep generating until we find an available one
  while (existingShortUrl && !body.shorturl) {
    shorturl = generateRandomAlias();
    existingShortUrl = await collection.findOne({
      shorturl: shorturl,
    });
  }
  
  // If custom alias already exists, return error
  if (existingShortUrl && body.shorturl) {
    return Response.json({
      success: false,
      message: "URL already exist",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: shorturl,
  });

  return Response.json({
    success: true,
    message: "URL generated successfully",
    shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/${shorturl}`,
    shorturl: shorturl,
  });
}

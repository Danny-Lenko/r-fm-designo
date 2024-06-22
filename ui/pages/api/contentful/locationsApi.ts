import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "contentful";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const locations = await client.getEntries({
    content_type: "locations",
  });

  locations.items.sort(
    (a, b) => (a.fields as { id: number }).id - (b.fields as { id: number }).id
  );

  res.status(200).json(locations.items);
}

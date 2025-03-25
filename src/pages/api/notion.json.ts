import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const database = await fetch(
    `https://api.notion.com/v1/databases/${
      import.meta.env.NOTION_DATABASE_ID
    }/query`,
    {
      method: "POST",
      body: JSON.stringify({
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.NOTION_SECRET}`,
        "Notion-Version": "2022-06-28",
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log("➡️ database: ", database);

  if (!database) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const latest = database.results.slice(0, 6);

  return new Response(JSON.stringify(latest), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

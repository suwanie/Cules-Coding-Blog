import connectDb from "mongoose/connectDb";
import Blog from "mongoose/models/Blog";

const handler = async (req, res) => {
  const {
    method,
    query: { query },
  } = req;

  const errMessage = "Err has occured";

  try {
    if (method !== "GET") return res.status(400).json({ errMessage });

    await connectDb();

    const agg = [
      {
        // search operator라고 하는군?
        $search: {
          autocomplete: {
            query,
            path: "title",
            fuzzy: {
              maxEdits: 2,
              prefixLength: 1,
              maxExpansions: 256,
            },
          },
        },
      },
      { $limit: 20 },
      { $project: { _id: 0, banner: 0, content: 0, altText: 0, customID: 0 } },
    ];
    const blogs = await Blog.aggregate(agg);
    return res.send(blogs);
  } catch (_) {
    return res.status(400).send({ errMessage });
  }
};

export default handler;

import connectDb from "mongoose/connectDb";
import Blog from "mongoose/models/Blog";

const handler = async (req, res) => {
  const {
    method,
    query: { customID },
  } = req;
  const errMessage = "Err has occured";

  try {
    await connectDb();

    if (method === "POST") {
      const update = await Blog.updateOne(
        { customID },
        {
          // increament
          $inc: {
            totalViews: 1,
          },
        }
      );
      // success의 value는 true이다. => else를 안쓰고 그냥 이렇게 하네?
      if (update.modifiedCount) return res.status(200).json({ success: true });

      return res.status(400).send({ errMessage });
    }

    const document = await Blog.findOne({ customID }, "totalViews");

    if (!document) return res.status(400).send({ errMessage });

    return res.status(200).json({ totalViews: document.totalViews });
  } catch (_) {
    return res.status(400).send({ errMessage });
  }
};

export default handler;

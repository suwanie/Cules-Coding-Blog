import connectDb from "mongoose/connectDb";
import Blog from "mongoose/models/Blog";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import BlogHead from "components/Blog/BlogHead";
import MdxComponents from "components/MDX/MdxComponents";

// blogData는 내용에 대한 정보가 들어가 있다.
function BlogPage({ mdxSource, blogData }) {
  return (
    <div>
      <BlogHead {...blogData} />
      <MDXRemote {...mdxSource} components={MdxComponents} />
    </div>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
  await connectDb();

  const project = {
    _id: 0,
    __v: 0,
  };

  const result = await Blog.findOne({ slug }, project);

  const { content, createdAt, ...blogData } = result.toObject();

  const mdxSource = await serialize(content);

  blogData.createdAt = createdAt.toDateString();

  return {
    props: { mdxSource, blogData },
  };
};

export const getStaticPaths = async () => {
  await connectDb();

  const slugs = await Blog.find({}, "slug");

  const paths = slugs.map((item) => ({
    params: {
      slug: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;

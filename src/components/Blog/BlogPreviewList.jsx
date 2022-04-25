import BlogPreviewCard from "./BlogPreviewCard";
import { Box, Heading } from "@chakra-ui/react";
import { nanoid } from "nanoid";
function BlogPreviewList({ header, blogs }) {
  return (
    <div>
      <Box mt={8} mb={16}>
        {/* sx 설명은 2강 16초40초 ..  */}
        <Heading sx={{ textTransform: "uppercase", mb: 8, fontsize: "5xl" }}>
          {header}
        </Heading>
        {blogs.map((blog) => (
          <BlogPreviewCard {...blog} key={nanoid()} />
        ))}
      </Box>
    </div>
  );
}

export default BlogPreviewList;

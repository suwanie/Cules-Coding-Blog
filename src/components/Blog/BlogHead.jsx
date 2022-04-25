import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Box, Heading, HStack, LinkBox, Text, VStack } from "@chakra-ui/react";
import useGetViews from "hooks/useGetViews";

function BlogHead({
  banner,
  title,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) {
  const { data: views, mutate } = useGetViews(customID, totalViews);

  useEffect(() => {
    const url = `/api/views/${customID}`;

    (async () => {
      try {
        await axios.post(url);
        // 이거 해야 바로 숫자가 변경된다고?
        mutate();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <VStack as={LinkBox} spacing="1rem" align="center" m="2rem 0">
        <Box w="100%">
          <Image
            src={banner}
            width={16}
            height={9}
            layout="responsive"
            alt={altText}
            objectFit="cover"
          />
        </Box>

        <Heading fontSize={{ base: "4xl", md: "6xl" }} align="center">
          {title}
        </Heading>
        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>{createdAt}</Text>
          <Text>{views} views</Text>
          <Text>{readingTime}</Text>
        </HStack>
      </VStack>
    </div>
  );
}

export default BlogHead;

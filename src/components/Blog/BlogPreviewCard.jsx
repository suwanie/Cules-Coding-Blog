import Image from "next/image";
import { nanoid } from "nanoid";
import {
  Flex,
  Box,
  HStack,
  VStack,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
  Button,
} from "@chakra-ui/react";
import ChakraNextLink, { ChakraBtnLink } from "components/ChakraLink";
import useGetViews from "hooks/useGetViews";

function BlogPreviewCard({
  banner,
  title,
  description,
  slug,
  altText,
  createdAt,
  readingTime,
  totalViews,
  customID,
}) {
  const { data: views } = useGetViews(customID, totalViews);

  const link = `/blog/${slug}`;
  return (
    <div>
      <VStack as={LinkBox} align="start" spacing="1rem" mb="2rem">
        <Box w="100%">
          {/* props 잘 받았는데 image로 하면 안되네 */}
          {/* <img src={banner} alt={altText} /> */}
          {/* 삼항연산자로 있으면 사진 보여주기, 이걸로 바꿔보자 =>나중에 해결합세 ..*/}
          <Image
            src={banner}
            width={16}
            height={9}
            alt={altText}
            layout="responsive"
            objectFit="cover"
          />
        </Box>

        <Heading>Lorem ipsum, dolor sit amet consectetur</Heading>

        <ChakraNextLink ChakraComponent={Heading} href={link} overlay>
          {title}
        </ChakraNextLink>

        <HStack spacing="1rem" wrap="wrap" textTransform="uppercase">
          <Text>{createdAt}</Text>
          <Text>{views} views</Text>
          <Text>{readingTime}</Text>
        </HStack>
        {/* 최대 3줄까지만 표시 */}
        <Text noOfLines={3}>{description}</Text>

        {/* <Link href="/blog"> <Button>Read More</Button> </Link> 
아래와 똑같은데 굳이 ?..
*/}
        <ChakraBtnLink href={link} textTransform="uppercase">
          Read More
        </ChakraBtnLink>
      </VStack>
    </div>
  );
}

export default BlogPreviewCard;

// 게시글의 배너, 즉 썸네일이 될 예정

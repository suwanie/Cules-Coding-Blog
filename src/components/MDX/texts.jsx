import { Text, Heading } from "@chakra-ui/react";
import { ChakraTextLink } from "components/ChakraLink";

const components = {};

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

let length = headings.length;

headings.forEach((tag) => {
  const fontSize = {
    // 6강 7분... 이게 뭐냐
    base: `${length - 1 || ""}xl`,
    md: `${length}xl`,
  };

  // tag는 h1~ h6이 된다. 각각 개별로 존재학헤 되어서 이걸 배열에 담아둔다.
  components[tag] = (props) => (
    <Heading as={tag} fontSize={fontSize} mt={12} mb={6} {...props} />
  );
  // 이건 뭐냐?.. ++하면 겁나게 커짐
  length--;
});

export const BlogText = (props) => {
  return (
    <>
      <Text
        fontSize={["md", "lg", "xl"]}
        mt={8}
        mb={8}
        lineHeight="taller"
        letterSpacing="wide"
        {...props}
      />
    </>
  );
};

components.p = BlogText;

components.a = (props) => <ChakraTextLink {...props} display="line" />;

export default components;

// css를 담당

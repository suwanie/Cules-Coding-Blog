import Wrapper from "./Wrapper";
import CodeBlock from "./CodeBlock";
import { Code } from "@chakra-ui/react";

const components = { pre: CodeBlock };

// props가 뭐 어디서 받아오는겨 대체?
components.code = (props) => (
  <>
    <Code fontSize={["md", "lg", "xl"]} m="0 .5rem" {...props} />
  </>
);

components.pre = (props) => (
  <Wrapper>
    <CodeBlock {...props} />
  </Wrapper>
);

export default components;

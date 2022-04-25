import Link from "next/link";
import {
  Box,
  Button,
  Link as ChakraLink,
  LinkOverlay,
  Text,
  useColorMode,
} from "@chakra-ui/react";

// ChakraComponent는 21분 40초쯤 ..설명 ㅎ(2강)
function ChakraNextLink({
  href,
  ChakraComponent = Box,
  children,
  ChakraLinkProps = {},
  noUnderline,
  overlay,
  color,
  ...props
}) {
  const LinkComponent = overlay ? LinkOverlay : ChakraLink;

  if (noUnderline) {
    ChakraLinkProps._hover = ChakraLinkProps._hover || {};
    ChakraLinkProps._hover.textDecoration = "none";
  }

  return (
    <div>
      <Link href={href} passHref>
        <LinkComponent color={color} {...ChakraLinkProps}>
          <ChakraComponent {...props}>{children}</ChakraComponent>
        </LinkComponent>
      </Link>
    </div>
  );
}
const ChakraBtnLink = (props) => (
  <ChakraNextLink ChakraComponent={Button} noUnderline {...props} />
);
//=>BlogPreviewCard와 관련이 있는듯 ?..

// link를 꾸며주는듯? 티가 아나니까
const ChakraTextLink = (props) => {
  const { colorMode } = useColorMode();
  return (
    <ChakraLink
      ChakraComponent={Text}
      {...props}
      color={`teal.${colorMode === "light" ? 500 : 200}`}
    />
  );
};

export { ChakraBtnLink, ChakraTextLink };

export default ChakraNextLink;

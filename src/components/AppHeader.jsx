import { Flex, Spacer, Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import AppDrawer from "./AppDrawer";
import ChakraNextLink from "./ChakraLink";
// <SearchIcon/>그냥 이렇게 주면 css 효과가 없네?
import Search from "./Search";
const CustomIconBtn = ({ Icon, ...props }) => {
  return <IconButton icon={<Icon />} {...props} size="lg" ml="1rem" />;
};

// search btn
const SearchBtn = () => {
  const { onOpen, ...others } = useDisclosure();
  return (
    <>
      <CustomIconBtn Icon={SearchIcon} onClick={onOpen} />
      <Search {...others} />
    </>
  );
};

const HamburgerIconNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <div>
      <CustomIconBtn Icon={HamburgerIcon} onClick={onOpen} />
      {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
    </div>
  );
};

const Logo = () => {
  const dimension = 70;
  return (
    // 아웃라인 굳이?.. 티도 잘 안나는디 없애야 하나
    <ChakraNextLink
      href="/"
      ChakraLinkProps={{
        _focus: {
          outline: 0,
        },
      }}
    >
      <Image
        src="/카리나.jpg"
        height={dimension}
        width={dimension}
        alt="Suwan coding"
      />
    </ChakraNextLink>
  );
};

function AppHeader() {
  return (
    <Box px="2rem" pt="5rem">
      <Flex alignItems="center">
        <Logo />

        {/* Spacer주니까 양쪽으로 Logo와 icon이 벌어짐 .. */}
        <Spacer />
        <SearchBtn />
        <HamburgerIconNav />
      </Flex>
    </Box>
  );
}

export default AppHeader;

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
// 여기서 의문, chakraNextLink인데 왜 next빼고 해도 도지?
import ChakraLink from "components/ChakraLink";
const DrawerList = ({ onClose }) => {
  const listItems = [
    { name: "Home", link: "/" },
    { name: "Categorise", link: "/categorise" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <List>
      {listItems.map((item) => (
        <ChakraLink
          key={nanoid()}
          href={item.link}
          ChakraLinkProps={{
            _focus: {
              outline: 0,
            },
          }}
          ChakraComponent={ListItem}
          sx={{ display: "block", mt: 5, fontSize: "lg" }}
          onClick={onClose}
        >
          {item.name}
        </ChakraLink>
      ))}
    </List>
  );
};

function AppDrawer({ onClose, isOpen }) {
  return (
    <div>
      <Drawer size="md" placement="left" isOpen={isOpen} onClose={onClose}>
        {/* 화면 뒤를 클릭하면 닫히는 기능이 Overlay다. */}
        <DrawerOverlay />

        {/* 여기부턴 햄버거 클릭 시 나오는 modal를 꾸며주는 부분이다. */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py={8}>
            <Heading>와니 블로그</Heading>
          </DrawerHeader>
          <DrawerBody>
            <DrawerList onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default AppDrawer;

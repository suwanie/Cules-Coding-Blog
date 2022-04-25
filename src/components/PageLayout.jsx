import { Center, Container, Text } from "@chakra-ui/react";
import AppHeader from "./AppHeader";
import ToggleColorMode from "./ToggleColorMode";
function PageLayout({ children }) {
  return (
    <div>
      <AppHeader />
      <Container px={4} maxW="5xl">
        {children}
      </Container>

      {/* footer */}
      <Center m="2rem 0">
        <Text>나, 이수완, 향년 95세, 행복하게 잘 살다 간다. </Text>
      </Center>
      <ToggleColorMode />
    </div>
  );
}

export default PageLayout;

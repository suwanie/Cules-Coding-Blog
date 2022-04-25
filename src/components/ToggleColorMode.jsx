import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        size="lg"
        colorScheme="teal"
        sx={{
          pos: "fixed",
          bottom: "3rem",
          right: "2rem",
          zIndex: 1,
        }}
        onClick={toggleColorMode}
      />
    </div>
  );
}

export default ToggleColorMode;

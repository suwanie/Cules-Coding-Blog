import { Box } from "@chakra-ui/react";

function Wrapper({ children }) {
  return (
    <div>
      {/* 그냥 트윗이나 유튜브 동영상과 다른 글들의 마진 y값임 .. 별거 아님 */}
      <Box my={8}>{children}</Box>
    </div>
  );
}

export default Wrapper;

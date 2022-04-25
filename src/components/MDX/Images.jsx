import Image from "next/image";
import Wrapper from "./Wrapper";

const NextImg = (props) => (
  <Wrapper>
    <Image {...props} />
  </Wrapper>
);

const components = { NextImg };

components.img = (props) => (
  <Wrapper>
    <img {...props} />
  </Wrapper>
);

export default components;

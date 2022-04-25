import texts from "./texts";
import embeds from "./embed";
import Lists from "./Lists";
import Codes from "./Codes";
import Images from "./Images";
const components = { ...texts, ...embeds, ...Codes, ...Lists, ...Images };

export default components;

// css를 담당
// mdx파일을 보면 youtube와 tweet 컴포넌트가 있는데 그걸 여기서 뭐 해줘야 한다. =>mdx embed를 써준다.

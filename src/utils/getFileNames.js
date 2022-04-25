import fs from "fs";
import path from "path";

const root = process.cwd();

const getFileNames = () => fs.readdirSync(path.join(root, "src", "blogs"));

export default getFileNames;

//log의 결과값은 my-first-blog.mdx 이다. 오..저 경로에 있는 파일 이름을 가져오는구나??

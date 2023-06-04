import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface ArticleData {
  id: string;
  htmlContent: string;
  title: string;
  publishedDate: string;
  description: string;
  themes: string;
}

const articlesDirectory = path.join(process.cwd(), "src/articles");

export async function getArticleData(id: string): Promise<ArticleData | null> {
  if (!getAllArticleIds().includes(id)) {
    return null;
  }
  const fullPath = path.join(articlesDirectory, `${id}/${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  // parse metadata with gray-matter
  const matterResult = matter(fileContent);

  // convert markdown into HTML with remark
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const htmlContent = processedContent.toString();

  const { title, publishedDate, description, themes } = matterResult.data;

  return {
    id,
    htmlContent,
    title,
    publishedDate,
    description,
    themes,
  };
}

export function getAllArticleIds() {
  return fs.readdirSync(articlesDirectory);
}

// async function getAllMetaData() {
//   console.log(articlesDirectory);
//   const metaData = fs
//     .readdirSync(articlesDirectory)
//     .map((folderName: string) => {
//       const fullPath = path.join(
//         articlesDirectory,
//         `${folderName}/${folderName}.md`
//       );
//       const fileContent = fs.readFileSync(fullPath, "utf8");

//       const matterResult = matter(fileContent);
//       return matterResult.data;
//     });

//   console.log(metaData);
// }

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Date from "@/components/Date/Date";
import { getAllArticleIds, getArticleData } from "@/lib/articles";
import { parsePathToBreadCrumbLinks } from "@/lib/utils";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const articleIds = getAllArticleIds();
  return articleIds.map((articleId: string) => ({ id: articleId }));
}

export default async function Article({ params }: { params: { id: string } }) {
  const article = await getArticleData(params.id);
  if (!article) {
    notFound();
  }
  const breadCrumbLinks = parsePathToBreadCrumbLinks(article.themes);

  return (
    <>
      <h1>{article.title}</h1>
      <Breadcrumb links={breadCrumbLinks} />
      <Date>{article.publishedDate}</Date>

      <div
        dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        className="p-0"
      ></div>
    </>
  );
}

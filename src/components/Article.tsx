import Link from "next/link";
import Breadcrumb, { BreadcrumbLink } from "./Breadcrumb/Breadcrumb";
import Date from "./Date/Date";
import { parsePathToBreadCrumbLinks } from "@/lib/utils";

interface ArticleProps {
  id: number;
  title: string;
  path: string;
  publishedDate: string;
  description: string;
}

export default function Article({
  id,
  title,
  path,
  publishedDate,
  description,
}: ArticleProps) {
  const breadCrumbLinks = parsePathToBreadCrumbLinks(path);

  return (
    <article key={id}>
      <h2>{title}</h2>
      <Breadcrumb links={breadCrumbLinks} />
      <Date>{publishedDate}</Date>
      <p>
        {description}
        <Link key={id} href={`${path}/${id}`}>
          continue reading
        </Link>
      </p>
    </article>
  );
}

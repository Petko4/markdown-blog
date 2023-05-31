import Link from "next/link";
import Breadcrumb, { BreadcrumbLink } from "./Breadcrumb/Breadcrumb";
import Date from "./Date/Date";

interface ArticleProps {
  id: number;
  title: string;
  path: string;
  publishedDate: string;
  description: string;
}

function createBreadcrumbLinks(path: string): BreadcrumbLink[] {
  const pathSeparated = path.split("/");
  return pathSeparated.map((path, index, arr) => {
    const url = "/" + arr.slice(0, index + 1).join("/");
    return {
      name: path,
      url,
    };
  });
}

export default function Article({
  id,
  title,
  path,
  publishedDate,
  description,
}: ArticleProps) {
  const breadCrumbLinks = createBreadcrumbLinks(path);

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

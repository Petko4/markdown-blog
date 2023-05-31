import Link from "next/link";
import style from "./breadcrumb.module.css";

interface BreadcrumbProps {
  links: BreadcrumbLink[];
  className?: string;
}

export type BreadcrumbLink = {
  name: string;
  url: string;
};

export default function Breadcrumb({ links, className }: BreadcrumbProps) {
  const listItems = links.map((link, index, arr) => {
    const listItem = (
      <li key={link.url} className={`${style["breadcrumb__list-item"]}`}>
        <Link href={link.url} className={`p-0 link`}>
          {link.name}
        </Link>
      </li>
    );
    if (index === 0) {
      return listItem;
    }
    return <> / {listItem}</>;
  });

  return (
    <ul className={`${style.breadcrumb__list} ${className}`}>{listItems}</ul>
  );
}

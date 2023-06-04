import { BreadcrumbLink } from "@/components/Breadcrumb/Breadcrumb";

export function parsePathToBreadCrumbLinks(path: string): BreadcrumbLink[] {
  const pathSeparated = path.split("/");
  return pathSeparated.map((path, index, arr) => {
    const url = "/" + arr.slice(0, index + 1).join("/");
    return {
      name: path,
      url,
    };
  });
}

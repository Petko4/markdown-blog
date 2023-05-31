import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Date from "@/components/Date/Date";
import Article from "@/components/Article";

const data = [
  {
    id: 1,
    title: "Selection sort",
    path: "algorithms/sorting algorithms",
    publishedDate: "2020-01-02",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris tincidunt 
    sem sed arcu. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus 
    libero, eget facilisis enim ipsum id lacus. Phasellus et lorem id felis nonummy 
    placerat. Sed ac dolor sit amet purus malesuada congue. Integer tempor. Class 
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
     Maecenas lorem. Aenean placerat. Mauris suscipit, ligula sit amet pharetra semper, nibh 
     ante cursus purus, vel sagittis velit mauris vel metus. Fusce consectetuer 
     risus a nunc. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.`,
  },
  {
    id: 2,
    title: "Insert sort",
    path: "algorithms/sorting algorithms",
    publishedDate: "2020-01-02",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris tincidunt 
    sem sed arcu. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus 
    libero, eget facilisis enim ipsum id lacus. Phasellus et lorem id felis nonummy 
    placerat. Sed ac dolor sit amet purus malesuada congue. Integer tempor. Class 
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
     Maecenas lorem. Aenean placerat. Mauris suscipit, ligula sit amet pharetra semper, nibh 
     ante cursus purus, vel sagittis velit mauris vel metus. Fusce consectetuer 
     risus a nunc. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.`,
  },
  {
    id: 3,
    title: "Bubble sort",
    path: "algorithms/sorting algorithms",
    publishedDate: "2020-01-02",
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris tincidunt 
    sem sed arcu. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus 
    libero, eget facilisis enim ipsum id lacus. Phasellus et lorem id felis nonummy 
    placerat. Sed ac dolor sit amet purus malesuada congue. Integer tempor. Class 
    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
     Maecenas lorem. Aenean placerat. Mauris suscipit, ligula sit amet pharetra semper, nibh 
     ante cursus purus, vel sagittis velit mauris vel metus. Fusce consectetuer 
     risus a nunc. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.`,
  },
];
export default function Home() {
  return (
    <>
      {data.map(
        (article) => (
          <Article key={article.id} {...article} />
        )
        // const areas = article.path.split("/");

        // return (
        //   <article key={article.id}>
        //     <h2>{article.title}</h2>
        //     {areas.map((area) => (
        //       <Link key={area} href="/">
        //         {area}
        //       </Link>
        //     ))}
        //     <Date>{article.publishedDate}</Date>
        //     <p>{article.description}</p>
        //     <Link href="/">read article</Link>
        //   </article>
        // );
      )}
    </>
  );
}

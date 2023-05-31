import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import { roboto, inter, ebGaramond } from "./fonts";

export const metadata = {
  title: "Petko's Blog",
  description:
    "A personal blog about software development and my other interests.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${inter.variable} ${ebGaramond.variable}`}
    >
      <body>
        <div className={`${styles.container} p-0`}>
          <header className="p-0">
            <div className={`${styles["header__image-contianer"]} p-0`}>
              <Image
                src="/images/header-background.jpg"
                alt="Header background image"
                fill
                sizes="100vw"
                className={`${styles["header__image"]} p-0`}
              />
            </div>
          </header>
          <main className={"p-2"}>{children}</main>
        </div>
      </body>
    </html>
  );
}

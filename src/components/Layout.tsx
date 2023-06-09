import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col h-screen justify-between container mx-auto px-4 ">
    <Head>
      <title>MovieMaze</title>
      <meta
        name="description"
        content="Generated by create next app"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="description"
        content="Choose a movie to your taste!"
      />
      <meta
        property="og:title"
        content="Search movie"
      />
      <meta
        property="og:description"
        content="Choose a movie to your taste!"
      />
      <meta
        property="og:url"
        content="https://myclothingstore.com/"
      />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/icon.svg" />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

import Link from "next/link";
import React, { FC } from "react";
import { Favorite } from "./Favorite";

export const Header: FC = () => {
  return (
    <header className="flex justify-between mt-10 mb-10">
      <Link href="/" className="text-white text-4xl">
        Movie<span className="text-teal-400">Maze</span>
      </Link>
      <Favorite />
    </header>
  );
};

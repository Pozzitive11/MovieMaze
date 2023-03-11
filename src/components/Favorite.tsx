import { useAppSelector } from "@/hooks/reduxToolkitHooks";
import Image from "next/image";
import React, { FC } from "react";

export const Favorite: FC = () => {
  const favoriteMovies = useAppSelector(
    (state) => state.movies.movies
  );
  return (
    <div className="relative inset-0 w-10 h-10">
      <span className="text-white text-2xl absolute -bottom-2 -right-0">
        {favoriteMovies.length}
      </span>
      <Image
        src="/hearts.svg"
        alt="Favorites"
        width={40}
        height={40}
      />
    </div>
  );
};

import React, { FC } from "react";
import { GetServerSideProps } from "next";
import { MovieById } from "../../../types";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/reduxToolkitHooks";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/store/movieSlice";

interface MovieProps {
  movie: MovieById;
}

export const getServerSideProps: GetServerSideProps =
  async (context) => {
    const { id } = context.query;

    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=8646ea06`
    );
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { movie: data },
    };
  };

const Movie: FC<MovieProps> = ({ movie }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const favoriteMovies = useAppSelector(
    (state) => state.movies.movies
  );
  const { id } = router.query;

  const {
    Title,
    Year,
    Plot,
    imdbRating,
    Poster,
    Genre,
    Runtime,
    imdbID,
  } = movie || {};

  const currentMovie = favoriteMovies.find(
    (movie) => movie.title == Title
  );

  return (
    <>
      <Head>
        <title>{Title}</title>
      </Head>
      <main className="mb-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center mb-6 md:mb-10 bg-transparent hover:bg-slate-500 hover:bg-opacity-5 border-none rounded"
        >
          <Image
            src="/arrow-left.svg"
            width={70}
            height={40}
            alt="Back to prev page"
          />
        </button>
        {id == imdbID ? (
          <div className="md:flex text-white">
            <Image
              className="mb-4 mr-10 rounded bg-slate-500/5"
              src={Poster.length < 10 ? "/" : Poster}
              alt={Title}
              width={303}
              height={430}
            />
            <div>
              <h1 className="text-4xl md:text-6xl mb-4 md:mb-10">
                {Title}
              </h1>
              <div className="mb-6 lg:flex items-center lg:space-x-4">
                <div className="flex mb-3 lg:mb-0 space-x-4">
                  <div className="flex">
                    <Image
                      className="mr-2"
                      src="/star.svg"
                      width={20}
                      height={20}
                      alt="Star"
                    />
                    <p>{imdbRating}</p>
                  </div>
                  <span>{Genre}</span>
                </div>
                <div className="flex space-x-4">
                  <span className="flex ">
                    <Image
                      className="mr-1"
                      src="/calendar.svg"
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    {Year}
                  </span>
                  <span className="flex">
                    <Image
                      className="mr-1"
                      src="/clock.svg"
                      alt="clock icon"
                      width={20}
                      height={20}
                    />
                    {Runtime}
                  </span>
                </div>
              </div>

              <p className="max-w-4xl md:text-lg mb-10">
                {Plot}
              </p>
              {currentMovie ? (
                <button
                  onClick={() =>
                    dispatch(
                      removeFromFavorite({
                        Title,
                        imdbID,
                      })
                    )
                  }
                  className="flex items-center bg-red-500 text-white font-bold py-2 px-4 md:py-4 md:px-6 rounded border border-white"
                >
                  Unfavorite
                  <Image
                    className="ml-3"
                    src="/white-heart.svg"
                    width={20}
                    height={20}
                    alt="Heart icon"
                  />
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      addToFavorite({ Title, imdbID })
                    )
                  }
                  className="flex items-center bg-transparent font-semibold text-white py-2 px-4 md:py-4 md:px-6 border border-white  rounded"
                >
                  Favorite
                  <Image
                    className="ml-3"
                    src="/white-heart.svg"
                    width={20}
                    height={20}
                    alt="Heart icon"
                  />
                </button>
              )}
            </div>
          </div>
        ) : (
          <h1 className="text-6xl text-white">
            Incorrect movie id
          </h1>
        )}
      </main>
    </>
  );
};

export default Movie;

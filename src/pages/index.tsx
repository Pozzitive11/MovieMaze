import Head from "next/head";
import { MoviesList } from "@/components/MoviesList";
import { Search } from "@/components/search/Search";
import useSWR from "swr";
import { useRouter } from "next/router";
import { initialQuery, ROOT_URL } from "@/config";

const Home = () => {
  const router = useRouter();

  const { s = initialQuery } = router.query;

  const fetcher = async () => {
    const response = await fetch(
      ROOT_URL + `&s=${encodeURIComponent(`${s}`)}`
    );
    const data = await response.json();

    return data.Search;
  };

  const { data }: any = useSWR(s, fetcher);

  return (
    <main className="mb-auto">
      <h1 className="absolute w-1 h-1 -m-1 p-0 overflow-hidden">
        Search movie
      </h1>
      <Search />
      <MoviesList movies={data} />
    </main>
  );
};

export default Home;

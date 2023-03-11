import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn{"'"}t find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But don{"'"}t worry, you can find plenty of
              other things on our homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;

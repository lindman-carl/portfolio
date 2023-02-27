import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout title="Portfolio" description="Carl Lindman's portfolio">
      <Header />
      <div className="flex w-screen flex-col overflow-x-hidden px-8 sm:px-24 lg:max-w-2xl lg:px-0">
        <h2 className="py-4 px-16 text-left text-xl font-bold sm:px-4">
          web apps
        </h2>
        <div className="grid w-full grid-flow-row grid-cols-1 gap-y-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center px-12 sm:px-0">
            <a
              className="h-full w-full overflow-hidden rounded-xl shadow-xl sm:h-64 sm:w-64"
              href="https://tackmantel.lindman.dev"
            >
              <Image
                src="/tackmantel-logo-960.png"
                alt="täckmantel web app"
                width="960"
                height="960"
                className="transition-transform duration-500 hover:scale-110"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center px-12 sm:px-0">
            <a
              className="h-full w-full overflow-hidden rounded-xl shadow-xl sm:h-64 sm:w-64"
              href="https://seasweeper.lindman.dev"
            >
              <Image
                src="/seasweeper-logo-960.webp"
                alt="sea sweeper web app"
                width="960"
                height="960"
                className="transition-transform duration-500 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

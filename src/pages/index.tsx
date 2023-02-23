import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Image from "next/image";

const Home = () => {
  return (
    <Layout title="Portfolio" description="Carl Lindman's portfolio">
      <Header />
      <div className="flex w-screen flex-col px-8 sm:px-24 lg:max-w-2xl lg:px-0">
        <div className="h-full w-full ">
          <h2 className="py-4 px-16 text-left text-xl font-bold sm:px-4">
            skills
          </h2>
          <div className="grid grid-cols-3 gap-y-4 rounded-lg p-4 shadow-inner sm:grid-cols-7">
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image
                src="/skill-react.svg"
                alt="react"
                width="32"
                height="32"
              />
              <span>React.js</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image
                src="/skill-js.svg"
                alt="javascript"
                width="32"
                height="32"
              />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image
                src="/skill-ts.svg"
                alt="typescript"
                width="32"
                height="32"
              />
              <span>TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image src="/skill-html.svg" alt="html" width="32" height="32" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image src="/skill-css.svg" alt="css" width="32" height="32" />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image src="/skill-svg.svg" alt="svg" width="32" height="32" />
              <span>SVG</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2 drop-shadow">
              <Image
                src="/skill-python.svg"
                alt="python"
                width="32"
                height="32"
              />
              <span>Python</span>
            </div>
          </div>
        </div>
        <h2 className="py-4 px-16 text-left text-xl font-bold sm:px-4">
          web apps
        </h2>
        <div className="grid w-full grid-flow-row grid-cols-1 gap-y-8 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <a
              className="h-64 w-64 overflow-hidden rounded-xl shadow-xl"
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
          <div className="flex flex-col items-center justify-center">
            <a
              className="h-64 w-64 overflow-hidden rounded-xl shadow-xl"
              href="https://seasweeper.lindman.dev"
            >
              <Image
                src="/seasweeper-logo-960.png"
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

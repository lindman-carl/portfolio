import { useRouter } from "next/router";
import Image from "next/image";
import Portfolio from "../../data/portfolio.json";
import { Carousel } from "@trendyol-js/react-carousel";

const ArrowLeft = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute z-10 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-orange-500 drop-shadow">
        <Image
          src={"/svg/arrow-left.svg"}
          width={32}
          height={32}
          alt="arrow left"
        />
      </div>
    </div>
  );
};
const ArrowRight = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute z-10 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-orange-500 drop-shadow">
        <Image
          src={"/svg/arrow-right.svg"}
          width={32}
          height={32}
          alt="arrow left"
        />
      </div>
    </div>
  );
};

const PortfolioApp = () => {
  const router = useRouter();
  const { id } = router.query;

  // get the portfolio item from the portfolio.json file
  const portfolioItem = Portfolio.find((item) => item.id === id);
  if (!portfolioItem) {
    return <div>404 bro</div>;
  }

  return (
    <div className="my-8 flex max-w-md flex-col items-center">
      <div className="flex max-w-sm flex-col items-center justify-center">
        <Carousel
          show={1}
          slide={1}
          autoSwipe={5000}
          dynamic
          rightArrow={ArrowRight()}
          leftArrow={ArrowLeft()}
        >
          {portfolioItem.images.map((image) => (
            <div
              key={image}
              className="flex h-full flex-col items-center justify-center"
            >
              <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
                className="shadow-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="z-10 my-8 flex h-full flex-col items-center justify-center rounded-lg bg-slate-900 p-4 px-8 text-justify shadow-inner">
        <a href={portfolioItem.url} className="flex gap-x-1">
          <h2 className="text-3xl font-bold underline decoration-orange-500">
            {portfolioItem.title}
          </h2>
          <Image
            src={"/open-in-new.svg"}
            width={24}
            height={24}
            alt="open in new"
            className="inline-flex"
          />
        </a>
        <div className="my-2 drop-shadow-lg">
          <a href={portfolioItem.github}>
            <Image
              src="/github-mark.svg"
              alt="github social"
              width="32"
              height="32"
              className="drop-shadow"
            />
          </a>
        </div>
        {portfolioItem.about.map((paragraph, idx) => (
          <p key={idx} className="my-2 text-sm">
            {paragraph}
          </p>
        ))}
        <h3 className="w-full text-left underline decoration-orange-500">
          features
        </h3>
        <ul className="mb-2 w-full list-inside list-disc text-left">
          {portfolioItem.features.map((feature, idx) => (
            <li key={idx} className="text-sm">
              {feature}
            </li>
          ))}
        </ul>
        <h3 className="w-full text-left underline decoration-orange-500">
          technologies
        </h3>
        <ul className="mb-2 w-full list-inside list-disc text-left">
          {portfolioItem.technologies.map((tech, idx) => (
            <li key={idx} className="text-sm">
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={portfolioItem.url}
          className="my-2 rounded-lg bg-orange-500 py-2 px-4 font-bold text-white"
        >
          Try {portfolioItem.title}
        </a>
      </div>
    </div>
  );
};

export default PortfolioApp;

import Image from "next/image";

const SignatureFooter = () => {
  return (
    <div className="inline-flex gap-4 justify-self-end py-4 text-center text-base font-light text-slate-100">
      @lindman_dev
      <a
        href="https://github.com/lindman-carl/tackmantel"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 font-semibold underline decoration-slate-600 decoration-2 underline-offset-auto "
      >
        GitHub
        <Image
          src="/open-in-new.svg"
          alt="open in new tab"
          width="16"
          height="16"
        />
      </a>
    </div>
  );
};

export default SignatureFooter;

import ImageGrid from "./components/ImageGrid";

export default function App() {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="border-0 border-b-4 border-dashed"></div>
        <div className="flex h-[32rem] w-full justify-end self-end py-10">
          <div className="ml-8 mr-20 flex w-max flex-auto flex-col">
            <section className="font-text text-xl">
              <h1 className="text-right font-display text-6xl font-normal">
                ya.
              </h1>
              <h2>hi! i'm ethan Zhou,</h2>
            </section>
            <div className="relative border-0 border-t-2 border-solid pt-2 text-right font-comic after:mx-2 after:content-['→']">
              Ethan Zhou
            </div>
            <div className="m-0 mt-10 p-0 font-text leading-9 [&_*]:text-slate-500 [&_*]:no-underline">
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#ezhou_A">ezhou_A</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Intimacy">Intimacy</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#ezhou_B">ezhou_B</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#jaw">jaw</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#gatsby">gatsby</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Tyler">Tyler</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Arda">Arda</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Kai">Kai</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Ryan">Ryan</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#rhapsody">rhapsody</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#self1">self1</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#Kline">Kline</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#love letter">love&nbsp;letter</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#mon art cubiste">mon&nbsp;art&nbsp;cubiste</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#ezhou_C">ezhou_C</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#postamc12a2022">postamc12a2022</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#proset">proset</a>
              </span>
              <wbr />
              <span className="inline after:mx-4 after:content-['·']">
                <a href="#unknown">unknown</a>
              </span>
              <wbr />
            </div>
          </div>
          <img
            className="h-full w-auto object-scale-down"
            src="art/src/assets/images/pocket/self2.jpg"
            alt="self2"
          />
        </div>
        <ImageGrid />
      </div>
    </>
  );
}

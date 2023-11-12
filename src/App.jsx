import React, { createContext } from "react";
import self2 from "./assets/images/pocket/self2.jpg";
import postamc12a2022 from "./assets/images/pocket/postamc12a2022.jpg";
import ethanzhou from "./assets/ethanzhou.svg";
import ImageGrid from "./components/ImageGrid";
import imageData from "./imageData.json";

export default function App() {
  const { images } = imageData;

  return (
    <>
      <div className="border-0 border-b-4 border-dashed"></div>
      <ImagesContext.Provider value={images}>
        <div className="relative flex flex-col p-8">
          <div className="flex h-[32rem] w-full self-end py-10">
            <div className="mr-12 flex w-max flex-auto flex-col">
              <section className="font-text text-xl">
                <h1 className="text-right font-display text-6xl font-normal">
                  ya!
                </h1>
                <h2>I'm Ethan; this is some of my art.</h2>
              </section>
              <div className="relative border-0 border-t-2 border-solid pt-2 text-right font-text text-slate-600 after:mx-2 after:content-['→']">
                Ethan Zhou
              </div>
              <nav className="mt-10">
                <div className="mb-3 font-text text-2xl lowercase text-slate-400">
                  Contents
                </div>
                <div className="ml-8 border-0 border-l-[1px] border-solid border-slate-400 pb-10 pl-4 pt-2 text-justify font-text text-xl leading-10 [&_*]:text-slate-600 [&_*]:no-underline">
                  {images.map(image => (
                    <React.Fragment key={image.name}>
                      <span className="inline after:mx-2 after:content-['_·_'] last-of-type:after:content-['']">
                        <a href={`#${image.name}`}>{image.name}</a>
                      </span>
                      <wbr />
                    </React.Fragment>
                  ))}
                </div>
              </nav>
            </div>
            <div className="group relative">
              <img
                className="h-full w-auto object-scale-down"
                src={self2}
                alt="self2"
              />
              <img
                className="pointer-events-none absolute left-[50%] top-0 h-full w-full -translate-x-1/2 object-cover opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                src={postamc12a2022}
                alt="postamc12a2022"
              />
            </div>
          </div>
          <div className="relative">
            <div className="mb-2 font-display text-2xl lowercase text-zinc-500">
              click on an image to view its entirety, and then press{" "}
              <span className="inline-flex items-center rounded border-solid bg-slate-100 p-1 font-mono text-2xl">
                esc
              </span>{" "}
              or click again to exit the modal.
            </div>
            <ImageGrid />
            <div className="absolute bottom-0 right-0 -z-50 font-hand mix-blend-difference">
              <img className="w-80" src={ethanzhou} alt="ethan zhou gregg" />
            </div>
          </div>
        </div>
      </ImagesContext.Provider>
    </>
  );
}

export const ImagesContext = createContext();

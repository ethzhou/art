import React, { createContext } from "react";
import self2 from "./assets/images/pocket/self2.jpg";
import ImageGrid from "./components/ImageGrid";

export default function App() {
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
            <img
              className="h-full w-auto object-scale-down"
              src={self2}
              alt="self2"
            />
          </div>
          <div>
            <div className="mb-2 font-display text-2xl lowercase text-zinc-500">
              click on an image to view its entirety, and then press{" "}
              <span className="inline-flex items-center rounded border-solid bg-slate-100 p-1 font-mono text-2xl">
                esc
              </span>{" "}
              or click again to exit the modal.
            </div>
            <ImageGrid />
          </div>
          <div className="absolute bottom-0 right-0 font-hand mix-blend-difference">
            ethzhou
          </div>
        </div>
      </ImagesContext.Provider>
    </>
  );
}

const images = [
  { name: "ezhou_A", colSpan: 12, rowSpan: 1 },
  { name: "Intimacy", colSpan: 3, rowSpan: 2, originalFileFormat: "png" },
  { name: "ezhou_B", colSpan: 5, rowSpan: 2 },
  { name: "jaw", colSpan: 4, rowSpan: 1, originalFileFormat: "png" },
  { name: "gatsby", colSpan: 4, rowSpan: 4, originalFileFormat: "png" },
  { name: "rushmore", colSpan: 8, rowSpan: 1 },
  { name: "Tyler", colSpan: 2, rowSpan: 1 },
  { name: "Arda", colSpan: 2, rowSpan: 1 },
  { name: "Kai", colSpan: 2, rowSpan: 1 },
  { name: "Ryan", colSpan: 2, rowSpan: 1 },
  { name: "rhapsody", colSpan: 8, rowSpan: 5 },
  { name: "self1", colSpan: 4, rowSpan: 1 },
  { name: "Kline", colSpan: 4, rowSpan: 2, originalFileFormat: "png" },
  { name: "love_letter", colSpan: 4, rowSpan: 2 },
  { name: "ezhou_C", colSpan: 4, rowSpan: 3 },
  { name: "proset", colSpan: 4, rowSpan: 3 },
  { name: "postamc12a2022", colSpan: 4, rowSpan: 2, originalFileFormat: "png" },
];

export const ImagesContext = createContext(images);

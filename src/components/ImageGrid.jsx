import ezhou_A from "../assets/images/pocket/ezhou_A.jpg";
import Intimacy from "../assets/images/pocket/Intimacy.jpg";
import ezhou_B from "../assets/images/pocket/ezhou_B.jpg";
import jaw from "../assets/images/pocket/jaw.jpg";
import gatsbyCopy from "../assets/images/pocket/gatsby copy.jpg";
import Tyler from "../assets/images/pocket/Tyler.jpg";
import Arda from "../assets/images/pocket/Arda.jpg";
import Kai from "../assets/images/pocket/Kai.jpg";
import Ryan from "../assets/images/pocket/Ryan.jpg";
import rhapsody from "../assets/images/pocket/rhapsody.jpg";
import self1 from "../assets/images/pocket/self1.jpg";
import Kline from "../assets/images/pocket/Kline.jpg";
import loveLetter from "../assets/images/pocket/love letter.jpg";
import monArtCubiste from "../assets/images/pocket/mon art cubiste.jpg";
import ezhou_C from "../assets/images/pocket/ezhou_C.jpg";
import postamc12a2022 from "../assets/images/pocket/postamc12a2022.jpg";
import prosetCopy from "../assets/images/pocket/proset copy.jpg";
import unknown from "../assets/images/pocket/unknown.jpg";

export default function ImageGrid() {
  return (
    <div className="relative grid grid-flow-dense auto-rows-[20rem] grid-cols-12 place-items-center gap-1">
      <div className="col-start-1 col-end-13 row-start-1 row-end-1 h-full w-full overflow-hidden">
        <img
          id="ezhou_A"
          className="h-full w-full object-cover"
          // {ezhou_A}
          src={ezhou_A}
          alt="ezhou_A"
        />
      </div>
      <div className="col-span-3 row-span-2 h-full w-full overflow-hidden">
        <img
          id="Intimacy"
          className="h-full w-full object-cover"
          src={Intimacy}
          alt="Intimacy"
        />
      </div>
      <div className="col-span-5 row-span-2 h-full w-full overflow-hidden">
        <img
          id="ezhou_B"
          className="h-full w-full object-cover"
          src={ezhou_B}
          alt="ezhou_B"
        />
      </div>
      <div className="col-span-4 row-span-1 h-full w-full overflow-hidden">
        <img
          id="jaw"
          className="h-full w-full object-cover"
          src={jaw}
          alt="jaw"
        />
      </div>
      <div className="col-span-4 row-span-4 h-full w-full overflow-hidden">
        <img
          id="gatsby"
          className="h-full w-full object-cover"
          src={gatsbyCopy}
          alt="gatsby"
        />
      </div>
      <div className="col-span-2 row-span-1 h-full w-full overflow-hidden">
        <img
          id="Tyler"
          className="h-full w-full object-cover"
          src={Tyler}
          alt="Tyler"
        />
      </div>
      <div className="col-span-2 row-span-1 h-full w-full overflow-hidden">
        <img
          id="Arda"
          className="h-full w-full object-cover"
          src={Arda}
          alt="Arda"
        />
      </div>
      <div className="col-span-2 row-span-1 h-full w-full overflow-hidden">
        <img
          id="Kai"
          className="h-full w-full object-cover"
          src={Kai}
          alt="Kai"
        />
      </div>
      <div className="col-span-2 row-span-1 h-full w-full overflow-hidden">
        <img
          id="Ryan"
          className="h-full w-full object-cover"
          src={Ryan}
          alt="Ryan"
        />
      </div>
      <div className="col-span-8 row-span-4 h-full w-full overflow-hidden">
        <img
          id="rhapsody"
          className="h-full w-full object-cover"
          src={rhapsody}
          alt="rhapsody"
        />
      </div>
      <div className="col-span-4 row-span-1 h-full w-full overflow-hidden">
        <img
          id="self1"
          className="h-full w-full object-cover"
          src={self1}
          alt="self1"
        />
      </div>
      <div className="col-span-4 row-span-2 h-full w-full overflow-hidden">
        <img
          id="Kline"
          className="h-full w-full object-cover"
          src={Kline}
          alt="Kline"
        />
      </div>
      <div className="col-span-4 row-span-2 h-full w-full overflow-hidden">
        <img
          id="love letter"
          className="h-full w-full object-cover"
          src={loveLetter}
          alt="love letter"
        />
      </div>
      <div className="col-span-1 row-span-1 h-full w-full overflow-hidden">
        <img
          id="mon art cubiste"
          className="h-full w-full object-cover"
          src={monArtCubiste}
          alt="mon art cubiste"
        />
      </div>
      <div className="col-span-3 row-span-1 h-full w-full overflow-hidden">
        <img
          id="ezhou_C"
          className="h-full w-full object-cover"
          src={ezhou_C}
          alt="ezhou_C"
        />
      </div>
      <div className="col-span-5 row-span-2 h-full w-full overflow-hidden">
        <img
          id="postamc12a2022"
          className="h-full w-full object-cover"
          src={postamc12a2022}
          alt="postamc12a2022"
        />
      </div>
      <div className="col-span-4 row-span-3 h-full w-full overflow-hidden">
        <img
          id="proset"
          className="h-full w-full object-cover"
          src={prosetCopy}
          alt="proset"
        />
      </div>
      <div className="col-span-3 h-full w-full overflow-hidden">
        <img
          id="unknown"
          className="h-full w-full object-cover"
          src={unknown}
          alt="unknown"
        />
      </div>
      <div className="absolute bottom-0 right-0 font-hand mix-blend-difference">
        ethzhou
      </div>
    </div>
  );
}

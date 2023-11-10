import { useContext, useEffect } from "react";
import ImageItem from "./ImageItem";
import { ImagesContext } from "../App";

export default function ImageGrid() {
  const images = useContext(ImagesContext);

  return (
    <div className="relative grid grid-flow-dense auto-rows-[20rem] grid-cols-12 place-items-center gap-1">
      {images.map(image => (
        <ImageItem
          key={image.name}
          name={image.name}
          colSpan={image.colSpan}
          rowSpan={image.rowSpan}
          originalFileFormat={image.originalFileFormat}
        />
      ))}
    </div>
  );
}

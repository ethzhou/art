import { useEffect, useRef } from "react";

export default function ImageItem({
  name,
  rowSpan,
  colSpan,
  originalFileFormat,
}) {
  const imgRef = useRef();
  const modalDivRef = useRef();

  const srcPocket = new URL(
    `../assets/images/pocket/${name}.jpg`,
    import.meta.url,
  ).href;
  const srcOriginal = new URL(
    `../assets/images/original/${name}.${originalFileFormat}`,
    import.meta.url,
  ).href;

  useEffect(() => {
    imgRef.current.addEventListener("click", handleImageClick);

    return () => {
      imgRef.current.removeEventListener("click", handleImageClick);
    };
  });

  function handleImageClick() {
    modalDivRef.current.style.display = "block";
    modalDivRef.current.addEventListener("click", handleModalClick);
    document.addEventListener("keydown", handleModalKeyDown);
  }

  function handleModalClick() {
    closeModal();
  }

  function handleModalKeyDown(event) {
    if (event.key !== "Escape") return;

    closeModal();
  }

  function closeModal() {
    modalDivRef.current.style.display = "none";
    modalDivRef.current.removeEventListener("click", handleModalClick);
    document.removeEventListener("keydown", handleModalKeyDown);
  }

  return (
    <div
      className="h-full w-full overflow-hidden"
      style={{
        gridColumn: colSpan ? `span ${colSpan} / span ${colSpan}` : "",
        gridRow: rowSpan ? `span ${rowSpan} / span ${rowSpan}` : "",
      }}
    >
      <img
        ref={imgRef}
        id={name}
        className="pointer-events-auto h-full w-full cursor-pointer object-cover"
        src={srcPocket}
        alt={name}
      />
      {/* Modal image */}
      <div
        ref={modalDivRef}
        className="fixed left-0 top-0 hidden h-full w-full cursor-pointer bg-slate-900/90"
      >
        <div className="flex h-full w-full items-center justify-center">
          <img
            className="z-[1] col-start-2 h-[95%] w-[95%] object-contain"
            src={srcOriginal}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}

ImageItem.defaultProps = { originalFileFormat: "jpg" };

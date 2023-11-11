import { useEffect, useRef } from "react";

export default function ImageItem({
  name,
  description,
  rowSpan,
  colSpan,
  originalFileFormat,
}) {
  const imgRef = useRef();
  const modalDivRef = useRef();
  const modalImgRef = useRef();

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
    openModal();
  }

  function handleModalClick() {
    closeModal();
  }

  function handleModalKeyDown(event) {
    if (event.key !== "Escape") return;

    closeModal();
  }

  function openModal() {
    modalDivRef.current.style.display = "block";
    modalDivRef.current.animate(
      { opacity: "1" },
      { duration: 100, fill: "forwards" },
    );
    modalImgRef.current.animate(
      { transition: "translateY(-150px)" },
      { duration: 100, fill: "forwards" },
    );

    modalDivRef.current.addEventListener("click", handleModalClick);
    document.addEventListener("keydown", handleModalKeyDown);
  }

  function closeModal() {
    modalDivRef.current.style.display = "none";
    modalDivRef.current.getAnimations()[0]?.cancel();
    modalImgRef.current.getAnimations()[0].cancel();

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
        className="h-full w-full cursor-pointer object-cover"
        src={srcPocket}
        alt={name}
      />
      {/* Modal image */}
      <div
        ref={modalDivRef}
        className="fixed left-0 top-0 hidden h-screen w-screen cursor-pointer select-none bg-slate-900/90 opacity-0"
      >
        <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] place-content-center">
          <img
            ref={modalImgRef}
            className="pointer-events-none z-[1] col-start-2 max-h-[90vh] max-w-[60vw]"
            src={srcOriginal}
            alt={name}
          />
          <div className="col-start-3 p-4">
            <h3 className="my-2 font-text text-4xl text-slate-100">{name}</h3>
            <p className="select-auto font-text text-slate-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageItem.defaultProps = { originalFileFormat: "jpg" };

export default function ImageItem({ src, alt, scale }) {
  return (
    <div className="">
      <img
        src={src}
        alt={alt ?? src.slice(src.lastIndexOf("/")) ?? ""}
        style={{ width: "auto", height: `200px` }}
      />
    </div>
  );
}

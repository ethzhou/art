import { useEffect, useState } from "react";

export default function Slides({ children, auto, interval }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!auto) return;

    const slideInterval = setInterval(() => {
      setIndex(index => index + 1);
    }, interval ?? 6000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [auto]);

  return (
    <>
      <div className="h-full w-full overflow-hidden object-cover">
        {children.at(index)}
      </div>
    </>
  );
}

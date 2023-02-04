import { ReactElement, useRef,useEffect } from "react";


export const ImageContainer = ({src}: any): ReactElement => {
  const img: React.MutableRefObject<null> = useRef(null);
  const observer: any = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries: any[])  => {
      entries.forEach(entry =>  {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.current.unobserve(entry.target)
      })
    });

    observer.current.observe(img.current);

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <div className="imageContainer">
      <img ref={img} src={src} alt={src} />
    </div>
  );
};
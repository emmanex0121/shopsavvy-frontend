import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../../index.css";

const ScrollableSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Sample array of image URLs
  const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",

  ];

  return (
    <div className="relative w-full">
      {/* Scroll left button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
        onClick={scrollLeft}>
        <LeftOutlined />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-4 px-4 overflow-x-auto overflow-y-hidden relative no-scrollbar touch-pan-x">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[200px] h-40 bg-blue-300 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Scroll right button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
        onClick={scrollRight}>
        <RightOutlined />
      </button>
    </div>
  );
};

export default ScrollableSection;

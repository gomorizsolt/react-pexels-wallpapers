import React from "react";
import useIntersectionObserver from "./useIntersectionObserver";

interface ImageBoxProps {
  photo: Photo;
}

const ImageBox: React.FC<ImageBoxProps> = ({ photo }) => {
  const setNode = useIntersectionObserver();

  return (
    <div className="p-3 rounded-lg">
      <img
        className="w-full"
        ref={setNode}
        src="https://via.placeholder.com/300.png"
        alt={photo.url}
        data-src={photo.src.tiny}
      />
      <p className="text-center mt-2 text-sm">
        Photo provided by Pexels, taken by{" "}
        <a
          href={photo.photographer_url}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="text-blue-400 hover:text-blue-600"
        >
          {photo.photographer}
        </a>
      </p>
    </div>
  );
};

export default ImageBox;

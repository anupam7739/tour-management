import React from "react";
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <div className="masonry__item" key={index}>
            <img
              className="masonry__img"
              src={item}
              alt=""
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};


export default MasonryImagesGallery;

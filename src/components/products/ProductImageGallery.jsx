import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

const ProductImageGallery = ({ productImg }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const imgArr = productImg?.map(({ productImg }) => ({
    original: productImg,
    thumbnail: productImg,
  }));

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="mb-10">
      <ImageGallery
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        slideOnThumbnailOver={true}
        thumbnailPosition={width > 1037 ? 'left' : 'bottom'}
        items={imgArr || []}
      />
    </div>
  );
};

export default ProductImageGallery;

import ImageItem from '../ImageGallery/ImageGalleryItem';
import { ImageGal } from './Image.styled';

function ImageGallery({ response, onImageClick, toggleModal }) {
  return (
    <ImageGal>
      {response.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageItem
          key={id}
          id={id}
          url={webformatURL}
          tag={tags}
          toggleModal={() => toggleModal()}
          onImageClick={() => onImageClick(id, largeImageURL, tags)}
        />
      ))}
    </ImageGal>
  );
}
export default ImageGallery;

import { useState, useEffect } from 'react';
import getImages from './Api/Api';
import { toast, Toaster } from 'react-hot-toast';
import Loader from './LoadMore/Loader';
import SearchBar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMore from './LoadMore/ButtonL';

export default function App() {
  const [textSearch, setTextsearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [modalImg, setModalImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (textSearch === '') return;
    setStatus('pending');

    getImages(textSearch, page)
      .then(data => data.hits)
      .then(response => {
        if (response.length === 0) {
          toast.error("Sorry, we didn't find anything");
          setStatus('idel');
        }
        setImages(prevImages => [...prevImages, ...response]);
        setStatus('resolved');
      })
      .catch(error => console.log(error));
  }, [page, textSearch]);

  const handleSubmit = textSearch => {
    setTextsearch(textSearch);
    setImages([]);
  };

  const hendleMore = () => {
    setPage(page + 1);
  };

  const FindmodalImg = (id, img, tags) => {
    setModalImg({ id: id, img: img, tags: tags });
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSearch={handleSubmit} />
      {status === 'pending' && <Loader />}
      <ImageGallery
        response={images}
        onImageClick={FindmodalImg}
        toggleModal={toggleModal}
      />
      {images.length >= 12 && (
        <ButtonMore loadMoreClick={hendleMore}></ButtonMore>
      )}
      {isOpen && <Modal modalImg={modalImg} onClose={toggleModal} />}
    </>
  );
}

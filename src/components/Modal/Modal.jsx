import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// import PropTypes from 'prop-types';
import { Modalka, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, modalImg }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleClick}>
      <Modalka>
        <img src={modalImg.img} alt={modalImg.tags} key={modalImg.id} />
      </Modalka>
    </Overlay>,
    modalRoot
  );
}

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.handleClick}>
//         <Modalka>
//           <img
//             src={this.props.modalImg.img}
//             alt={this.props.modalImg.tags}
//             key={this.props.modalImg.id}
//           />
//         </Modalka>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

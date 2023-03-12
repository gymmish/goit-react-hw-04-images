import { useState } from 'react';
import { Form, InputForm, SearchBut } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return toast.error("This didn't work");
    }

    onSearch(value);
    setValue('');
  };

  return (
    <header>
      <Form onSubmit={handleSubmit}>
        <InputForm
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <SearchBut type="submit">
          <span>
            <FcSearch></FcSearch>
          </span>
        </SearchBut>
      </Form>
    </header>
  );
}

// export class SearchBar extends Component {
//   state = {
//     value: '',
//   };

//   handleChange = e => {
//     this.setState({ value: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.value.trim() === '') {
//       return toast.error("This didn't work");
//     }

//     this.props.onSearch(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <header>
//         <Form onSubmit={this.handleSubmit}>
//           <InputForm
//             type="text"
//             value={this.state.value}
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//           <SearchBut type="submit">
//             <span>
//               <FcSearch></FcSearch>
//             </span>
//           </SearchBut>
//         </Form>
//       </header>
//     );
//   }
// }

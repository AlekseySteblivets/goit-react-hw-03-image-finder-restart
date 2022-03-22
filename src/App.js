// import { logDOM } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar';
import ImageGalleryItems from './Components/ImageGalleryItem';
import Button from './Components/Button';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';

class App extends Component {
  state = {
    valueForm: '1',
    pictures: [],
    page: 1,
    isLoading: false,
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log(this.state.valueForm);

  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.valueForm !== this.state.valueForm) {
      this.fetchPictures();
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }



  // handleInputChange = (evt) => {
  // }

  addValueForm = (valueFromForm) => {
    this.setState({ valueForm: valueFromForm })
  }

  onClickButton = () => {
    console.log('onClickButton');
    this.fetchPictures();
  }

  fetchPictures = () => {
    this.setState({ isLoading: true });
    fetch(`https://pixabay.com/api/?q=${this.state.valueForm}&page=${this.state.page}&key=21303972-574e9d18be62e9d74443b9e84&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(`нет такого слова ${this.state.valueForm}`),
        );
      }
      )
      .then(data => {
        console.log(data.hits);
        console.log(data);
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
          page: prevState.page + 1,
        }))
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));

  }

  // fetchPictures = () => {
  //   const { currentPage, searchQuery } = this.state;
  //   const options = { currentPage, searchQuery }

  //   this.setState({ isLoading: true });

  //   picturesApi
  //     .fetchPictures(options)
  //     .then(hits => {
  //       this.setState(prevState => ({
  //         pictures: [...prevState.pictures, ...hits],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: 'smooth',
  //       });
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };




  render() {
    const forRenderBtn = this.state.pictures.length > 0 && !this.state.isLoading;
    return (
      <div>
        <Searchbar onSubmit={this.addValueForm} />
        <ImageGallery >
          <ImageGalleryItems pictures={this.state.pictures} />
        </ImageGallery>
        {forRenderBtn && <Button onClickButton={this.onClickButton} />}
        {this.state.isLoading && <BallTriangle color="#00BFFF" height={80} width={80} />}

      </div>
    )
  }
}

export default App;




// componentDidUpdate(prevProps, prevState) {

//   if (prevState !== this.state.valueForm) {
//     this.setState({ isLoading: true });
//     console.log(777);

//     // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
//     fetch(`https://pixabay.com/api/?q=${this.state.valueForm}&page=${this.state.page}&key=21303972-574e9d18be62e9d74443b9e84&image_type=photo&orientation=horizontal&per_page=12`)
//       .then(res => {
//         if (res.ok) {
//           console.log(res.json());
//           return res.json();
//         }
//         return Promise.reject(
//           new Error(`нет такого слова ${this.state.valueForm}`),
//         );
//       }
//       )
//       .then(data => {
//         console.log(data.hits);
//         this.setState({
//           pictures: data.hits
//         })
//       })
//       .catch(error => console.log(error))
//       .finally(() => this.setState({ isLoading: false }));
//   }
//   // console.log('componentDidUpdate');
//   // console.log('prevProps', prevProps);
//   // console.log('prevState', prevState);
//   // console.log(this.state.valueForm);
// }
// import { logDOM } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar';
import ImageGalleryItems from './Components/ImageGalleryItem';
import Button from './Components/Button';
import Modal from './Components/Modal';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from 'react-loader-spinner';

class App extends Component {
  state = {
    valueForm: '1',
    pictures: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImgUrl: '',

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

  togleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal
    }));
  }

  onWebPictureClick = (e) => {
    for (let i = 0; i < this.state.pictures.length; i++) {
      if (this.state.pictures[i].webformatURL === e.target.src) {
        this.setState({
          largeImgUrl: this.state.pictures[i].largeImageURL
        })
      }
    }
    this.togleModal();
  }

  render() {
    const forRenderBtn = this.state.pictures.length > 0 && !this.state.isLoading;
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.addValueForm} />
        <ImageGallery onClickReadyPicture={this.onWebPictureClick}>
          <ImageGalleryItems pictures={this.state.pictures} />
        </ImageGallery>
        {forRenderBtn && <Button onClickButton={this.onClickButton} />}
        {this.state.isLoading && <BallTriangle color="#00BFFF" height={80} width={80} />}
        {showModal &&
          <Modal onClose={this.togleModal} largeImg={this.state.largeImgUrl} />}
      </div>
    )
  }
}

export default App;
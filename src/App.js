// import { logDOM } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Searchbar from './Components/Searchbar';


class App extends Component {
  state = {
    valueForm: '',
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }



  handleInputChange = (evt) => {
  }

  addValueForm = (valueFromForm) => {
    this.setState({ valueForm: valueFromForm })
  }



  render() {
    return (
      <div>
        <Searchbar onSubmit={this.addValueForm} />
        <ImageGallery />
      </div>
    )
  }
}

export default App;

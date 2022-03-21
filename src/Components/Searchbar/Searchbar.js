import { Component } from "react";
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        value: '',
    }

    handleInputChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' })
    }


    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmitForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;
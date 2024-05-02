import './SearchBar.css';
import { useState } from "react";

function SearchBar({ onSubmit}){
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Communicate to the parent');

        //onSubmit("Lord Buddha");

        // onSubmit(
        //     //NEVER EVER EVER DO THIS
        //     document.querySelector('input').value
        // );
        onSubmit(term);
    }

    const handleChange = (event) => {
        // console.log(event.target.value);
        //setTerm(event.target.value.replace(/[a-z]/, ''));
        setTerm(event.target.value);
    }

    return (
        <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
                Confirm your search : {term} <br/>
                <label>Enter Search Term :</label>
                    <input value={term} onChange={handleChange}/> <br/>
                    {term.length < 3 && 'Term must be longer than 2 chars'}
            </form>
        </div>
    );
}

export default SearchBar;
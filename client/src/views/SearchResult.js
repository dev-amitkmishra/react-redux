import React from "react";
import homeIcon from '../assets/images/home-icon.png';
// import classes from './SearchResult.css'; import Overlay from
// '../Overlay/Overlay';

const searchResult = (props) => {

    let result = '';
    result = Object
        .keys(props.suggestions)
        .map((key, i) => {
            let suggestion = props.suggestions[key];
            if(suggestion.message === 'NotFound') {
                return <span>No Result Found with '<span className="Not-Found">{suggestion.searchedText}</span>'</span>
            }
            return <div className="Card" key={suggestion.id}>
                <img src={homeIcon} className="Home" alt='Not found'/>
                <h4
                    className="Suggestion-Location"
                    title="Location"
                    key={suggestion.id + '_' + i}>{suggestion.location}</h4>
                <span className="Suggestion-Name" title="Owner Name">{suggestion.name}</span>
                <span className="Suggestion-Price" title="Price">{suggestion
                        .price
                        .toFixed(2) + 'million $'}</span><br/>
                <span className="Suggestion-Amenities">{suggestion
                        .amenities
                        .split(' ')
                        .map((amenity, i) => {
                            return <span title="Amenity" key={'amenity' + suggestion.id + i}>{amenity}</span>
                        })}</span><br/>
                <span className="Suggestion-Services">{suggestion
                        .services
                        .split(' ')
                        .map((service, i) => {
                            return <span title="Service" key={'service' + suggestion.id + i}>{service}</span>
                        })}</span><br/>

                <span className="Suggestion-Contact">Email:</span>
                <span className="Suggestion-Email" title="Owner Email">{suggestion.email}</span>
            </div>
        })
    return (
        <div className="Container" key="suggestions">{result}</div>
    )
};

export default searchResult;
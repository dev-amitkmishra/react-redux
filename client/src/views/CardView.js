import React from 'react';
import Aux from '../hoc/_aux';
import homeIcon from '../assets/images/home-icon.png';

const card = (props) => {
    const suggestion = props.suggestion;
    
    return (
        <Aux>
            <img src={homeIcon} className="Home" alt='Not found'/>
            <h4
                className="Suggestion-Location"
                title="Location"
                key={suggestion.id}>{suggestion.location}</h4>
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
        </Aux>
    )
}

export default card;
import React from 'react';
import data from '../sampleData/appartmentsData.json';
import homeIcon from '../assets/images/home-icon.png';

const locations = (props) => {
    const jsonData = data;
    let filteredData = '';
    if (jsonData) {
        filteredData = jsonData.filter(dt => {
            return dt
                .location
                .toLowerCase() === props
                .match
                .params
                .location
                .toLowerCase();
        }).map(dt => {
            const suggestion = dt;
            return <div className="Card" key={dt.id}>
                <img src={homeIcon} className="Home" alt='Not found'/>
                <h4 className="Suggestion-Location" title="Location" key={suggestion.id}>{suggestion.location}</h4><br />
                <span className="Suggestion-Name" title="Owner Address">{suggestion.address}</span><br />
                <span className="Suggestion-Name" title="Owner Name">{'Owner: ' + suggestion.name}</span><br />
                <span className="Suggestion-Contact">Email:</span>
                <span className="Suggestion-Email" title="Owner Email">{suggestion.email}</span>
            </div>
        });
        if(filteredData.length === 0) {
            return <span className="Not-Found" key="notfound">No Result Found with '<span key="notFoundChild">{props.match.params.location}</span>'</span>
        }
    }
    return (
        <div>
            {filteredData}
        </div>
    )
};

export default locations;
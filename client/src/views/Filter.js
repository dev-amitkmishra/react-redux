import React from "react";
import * as actionTypes from '../actions/types';

const filter = (props) => {
    return (
        <div className="Filters" onChange={props.changed}>
            <input type="radio" key="filter1" value={actionTypes.PRICE} checked={props.checkedFilter === actionTypes.PRICE}/>Price
            <input type="radio" key="filter2" value={actionTypes.SIZE} checked={props.checkedFilter === actionTypes.SIZE}/>Size
            <input type="radio" key="filter3" value={actionTypes.AMENITIES} checked={props.checkedFilter === actionTypes.AMENITIES}/>Amenities
            <input type="radio" key="filter4" value={actionTypes.SERVICES} checked={props.checkedFilter === actionTypes.SERVICES}/>Services
        </div>
    );
}

export default filter;
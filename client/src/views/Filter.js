import React from "react";
import * as actionTypes from '../actions/types';

const filter = (props) => {
    return (
        <div className="Filters" show={props.show}>
            <span>
                <input
                    type="radio"
                    key="filter1"
                    onChange={props.changed}
                    value={actionTypes.PRICE}
                    checked={props.checkedFilter === actionTypes.PRICE}/>
                <span className="textClass" key="price">Price</span>
            </span>
            <span>
                <input
                    type="radio"
                    key="filter2"
                    onChange={props.changed}
                    value={actionTypes.SIZE}
                    checked={props.checkedFilter === actionTypes.SIZE}/>
                <span className="textClass" key="size">Size</span>
            </span>
            <span>
                <input
                    type="radio"
                    key="filter3"
                    onChange={props.changed}
                    value={actionTypes.AMENITIES}
                    checked={props.checkedFilter === actionTypes.AMENITIES}/>
                <span className="textClass" key="amenities">Amenities</span>
            </span>
            <span>
                <input
                    type="radio"
                    key="filter4"
                    onChange={props.changed}
                    value={actionTypes.SERVICES}
                    checked={props.checkedFilter === actionTypes.SERVICES}/>
                <span className="textClass" key="services">Services</span>
            </span>
            <span>
                <input
                    type="radio"
                    key="filter5"
                    onChange={props.changed}
                    value={actionTypes.DETAILS}
                    checked={props.checkedFilter === actionTypes.DETAILS}/>
                <span className="textClass" key="details">Details</span>
            </span>

        </div>
    );
}

export default filter;
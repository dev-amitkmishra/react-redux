import React from "react";

const search = (props) => {
    return (

        <div className="autocomplete">
            {/* <div class="autocomplete" style="width:300px;">
                <input id="myInput" type="text" name="myCountry" placeholder="Country"/>
            </div> */}

            <input
                type="text"
                key="seachInput"
                className='Input'
                onChange={props.onInput}
                placeholder="Start typing..."/>
            <button key="seachBtn" onClick={props.clicked} className='Button'>Search</button>
        </div>
    );
}

export default search;
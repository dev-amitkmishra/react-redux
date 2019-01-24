import React from 'react';
import data from '../sampleData/data.json';
// import classes from ''

const locations = (props) => {
    const jsonData = data;
    let filteredData = '';
    if (jsonData) {
        filteredData = jsonData.filter(dt => {
            return dt
                .address
                .toLowerCase() === props.match.params.location.toLowerCase();
        }).map(dt => {
            return <div className='Card' key={dt._id}>
                <span key={dt._id + 'appartment1'}>{dt.address}</span><br />
                <span key={dt._id + 'appartment2'}>{dt.email}</span><br />
                <span key={dt._id + 'appartment3'}>{dt._id}</span><br />
                {/* <span key={dt._id + 'appartment'}>{dt.address}-{dt.email}</span>
                <span key={dt._id + 'appartment'}>{dt.address}-{dt.email}</span> */}
            </div>
        });
    }
    return (
        <div>
            {filteredData}
        </div>
    )
};

export default locations;
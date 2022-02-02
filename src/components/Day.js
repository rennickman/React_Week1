import React from 'react';



const Day = ({ day, opens, closes}) => {


    return (
        <div className="day">
            <h3>{day}</h3>
            <p>Opens: {opens}</p>
            <p>Closes: {closes}</p>
        </div>
    );
};




export default Day;

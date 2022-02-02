import React from 'react';
import Day from './Day';
import { openingHoursDb } from '../openingHouseDb';





const Schedule = () => {

    return (
        <div className="schedule">
            {openingHoursDb.map(day => (
                <Day day={day.day} opens={day.opens} closes={day.closes} />
            )) }
        </div>
    );
};

export default Schedule;

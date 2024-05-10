import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Section = (props) => {
    return (
        <section>
            <img src={props.img} />
            <div className="info">
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>{props.location}</p>
                    <a href={props.maps}>View on Google Maps</a>
                </div>
                <h1>{props.name}</h1>
            <div className="date">
                <p>{props.begin}</p>
                <p>-</p>
                <p>{props.end}</p>
            </div>
                <p>{props.dscrb}</p>
            </div>
        </section>
    );
}

export default Section;
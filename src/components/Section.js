import React from "react";


const Section = (props) => {
    return (
        <section>
            <img src={props.img} />
            <div className="info">
                <h3>{props.name}</h3>
                <p>{props.location}</p>
                <p><a href={props.maps}>Google Maps Location</a></p>
                <p>{props.begin}</p>
                <p>{props.end}</p>
                <p>{props.dscrb}</p>
            </div>
        </section>
    );
}

export default Section;
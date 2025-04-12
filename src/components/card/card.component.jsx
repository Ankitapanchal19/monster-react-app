import React from "react";
import './card.css';

export const Card = props => {
    return(
        <div className="card">
            <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.username}</p>
        </div>
    )
}
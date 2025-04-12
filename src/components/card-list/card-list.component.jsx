import React from "react";
import './card-list.css';
import { Card } from "../card/card.component";

export const CardList = (props) => {
    console.log(props)
    return (
        <div className="card-list">
            {
                props.monsters.map((monster)=>
                    <Card monster = {monster} key={monster.id}></Card>
                )
              }
              
        </div>
    )
}
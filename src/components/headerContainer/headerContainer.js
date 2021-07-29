import React from 'react';
import './headerContainer.css';

export let Header = (props) => {
    return ( 
        <div className={"headerContainer"}>
            <div className={"innerHeaderContainer"}>
                <h2>{props.header}</h2>
            </div>    
        </div>
    )
}
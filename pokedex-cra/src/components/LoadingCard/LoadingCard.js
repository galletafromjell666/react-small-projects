import React from "react";
import './LoadingCard.css'
export class LoadingCard extends React.Component{
    render() {
        return(<div className='loadingCardContainer'>
            <h3 className='initialText'>Click a Pokemon</h3>
        </div>
        )
    }
}
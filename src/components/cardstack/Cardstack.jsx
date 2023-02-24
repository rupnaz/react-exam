import React from 'react';
import "./Cardstack.css"
import Card from '../card/Card';

const Cardstack = ({cards, onclick}) => {
    return (
        <div className='card-page'>
            { cards.length > 0 ? cards.map((card) => <Card key={card.id} onclick={onclick} {...card} />) : null }
        </div>
    );
};

export default Cardstack;
import Button from "../components/Button/Button.jsx"
import { useLoaderData, Form } from "react-router-dom";
import { getCards, createCard } from "../cards";
import Cardstack from "../components/cardstack/Cardstack.jsx";
import { useEffect, useState } from "react";
import Card from "../components/card/Card.jsx";

export default function Root(){
    const cards = useLoaderData();
    const [activeCard, setActiveCard] = useState(null)
    
    useEffect(() =>{
        if (cards.length > 0){
            setActiveCard(cards[0])
        }
    }, [cards])

    const onCardClick = (card)=>{
        setActiveCard(card)
    }

    return (
        <div className="card-page">
            { activeCard ? <Card onclick={()=>{}} {...activeCard} /> : null }
            <Cardstack cards={cards} onclick={onCardClick}/>
            <Button text="add a new card" bgcolor="white" link={`/addNewCard`}/>
        </div>
    )
    
}

export async function loader() {
    const cards = await getCards()
    return cards
  }



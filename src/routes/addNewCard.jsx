import Button from "../components/Button/Button"
import Card from "../components/card/Card"
import Cardform from "../components/cardform/Cardform"

export default function addNewCard(){
    return (
        <div className="card__page">
            <div className="card__page-title">
                <h1>ADD A NEW BANK CARD</h1>
                <p>card</p>
            </div>
            <Card cardnumber={`xxxx xxxx xxxx xxxx`} cardholdername="firstname lastname" cardvalid="mm/yy"/>
            <Cardform/>
        </div>
    )
}



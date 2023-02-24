import React from 'react';
import { Form, redirect } from "react-router-dom";
import { createCard } from '../../cards';
import "./Cardform.css"

const Cardform = () => {
    return (
        <div>
            <Form method='post' className='card__form'>
                <div className='card__form-number'>
                    <label htmlFor="cardnumber">CARD NUMBER:</label>
                    <input type="text" name="cardnumber"/>
                </div>
                <div>
                    <label htmlFor="cardholdername">CARDHOLDER NAME:</label>
                    <input type="text" name="cardholdername"/>
                </div>
                <div className='card__form-valid'>
                    <div>
                        <label htmlFor="cardvalid">VALID THRU:</label>
                        <input type="text" name='cardvalid' />
                    </div>

                    <div>
                        <label htmlFor="cardccv">CCV:</label>
                        <input type="text" name='cardccv' />
                    </div>
                </div>
                <div className='card__vendor'>
                    <label htmlFor="cardvendor">VENDOR:</label>
                    <select name='cardvendor'>
                        <option value='BITCOIN'>BITCOIN INC</option>
                        <option value='NINJA'>NINJA BANK</option>
                        <option value='BLOCK'>BLOCK CHAIN INC</option>
                        <option value='EVIL'>EVIL CORP</option>
                    </select>
                </div>
                <button type='submit'>ADD CARD</button>               
            </Form>
        </div>
    );
};

export async function action({ request }) {
    const formData = await request.formData();
    const card = await createCard({
        cardnumber: formData.get('cardnumber'),
        cardvalid: formData.get('cardvalid'),
        cardvendor: formData.get('cardvendor'),
        cardccv: formData.get('cardccv'),
        cardholdername: formData.get('cardholdername')
    });
    return redirect('/');
  }

export default Cardform;
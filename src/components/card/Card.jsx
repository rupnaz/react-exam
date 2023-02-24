import React from 'react';
import "./Card.css"
import EvilIcon from '../cardimg/EvilIcon';
import BitcoinIcon from '../cardimg/BitcoinIcon';
import NinjaIcon from '../cardimg/NinjaIcon';
import BlockIcon from '../cardimg/BlockIcon';

const Card = ({cardnumber, cardholdername, cardvalid, cardvendor, cardccv, onclick}) => {

    let cardVendorIcon = '';
    if (cardvendor === 'EVIL') {
        cardVendorIcon = <EvilIcon />
    }; 
    if (cardvendor === 'BLOCK') {
        cardVendorIcon = <BlockIcon />
    };
    if (cardvendor === 'NINJA') {
        cardVendorIcon = <NinjaIcon />
    };
    if (cardvendor === 'BITCOIN') {
        cardVendorIcon = <BitcoinIcon />
    };
    return (
        <div className={`card-page card card--${cardvendor}`} onClick={()=>{onclick({cardccv,cardholdername,cardnumber,cardvalid,cardvendor,})}}>
            <div className='card__top'>
                <div className='card__top-left'>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.8487 26.501C30.5268 27.1657 30.5268 28.2441 29.8487 28.9097C29.1698 29.5753 28.0694 29.5753 27.3913 28.9097C24.4169 25.9941 19.5778 25.9941 16.6038 28.9097C15.9249 29.5753 14.824 29.5753 14.146 28.9097C13.8068 28.5772 13.6378 28.1423 13.6378 27.7049C13.6378 27.2692 13.8072 26.8331 14.146 26.501C18.4756 22.2567 25.5191 22.2567 29.8487 26.501Z" fill="black"/>
                        <path d="M35.8186 21.073C36.4967 21.7382 36.4967 22.817 35.8186 23.4826C35.1397 24.1482 34.0397 24.1482 33.3612 23.4826C27.0956 17.339 16.9004 17.339 10.6348 23.4826C9.95633 24.1482 8.85545 24.1482 8.17785 23.4826C7.83861 23.15 7.66833 22.7135 7.66833 22.2778C7.66833 21.8412 7.83861 21.406 8.17785 21.073C11.869 17.4538 16.7772 15.4608 21.9978 15.4608C27.2184 15.4608 32.1266 17.4538 35.8186 21.073Z" fill="black"/>
                        <path d="M41.2865 15.0204C41.965 15.6856 41.965 16.7644 41.2865 17.4296C40.608 18.0948 39.508 18.0948 38.8296 17.4296C34.3332 13.0218 28.3554 10.5945 21.9974 10.5945C15.6394 10.5945 9.66196 13.0218 5.16648 17.4296C4.48712 18.0948 3.38712 18.0948 2.70908 17.4296C2.36984 17.097 2.20044 16.6609 2.20044 16.2248C2.20044 15.7891 2.37028 15.353 2.70908 15.0204C7.86104 9.96902 14.7118 7.18753 21.9974 7.18753C29.2842 7.18753 36.1346 9.96902 41.2865 15.0204Z" fill="black"/>
                    </svg>

                    <svg className='chip' width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="40" rx="8"/>
                        <line y1="12.5" x2="18" y2="12.5" stroke="#D0D0D0"/>
                        <line x1="33" y1="12.5" x2="50" y2="12.5" stroke="#D0D0D0"/>
                        <line x1="32.5" y1="5.46392e-08" x2="32.5" y2="40" stroke="#D0D0D0"/>
                        <line y1="26.5" x2="18" y2="26.5" stroke="#D0D0D0"/>
                        <line x1="32" y1="26.5" x2="50" y2="26.5" stroke="#D0D0D0"/>
                        <line x1="18.5" y1="5.46392e-08" x2="18.5" y2="40" stroke="#D0D0D0"/>
                    </svg>
                </div>
                <div className='card__top-right'>
                    {cardVendorIcon}
                </div>
            </div>
            <div className='card__number'>
                <p className='card__number-input'>{cardnumber}</p>
                    
            </div>
            <div className='card__bottom'>    
                <div className='card__bottom-left'>
                    <span>CARDHOLDER NAME</span>
                    <p>{cardholdername}</p>
                </div>
                <div className='card__bottom-right'>
                    <span>VALID THRU</span>
                    <p>{cardvalid}</p>
                </div>
            </div>     
        </div>
    );
};

export default Card;
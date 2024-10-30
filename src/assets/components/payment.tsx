// src/components/Payment.tsx
import React, { useState } from 'react';
import '../styles/payment.css'; // Import payment CSS for styling
import Popup from '../components/popup'; // Import the Popup component

const Payment: React.FC = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleButtonClick = (level: number) => {
        setPopupMessage(`Вы открыли доступ к уровню ${level}`);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className='paymentInner'>
            <div className="paymentTitle">
                <span className='paymentTitleText'>ПЛАТЕЖИ</span>
            </div>
            <div className="paymentSubtitle">
                ДЛЯ <span className="paymentSubtitleBold">ОТКРЫТИЯ</span> ДОСТУПА К <span className="paymentSubtitleBold">НЕЙРОАКУСТИЧЕСКИМ ПРОГРАММАМ</span> И УЧАСТИЯ В БЛАГОТВОРИТЕЛЬНОЙ СИСТЕМЕ <span className="paymentSubtitleBold">ПЕРЕРАСПРЕДЕЛЕНИЯ</span> ДЕНЕГ, ВАМ <span className="paymentSubtitleBold">НЕОБХОДИМО</span> ОТКРЫТЬ ВСЕ ЧАСТИ:
            </div>
            <div className="paymentLots">
                {[...Array(7)].map((_, index) => {
                    const level = index + 1;
                    const cost = [5, 7, 12, 21, 31, 44, 55][index]; // Costs for each level
                    return (
                        <button key={level} className="paymentItem" onClick={() => handleButtonClick(level)}>
                            <div className="paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>{level} УРОВЕНЬ</span></div>
                            <div className="paymentCoast">{cost} USDT</div>
                        </button>
                    );
                })}
            </div>
            {isPopupVisible && <Popup message={popupMessage} onClose={closePopup} />}
        </div>
    );
};

export default Payment;

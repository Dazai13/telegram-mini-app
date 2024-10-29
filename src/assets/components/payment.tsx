import React from 'react';
import '../styles/payment.css'

const Payment: React.FC = () => {
    return (
        <div className='paymentInner'>
            <div className="paymentTitle">
                <span className='paymentTitleText'>ПЛАТЕЖИ</span>
            </div>
            <div className="paymentSubtitle">
                ДЛЯ <span className="paymentSubtitleBold">ОТКРЫТИЯ</span> ДОСТУПА К <span className="paymentSubtitleBold">НЕЙРОАКУСТИЧЕСКИМ ПРОГРАММАМ</span> И УЧАСТИЯ В БЛАГОТВОРИТЕЛЬНОЙ СИСТЕМЕ <span className="paymentSubtitleBold">ПЕРЕРАСПРЕДЕЛЕНИЯ</span> ДЕНЕГ, ВАМ <span className="paymentSubtitleBold">НЕОБХОДИМО</span> ОТКРЫТЬ ВСЕ ЧАСТИ:
            </div>
            <div className="paymentLots">
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>1 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">5 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>2 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">7 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>3 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">12 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>4 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">21 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>5 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">31 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>6 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">44 USDT</div>
                </div>
                <div className="paymentItem">
                    <div className = "paymentLot">ОТКРЫТЬ ДОСТУП <span className='paymentLotText'>7 УРОВЕНЬ</span></div>
                    <div className = "paymentCoast">55 USDT</div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
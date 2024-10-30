import React, { useState } from 'react';
import '../styles/settings.css'
import logo from '../image/image 31.png'
import sckrepka from '../image/Vector(3).png'


const ScreenOne = ({ onNext }: { onNext: () => void }) => (
    <div className='firstScreenInner'>
        <div className='firstScreenUser'>
            <div className="firstScreenLogo">
                <img style={{width:"48px"}} src={logo} alt="" />
                <span>@nickname</span>
            </div>
            <span style={{fontSize: '10px', fontWeight: "400", lineHeight: '10px'}}>ПОДТВЕРЖДЕНИЕ</span>
        </div>
        <div className='firstScreenUnder'>
            <button className='firstScreenUnderButton'><span style={{marginLeft: '29px'}}>ВАШ EMAIL</span><img style={{width: '18px', height: '18px', marginRight: '17px'}} src={sckrepka} alt="" /></button>
            <div className='firstScreenUnderButton_Down'>
                <span style={{marginLeft: '29px'}}>ШАГ <span style={{fontSize: '16px',fontWeight: '700', lineHeight: '18px'}}>1 ИЗ 5</span></span>
                <button className='buttonBack' onClick={onNext}>ДАЛЕЕ</button>
            </div>
        </div>
  </div>
);

const ScreenTwo = () => (
    
    <div className='secondScreenInner'>
        <div className="profile">
            <div className="profileLogo">
                <div className="profileLogoInner">
                    <img style={{width:"48px",height:'48px'}} src={logo} alt="" />
                    <span>@nickname</span>
                </div>
                <span style={{marginRight: '26px'}}>СТАТУС</span>
            </div>
            <div className="profileUnder">
                <div className="profileUnderRow">
                    <div><span style={{fontSize: '18px', fontWeight: '400', lineHeight: '10px', marginLeft: "23px"}}>01.08.2002</span></div>
                    <div><span style={{fontSize: '14px', fontWeight: '400', lineHeight: '10px', marginRight: "23px", color: 'rgba(255, 255, 255, 0.5)'}}>ДАТУ РОЖДЕНИЯ</span></div>
                </div>
                <div className="profileUnderRow">
                    <span style={{fontSize: '18px', fontWeight: '400', lineHeight: '10px', marginLeft: "23px"}}>ВАШ EMAIL</span>
                    <span style={{fontSize: '14px', fontWeight: '400', lineHeight: '10px', marginRight: "23px", color: 'rgba(255, 255, 255, 0.5)'}}>Редактировать</span>
                </div>
                <div className="profileUnderRow">
                    <span style={{fontSize: '18px', fontWeight: '400', lineHeight: '10px', marginLeft: "23px"}}>ЯЗЫК</span>
                    <span style={{fontSize: '14px', fontWeight: '400', lineHeight: '10px', marginRight: "23px", color: 'rgba(255, 255, 255, 0.5)'}}><span style={{color: 'rgba(255, 255, 255, 1)'}}>🇷🇺</span> Русский</span>
                </div>
            </div>
        </div>
    </div>

);

const Setting: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  return (
    <div>
      {currentScreen === 1 && <ScreenOne onNext={handleNext} />}
      {currentScreen === 2 && <ScreenTwo />}
    </div>
  );
};

export default Setting;

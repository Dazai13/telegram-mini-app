import React, { useState } from 'react';
import './assets/styles/mainWindow.css';
import Header from './assets/components/header';
import Home from './assets/components/home';
import Payment from './assets/components/payment';
import MyTeam from './assets/components/team';
import NeuroAudio from './assets/components/NeuroAudio';
import Setting from './assets/components/settings'

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState("Home");

    const goToHome = () => setCurrentScreen("Home");
    const goToPayment = () => setCurrentScreen("Payment");
    const goToMyTeam = () => setCurrentScreen("MyTeam");
    const goToNeuroAudio = () => setCurrentScreen('NeuroAudio');
    const goToSetting = () => setCurrentScreen('Setting');

    const renderScreen = () => {
        switch (currentScreen) {
            case "Home":
                return <Home onNavigate={setCurrentScreen} />;
            case "Payment":
                return <Payment />;
            case "MyTeam":
                return <MyTeam />;
            case "NeuroAudio":
                return <NeuroAudio />;
            case "Setting":
                return <Setting />;
            default:
                return <Home onNavigate={setCurrentScreen} />;
        }
    };

    const getBackgroundColor = () => {
        switch (currentScreen) {
            case "Home":
                return 'linear-gradient(179.98deg, #000000 0%, #212031 100%)';
            case "Payment":
                return 'linear-gradient(179.98deg, #2b2b3b 0%, #3a3a4b 100%)';
            case "MyTeam":
                return 'rgba(33, 32, 49, 1)'; 
            case "NeuroAudio":
                return 'linear-gradient(179.98deg, #212031 0%, #020202 100%)';
            case "Setting":
                return 'linear-gradient(179.98deg, #212031 0%, #020202 100%)';
            default:
                return 'rgba(33, 32, 49, 1))';
        }
    };

    return (
        <div className="Window">
            <Header 
                onGoToHome={goToHome} 
                onGoToPayment={goToPayment} 
                onGoToMyTeam={goToMyTeam} 
                onGoToNeuroAudio={goToNeuroAudio}
                onGoToSetting={goToSetting}
            />
            <div className="mainWindow" style={{ background: getBackgroundColor() }}>
                <div className="mainWindow_container">
                    {renderScreen()}
                </div>
            </div>
        </div>
    );
};

export default App;

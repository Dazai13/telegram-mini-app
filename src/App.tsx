import React, { useState } from 'react';
import './assets/styles/mainWindow.css';
import Header from './assets/components/header';
import Home from './assets/components/home';
import Payment from './assets/components/payment';
import MyTeam from './assets/components/team';

const App: React.FC = () => {
    // Состояние для текущего экрана
    const [currentScreen, setCurrentScreen] = useState("Home");

    // Функции для переключения экранов
    const goToHome = () => setCurrentScreen("Home");
    const goToPayment = () => setCurrentScreen("Payment");
    const goToMyTeam = () => setCurrentScreen("MyTeam");

    // Функция для отображения текущего экрана
    const renderScreen = () => {
        switch (currentScreen) {
            case "Home":
                return <Home onNavigate={setCurrentScreen} />;
            case "Payment":
                return <Payment />;
            case "MyTeam":
                return <MyTeam />;
            default:
                return <Home onNavigate={setCurrentScreen} />;
        }
    };

    return (
        <div className="Window">
            <Header 
                onGoToHome={goToHome} 
                onGoToPayment={goToPayment} 
                onGoToMyTeam={goToMyTeam} 
            />
            <div className="mainWindow">
                <div className="mainWindow_container">
                    {renderScreen()}
                </div>
            </div>
        </div>
    );
};

export default App;

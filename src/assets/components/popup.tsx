// src/components/Popup.tsx
import React, { useState } from 'react';
import '../styles/popup.css';

interface PopupProps {
    message: string;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [partNumber, setPartNumber] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [screenshot, setScreenshot] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, username, partNumber, paymentDate, screenshot });
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setScreenshot(e.target.files[0]);
        }
    };

    return (
        <div className="popup-overlay">
            <div className="form-container">
                <form style = {{display: "flex", flexDirection: "column", alignItems: 'center',  marginTop: '29px'}} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Ваш Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ваш Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Логин получателя</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="@nickname"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="part-number">Номер части для доступа</label>
                        <input
                            type="text"
                            id="part-number"
                            placeholder="Ваш номер части"
                            value={partNumber}
                            onChange={(e) => setPartNumber(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="payment-date">Время, дата платежа</label>
                        <input
                            type="datetime-local"
                            id="payment-date"
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="screenshot">Скриншот об оплате</label>
                        <div className="screenshot-container">
                            <input
                                type="text"
                                placeholder={screenshot ? screenshot.name : "Ваш скриншот"}
                                readOnly
                            />
                            <label htmlFor="screenshot">📎</label>
                            <input
                                type="file"
                                id="screenshot"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <button className="closeButton" type="button" onClick={onClose}>Закрыть</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;

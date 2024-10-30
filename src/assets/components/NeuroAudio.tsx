import React, { useState } from 'react';
import '../styles/NeuroAudio.css';
import toggleIcon from '../image/Vector.png';
import play from '../image/Group 49.png';

interface DropdownProps {
    title: string;
    content: JSX.Element;
    blockNumber: number;
}

const Dropdown: React.FC<DropdownProps> = ({ title, content, blockNumber }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-block">
            <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                <span className="block-number">{blockNumber}</span>
                <span className="block-title">{title}</span>
                <button className="toggle-button" aria-label="Toggle dropdown">
                    <img src={toggleIcon} alt={isOpen ? 'Collapse' : 'Expand'} />
                </button>
            </div>
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
};

const NeuroAudio: React.FC = () => {
    const [progress, setProgress] = useState(70); // Default to 70%

    const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(Number(event.target.value));
    };

    return (
        <div className='DropdownInner'>
            <Dropdown
                title="ОСОЗНАННОЕ МЫШЛЕНИЕ"
                blockNumber={1}
                content={
                    <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                        <span className='neuroAudioText'>
                            ЕЖЕДНЕВНЫЕ УПРАЖНЕНИЯ ПОМОГАЮТ НАУЧИТЬСЯ КОНТРОЛИРОВАТЬ <strong>МЫСЛИ И ЭМОЦИИ</strong>, ЧТО УВЕЛИЧИВАЕТ ПРОДУКТИВНОСТЬ И СНИЖАЕТ СТРЕСС.
                        </span>
                        <button className="PayButton"><span style={{ fontSize: "12px", fontWeight: "400", lineHeight: '18px' }}>Оплатить <span style={{ fontSize: "12px", fontWeight: "700", lineHeight: '18px' }}>7 USDT</span></span></button>
                    </div>
                }
            />
            <Dropdown
                title="ФИНАНСОВОЕ БЛАГОПОЛУЧИЕ"
                blockNumber={2}
                content={<button className="PayButton">СЛУШАТЬ</button>}
            />
            <Dropdown
                title="НОВЫЙ УРОВЕНЬ"
                blockNumber={3}
                content={
                    <>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', paddingTop: "10px", paddingLeft: "10px", paddingBottom: '14px'}}>
                            <img style={{ width: "20px" , marginRight:'12px'}} src={play} alt="" />
                            <div className="progresbar">
                                <div className="progresbar">
                                    <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
                                </div>
                                <input
                            type="range"
                            className="input-range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleProgressChange}
                            style={{ '--value': `${progress}%`,  borderRadius: '4px' } as React.CSSProperties} // Type assertion for CSS variable
                                />

                            </div>

                        </div>
                    </>
                }
            />
            <Dropdown
                title="НОВЫЙ УРОВЕНЬ"
                blockNumber={4}
                content={
                    <>
                    </>
                }
            />
                        <Dropdown
                title="НОВЫЙ УРОВЕНЬ"
                blockNumber={5}
                content={
                    <>
                    </>
                }
            />
                        <Dropdown
                title="НОВЫЙ УРОВЕНЬ"
                blockNumber={6}
                content={
                    <>
                    </>
                }
            />
                        <Dropdown
                title="НОВЫЙ УРОВЕНЬ"
                blockNumber={7}
                content={
                    <>
                    </>
                }
            />

        </div>
    );
};

export default NeuroAudio;

import React from 'react';
import '../styles/team.css'
import logo from "../image/image 31.png"

const MyTeam: React.FC = () => {
    return (
        <div className="teamInner">
            <div className="myTeam">
                <div className="myTeamTitle"><span>МОЯ КОМАНДА</span></div>
                <div className="myTeamLobby">
                    <div className="row">
                        <div className="tab-container">
                            <div className="tab tab-dark">1 ЛИНИЯ</div>
                            <div className="tab tab-light">1 ЧЕЛОВЕК</div>
                        </div>
                        <div className="tab-container">
                            <div className="tab tab-dark">4 ЛИНИЯ</div>
                            <div className="tab tab-light">5 ЧЕЛОВЕК</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tab-container">
                            <div className="tab tab-dark">2 ЛИНИЯ</div>
                            <div className="tab tab-light">11 ЧЕЛОВЕК</div>
                        </div>
                        <div className="tab-container">
                            <div className="tab tab-dark">5 ЛИНИЯ</div>
                            <div className="tab tab-light">7 ЧЕЛОВЕК</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="tab-container">
                            <div className="tab tab-dark">3 ЛИНИЯ</div>
                            <div className="tab tab-light">19 ЧЕЛОВЕК</div>
                        </div>
                        <div className="tab-container">
                            <div className="tab tab-dark">6 ЛИНИЯ</div>
                            <div className="tab tab-light">15 ЧЕЛОВЕК</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="friends">
                <div className="friendsTitle"><span>@nickname</span></div>
                <div className="listFriends">
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                    <div className="friedRow">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="white"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#D9D9D9" fill-opacity="0.1"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#D9D9D9" fill-opacity="0.1"/>
                </svg>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#D9D9D9" fill-opacity="0.1"/>
                </svg>
                </div>
                <div className="inviter">
                    <div className="inviteText"><span className='Boldinvite'>МЕНЯ</span> ПРИГЛАСИЛИ</div>
                    <div className="friend">
                        <div className="friendBox">
                            <img className="logo" src={logo} alt="" />
                            <div className="name"><span>@nickname</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTeam;
import React from "react";
import '../haru/download.css';

const Download = () => {
    return (
        <div className="page-content-full download-page">
            <div className="page-content-header">
                <div className="logo"><img src="src/assets/img/logo.png"></img></div>
                <h1>Play Now Regnum World</h1>
                <h2>Start your journey for free</h2>
                <div className="divider"><img src="../src/assets/img/news/ornament2.png"></img></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet explicabo soluta eius minima odit tempore, pariatur veniam quidem culpa neque deleniti ipsam ipsa iusto eligendi quam. Pariatur, tempore modi.</p>
                <button className="teste">PLAY NOW</button>
            </div>
            <div className="page-content">
                <div className="page-content-title">Download</div>

                <div className="required">
                    <div className="title-sub-content">Requirements</div>
                    <div className="box-table">
                        <div className="field-indicator">
                            <span className="title bold">Sistema Operacional</span>
                            <span className="title bold">Windows 7 SP1/8/10/11.</span>
                        </div>
                        <div className="item-box">
                            <div><span className="bold">Processor</span><span >Core 2 Quad 2.0</span></div>
                            <div><span className="bold">RAM memory</span><span>4GB+</span></div>
                            <div><span className="bold">Video Cardo</span><span>1GB or better</span></div>
                            <div><span className="bold">DirectX</span><span>8.1 or better</span></div>
                        </div>
                    </div >
                    <div className="box-content"><img src="../src/assets/img/icons/alert.svg"></img>Attention: Make sure your equipment has AT LEAST the requirements presented above.</div>
                    <div className="title-sub-content">Download: Full Game</div>
                    <button className="button-download"><img  src="../src/assets/img/icons/logo.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/mega.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/drive.svg"></img></button>
                    <div className="title-sub-content">Download: last Update</div>
                    <button className="button-download"><img  src="../src/assets/img/icons/logo.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/mega.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/drive.svg"></img></button>
                    <div className="title-sub-content">Update your drivers</div>
                    <button className="button-download"><img  src="../src/assets/img/icons/microsoft.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/winrar.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/nvidia.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/intel.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/amd.svg"></img></button>
                    
                    <h1>How to setup Regnum:</h1>
                    <ul>
                    <li>Open the downloaded file with an unpacker such as WinRAR;</li>
                    <li>Extract into any folder that you desire;</li>
                    <li>Run the Launcher!</li>
                    </ul>

                    <h1>How to create a Game Account:</h1>
                    <ul>
                    <li>Go to the Game Account Panel here on the website;</li>
                    <li>Click on Register Account then follow the instructions from there.</li>
                    </ul>

                    <h1>Optional: Are you experiencing lag when there are a lot of monsters or players around you?</h1>
                    <ul>
                    <li>Then try a VPN service. A VPN will route your internet connection through another country.</li>
                    <li>Some players have confirmed that it can help reduce lag!</li>
                    <li>Choose from one of these well-known VPN's</li>
                    </ul>
                    <button className="button-download"><img  src="../src/assets/img/icons/nordvpn.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/proton.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/expressvpn.svg"></img></button>
                    <button className="button-download"><img  src="../src/assets/img/icons/private-internet.svg"></img></button>
                    <ul>
                    <li>Then try a VPN service. A VPN will route your internet connection through another country.</li>
                    <li>Some players have confirmed that it can help reduce lag!</li>
                    <li>Choose from one of these well-known VPN's</li>

                    </ul>

                </div>

            </div>
            <div className="space"></div>
        </div>
    )
};

export default Download;
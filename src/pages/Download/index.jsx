import React from 'react';
import { Link } from 'react-router-dom';
import iconAlert from '../../assets/img/icons/alert.svg';
import iconAMD from '../../assets/img/icons/amd.svg';
import iconGoogleDrive from '../../assets/img/icons/drive.svg';
import iconExpressVPN from '../../assets/img/icons/expressvpn.svg';
import iconIntel from '../../assets/img/icons/intel.svg';
import iconMediaFire from '../../assets/img/icons/mediafire.svg';
import iconMicrosoft from '../../assets/img/icons/microsoft.svg';
import iconNordVPN from '../../assets/img/icons/nordvpn.svg';
import iconNVIDIA from '../../assets/img/icons/nvidia.svg';
import iconPrivateInternet from '../../assets/img/icons/private-internet.svg';
import iconProtonVPN from '../../assets/img/icons/proton.svg';
import iconWinRAR from '../../assets/img/icons/winrar.svg';
import imageRegnum from '../../assets/img/logo.png';
import imageDivider from '../../assets/img/news/ornament2.png';
import { GOOGLE_DRIVE_URL, MEDIAFIRE_URL } from '../../settings.jsx';
import './styles.css';

const Download = () => {
  return (
    <div className="page-content-full download-page">
      <div className="page-content-header">
        <div className="logo">
          <img src={imageRegnum} alt="Regnum"></img>
        </div>
        <h1>Play now Regnum World!</h1>
        <h2>Start your journey here</h2>
        <div className="divider">
          <img src={imageDivider} alt=""></img>
        </div>
        <p>
          Download our game now and join the thousands of players around the
          world who are already exploring this epic online adventure! Our game
          offers a vast and immersive virtual world, filled with exciting
          quests, battles, and challenges that will put your skills and
          strategic thinking to the test. Download the game today and start your
          journey to become a legendary hero!
        </p>
      </div>

      <div className="page-content">
        <div className="page-content-title">Download</div>
        <div className="required">
          <div className="title-sub-content">Minimum requirements</div>
          <div className="box-table">
            <div className="field-indicator">
              <span className="title bold">Operating System</span>
              <span className="title bold">Windows 7 SP1</span>
            </div>
            <div className="item-box">
              <div>
                <span className="bold">Processor</span>
                <span>Intel® Core™ 2 Duo</span>
              </div>
              <div>
                <span className="bold">RAM memory</span>
                <span>4GB</span>
              </div>
              <div>
                <span className="bold">Video Card</span>
                <span>512MB</span>
              </div>
              <div>
                <span className="bold">DirectX</span>
                <span>9.0c</span>
              </div>
            </div>
          </div>

          <div className="box-content">
            <img src={iconAlert} alt="Alert"></img>
            Attention: Make sure your equipment has AT LEAST the requirements
            presented above!
          </div>

          <div className="title-sub-content">Download game</div>
          <Link to={MEDIAFIRE_URL}>
            <button className="button-download">
              <img src={iconMediaFire} alt="MediaFire"></img>
            </button>
          </Link>
          <Link to={GOOGLE_DRIVE_URL}>
            <button className="button-download">
              <img src={iconGoogleDrive} alt="Google Drive"></img>
            </button>
          </Link>

          <div className="title-sub-content">Update your drivers</div>
          <Link to="https://www.microsoft.com/windows/">
            <button className="button-download">
              <img src={iconMicrosoft} alt="Microsoft"></img>
            </button>
          </Link>
          <Link to="https://www.win-rar.com/">
            <button className="button-download">
              <img src={iconWinRAR} alt="WinRAR"></img>
            </button>
          </Link>
          <Link to="https://www.nvidia.com.br/Download/index.aspx">
            <button className="button-download">
              <img src={iconNVIDIA} alt="NVIDIA"></img>
            </button>
          </Link>
          <Link to="https://www.intel.com/content/www/us/en/download-center/home.html">
            <button className="button-download">
              <img src={iconIntel} alt="Intel"></img>
            </button>
          </Link>
          <Link to="https://www.amd.com/en/support">
            <button className="button-download">
              <img src={iconAMD} alt="AMD"></img>
            </button>
          </Link>

          <h1>How to setup Regnum:</h1>
          <ul>
            <li>Open the downloaded file with an extractor such as WinRAR;</li>
            <li>Extract into any folder that you desire;</li>
            <li>Run the Launcher!</li>
          </ul>

          <h1>How to create a Game Account:</h1>
          <ul>
            <li>Go to the Account Panel here on the website;</li>
            <li>
              Click on Register Account then follow the instructions from there.
            </li>
          </ul>

          <h1>
            Optional: Are you experiencing lag when there are a lot of monsters
            or players around you?
          </h1>
          <ul>
            <li>
              Then try a VPN service. A VPN will route your internet connection
              through another country.
            </li>
            <li>Some players have confirmed that it can help reduce lag!</li>
            <li>Choose from one of these well-known VPNs</li>
          </ul>
          <Link to="https://nordvpn.com/">
            <button className="button-download">
              <img src={iconNordVPN} alt="NordVPN"></img>
            </button>
          </Link>
          <Link to="https://protonvpn.com/">
            <button className="button-download">
              <img src={iconProtonVPN} alt="Proton"></img>
            </button>
          </Link>
          <Link to="https://www.expressvpn.com/">
            <button className="button-download">
              <img src={iconExpressVPN} alt="ExpressVPN"></img>
            </button>
          </Link>
          <Link to="https://www.privateinternetaccess.com/">
            <button className="button-download">
              <img src={iconPrivateInternet} alt="Private Internet"></img>
            </button>
          </Link>

          <ul>
            <li>
              Then try a VPN service. A VPN will route your internet connection
              through another country.
            </li>
            <li>Some players have confirmed that it can help reduce lag!</li>
            <li>Choose from one of these well-known VPNs</li>
          </ul>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Download;

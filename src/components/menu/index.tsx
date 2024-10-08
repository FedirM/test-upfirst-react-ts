
import './menu.css';

import { FaHome, FaWallet, FaHistory, FaDatabase } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";

function MainMenuComponent() {

    return (
        <div className="main-menu-container">
            <div className="main-menu-btn">
                <FaHome className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Home</span>
            </div>
            <div className="main-menu-btn">
                <MdManageAccounts className='main-menu-btn-icon account-icon'/>
                <span className='main-menu-btn-text'>Account</span>
            </div>
            <div className="main-menu-btn">
                <FaWallet className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Billings</span>
            </div>
            <div className="main-menu-btn">
                <FaHistory className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>History</span>
            </div>
            <div className="main-menu-btn">
                <FaDatabase className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Storage</span>
            </div>
            <div className='main-menu-btn quit-btn'>
                <IoTrailSignOutline className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Sign Out</span>
            </div>
        </div>
    )
}

export default MainMenuComponent;
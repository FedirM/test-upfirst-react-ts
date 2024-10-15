
import './menu.css';

import { FaHome, FaWallet, FaHistory, FaDatabase } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function MainMenuComponent() {

    const navigate = useNavigate();

    function onMenuBtnClick() {
        navigate('/contacts');
    }

    return (
        <div className="main-menu-container">
            <div className="main-menu-btn" onClick={onMenuBtnClick}>
                <FaHome className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Home</span>
            </div>
            <div className="main-menu-btn" onClick={onMenuBtnClick}>
                <MdManageAccounts className='main-menu-btn-icon account-icon'/>
                <span className='main-menu-btn-text'>Account</span>
            </div>
            <div className="main-menu-btn" onClick={onMenuBtnClick}>
                <FaWallet className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Billings</span>
            </div>
            <div className="main-menu-btn" onClick={onMenuBtnClick}>
                <FaHistory className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>History</span>
            </div>
            <div className="main-menu-btn" onClick={onMenuBtnClick}>
                <FaDatabase className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Storage</span>
            </div>
            <div className='main-menu-btn quit-btn' onClick={onMenuBtnClick}>
                <IoTrailSignOutline className='main-menu-btn-icon'/>
                <span className='main-menu-btn-text'>Sign Out</span>
            </div>
        </div>
    )
}

export default MainMenuComponent;
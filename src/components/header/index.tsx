import { useNavigate } from 'react-router-dom';
import './header.css';
import {Button, Image} from '@adobe/react-spectrum';


function HeaderComponent() {

    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Image src={process.env.PUBLIC_URL + 'Upfirst-Logo.webp'} alt='Upfirst logo' />
            </div>
            <div className='header-button'>
                <Button variant="accent" onPress={() => navigate('/contacts')}>Join Us</Button>
            </div>
        </div>
    );
}

export default HeaderComponent;
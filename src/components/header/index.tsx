import './header.css';
import {Button, Image} from '@adobe/react-spectrum';


function HeaderComponent() {

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Image src={process.env.PUBLIC_URL + 'Upfirst-Logo.webp'} alt='Upfirst logo' />
            </div>
            <div className='header-button'>
                <Button variant="accent">Join Us</Button>
            </div>
        </div>
    );
}

export default HeaderComponent;
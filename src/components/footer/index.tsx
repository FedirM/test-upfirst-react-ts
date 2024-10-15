import { ButtonGroup, ActionButton } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import './footer.css';

function FooterComponent() {

    const nav = useNavigate();

    return (
        <ButtonGroup orientation='horizontal' align='center'>
            <ActionButton isQuiet onPress={() => nav('/contacts')}>About</ActionButton>
            <ActionButton isQuiet onPress={() => nav('/contacts')}>Contacts</ActionButton>
            <ActionButton isQuiet onPress={() => nav('/contacts')}>Help</ActionButton>
        </ButtonGroup>
    )
}

export default FooterComponent;
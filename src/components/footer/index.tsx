import { ButtonGroup, ActionButton } from '@adobe/react-spectrum';
import './footer.css';

function FooterComponent() {
    return (
        <ButtonGroup orientation='horizontal' align='center'>
            <ActionButton isQuiet>About</ActionButton>
            <ActionButton isQuiet>Contacts</ActionButton>
            <ActionButton isQuiet>Help</ActionButton>
        </ButtonGroup>
    )
}

export default FooterComponent;
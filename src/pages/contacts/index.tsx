import './main.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { Heading, Button, Text } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';


function ContactsPage() {

    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="back-btn-wrapper">
                <Button variant="primary" onPress={() => navigate('/home')}>
                    <FaArrowLeft style={{marginRight: "5px"}} />
                    <Text>Back</Text>
                </Button>
            </div>
            <div className="info-block">
                <div className="contacts-label">
                    <Heading level={2}>Find Me</Heading>
                </div>
                <div className="social-links">
                    <a href="https://github.com/FedirM" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub className="icon" />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/fedirm/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin className="icon" />
                        LinkedIn
                    </a>
                    <a href="mailto:youremail@example.com" className="social-link">
                        <FaEnvelope className="icon" />
                        Email
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage; 
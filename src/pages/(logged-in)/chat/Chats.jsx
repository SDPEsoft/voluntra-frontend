import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavigationBar from '../../../components/layouts/Navbar';

export default function Chats() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Here you can add logic to send the message to the backend or perform other actions
    }
  };

  // Sample message
  React.useEffect(() => {
    setMessages([{ text: 'hello chamika! how are you doing? I just want to ask some questions. Are you free now?', sender: 'bot' }]);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Container style={{ marginTop: '30px' }}>
        <Row>
          <Col>
            <h2 style={{ color: 'black' }}>Voluntra Chat | Private Chat</h2>
            <div style={{ border: '1px solid #000', minHeight: '300px', maxHeight: '500px', overflowY: 'scroll', padding: '10px' }}>
              {messages.map((message, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  {message.sender === 'user' ? (
                    <div style={{ textAlign: 'right', marginBottom: '5px' }}>
                      <span style={{ backgroundColor: '#fff', color: '#000', padding: '5px 10px', borderRadius: '10px' }}>
                        {message.text}
                      </span>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'left', marginBottom: '5px' }}>
                      <span style={{ backgroundColor: '#000', color: '#fff', padding: '5px 10px', borderRadius: '10px' }}>
                        {message.text}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Form style={{ marginTop: '20px' }}>
              <Form.Group controlId="formChat">
                <Form.Control type="text" placeholder="Type your message..." value={inputText} onChange={handleInputChange} />
              </Form.Group>
              <br></br>
              <Button style={{ backgroundColor: 'black' }} variant="primary" onClick={handleSendMessage}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import axios from 'axios';
import HomeLayout from '../Home/HomeLayout';

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');


  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    // Update the chat with the user's message
    setMessages([...messages, { text: inputMessage, isUser: true }]);

    console.log(messages)  
    try {
      // Send the user's message to the GPT-3 API
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
            "model": "text-davinci-003",
            "max_tokens": 250,
            "prompt": inputMessage,
            "temperature": 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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',
          },
        }
      );

      // Update the chat with the model's response
      const modelResponse = response.data.choices[0].text;
      setMessages([...messages, { input:inputMessage, text: modelResponse, isUser: false }]);
    } catch (error) {
      console.error('Error generating response:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center',alignSelf:"center",marginLeft:"20%"}}>
        <HomeLayout />
      <Typography variant="h4" gutterBottom>
        Edu-Cloud Student Query System
      </Typography>
      <div style={{ marginBottom: 20 }}>
        {messages.map((message, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: 2,
              marginTop: 2,
              marginBottom: 2,
              maxWidth: '75%',
              alignSelf: message.isUser ? 'flex-end' : 'flex-start',
            }}
          >

<Typography variant="body1" color={"black"} fontWeight={"bold"}> user:    {message.input}</Typography>

            <Typography variant="body1" color={"red"} fontWeight={"bold"}> Edu-cloud AI :  <span style={{color:"darkblue"}}>{message.text}</span>  </Typography>
          </Paper>
        ))}
      </div>
      <TextField
        label="State Your Query"
        fullWidth
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
        sx={{ marginBottom: 2 ,marginTop:5}}
      />
      <Button variant="contained" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
};

export default ChatSystem;
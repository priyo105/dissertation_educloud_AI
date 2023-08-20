import React, { useState } from 'react';
import axios from 'axios';
import HomeLayout from '../Home/HomeLayout';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';



const BookSummarizer = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [chapterNumber, setChapterNumber] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerateText = async () => {
    try {
        console.log(bookName)
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          "model": "text-davinci-003",
          "max_tokens": 4000,
           "prompt":" summaize the book name "+bookName+" by "+authorName+", Chapter "+chapterNumber+" in 2000 words",
          "temperature": 0.9
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Replace with your actual GPT-3 API key
          },
        }
      );
      console.log(response.data.choices[0].text )
      setGeneratedText(response.data.choices[0].text);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  };

  return (
    <div>
        <HomeLayout />
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        AI Book Summarizer
      </Typography>
      <TextField
        label="Book Name"
        fullWidth
        value={bookName}
        onChange={e => setBookName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Author Name"
        fullWidth
        value={authorName}
        onChange={e => setAuthorName(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Chapter Number"
        fullWidth
        value={chapterNumber}
        onChange={e => setChapterNumber(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleGenerateText} sx={{ marginBottom: 2 }}>
        Generate Chapter
      </Button>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="body1">{generatedText}</Typography>
      </Paper>
    </Container>
    </div>
  );
};

export default BookSummarizer;
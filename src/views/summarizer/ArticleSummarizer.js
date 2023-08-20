import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import HomeLayout from '../Home/HomeLayout';

const ArticleSummarizer = () => {
  const [articleInput, setArticleInput] = useState('');
  const [summarizedText, setSummarizedText] = useState('');

  const handleSummarizeArticle = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          "model": "text-davinci-003",
          "max_tokens": 3000,
           "prompt":" Summarize the following article by  either 200 or 400 or 600 or 1000 words depending on article size : "+ articleInput,
          "temperature": 0.9
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Replace with your actual GPT-3 API key
          },
          maxContentLength: 100000000,
          maxBodyLength: 1000000000
        }
      );
      console.log(response.data.choices[0].text )
      setSummarizedText(response.data.choices[0].text);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  };




  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 0 }}>
        <HomeLayout />
      <Typography variant="h4" gutterBottom>
        Article Summarizer
      </Typography>
      <TextField
        label="Enter Article Text or Link"
        multiline
        fullWidth
        rows={6}
        value={articleInput}
        onChange={e => setArticleInput(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSummarizeArticle} sx={{ marginBottom: 2 }}>
        Summarize Article
      </Button>
      {summarizedText && (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="body1">{summarizedText}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default ArticleSummarizer;
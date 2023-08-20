import React from 'react'
import HomeLayout from '../Home/HomeLayout'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate,useNavigation } from 'react-router-dom';

export default function ArticleSummarizer() {
  const navigate = useNavigate();

  const navigationToBookRecomemndation = () => {
    navigate('/booksummarizer', { replace: true });
  };

 const navigateToArticleSumarrizer=()=>{
  navigate('/articlesummarizer', { replace: true });

  
 }

  return (
    <div style={{marginLeft:400,display:"flex",flexDirection:"row"}}>ArticleSummarizer
         <Card sx={{ maxWidth: 300,marginTop:20 }}>
      <CardMedia
        component="img"
        height="100"
        image="https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80" // Replace with your image URL
        alt="Card Image"
      />
      <CardContent>
        <h2>Book Summarizer</h2>
        <p>Just Provide Book Name , Author Name and Chapter No. The AI will summarize the Book contnet. </p>
        <Button onClick={navigationToBookRecomemndation} variant="contained" sx={{ backgroundColor: '#3498db', color: '#fff' }}>
          Try Me
        </Button>
      </CardContent>
    </Card>




    <Card sx={{ maxWidth: 300,marginTop:20,marginLeft:20 }}>
      <CardMedia
        component="img"
        height="100"
        image="https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" // Replace with your image URL
        alt="Card Image"
      />
      <CardContent>
        <h2>Article  Summarizer</h2>
        <p>Just Provide Article content in the Input or link. The AI will sumarize it for you </p>
        <Button onClick={navigateToArticleSumarrizer} variant="contained" sx={{ backgroundColor: '#3498db', color: '#fff' }}>
          Try Me
        </Button>
      </CardContent>
    </Card>
         <HomeLayout />

    </div>
  
  )
}

// import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, colors,Card, CardContent, CardMedia,Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useNavigate,useNavigation } from 'react-router-dom';
import HomeLayout from '../Home/HomeLayout.js';

export default function StudyMateiral() {
  const theme = useTheme();
  const navigate = useNavigate();

  const cardsData = [
    {
      imageSrc: 'image1.jpg',
      title: 'Card Title 1',
      description: 'Description for Card 1.',
      buttonText: 'Learn More',
    },
    {
      imageSrc: 'image2.jpg',
      title: 'Card Title 2',
      description: 'Description for Card 2.',
      buttonText: 'Read More',
    },
    // Add more card data as needed
  ];

  const navigationToBookRecomemndation = () => {
    navigate('/bookRecommendation', { replace: true });
  };

  const navigationToCourseRecomemndation = () => {
    navigate('/onlineCourseRecommendations', { replace: true });
  };

  const navigationToPaperRecommendation = () => {
    navigate('/paperRecommendation', { replace: true });
  };


  
  return (
    <>
        <title> Dashboard | Minimal UI </title>
      <HomeLayout />
      <Container maxWidth="xl" style={{marginLeft:'15%'}}>
        <Typography variant="h5" color="blue" sx={{ mb: 5 }}>
         AI Study Materials Recommender  
        </Typography>

     <Grid container>       
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Book Recommendations
        </Typography>
        <Typography variant="body2" color="text.secondary">
           This will provide book recommendations of a chosen topic. The recommendation will be generated by our Artificial Intelligence Agent
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex",alignContent:"center"}}>
        <Button onClick={navigationToBookRecomemndation} size="medium" style={{backgroundColor:"black",color:"white"}}>Try Me</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345,marginLeft:'5%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1588912914074-b93851ff14b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online Course Recommendations
        </Typography>
        <Typography variant="body2" color="text.secondary">
          AI recommendation for high quality online courses for a particular subject or topic. Udemy, Coursera and Youtube course contents are suggested by AI. 

        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={navigationToCourseRecomemndation} size="medium" style={{backgroundColor:"black",color:"white"}}>Try Me</Button>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345,marginLeft:'5%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Academic Paper Recommendations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        AI recommendation for high quality academic paper for a particular subject or topic. The AI recommendation includes Journal papers, Confereance papers, review papers etc.   
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={navigationToPaperRecommendation} size="medium" style={{backgroundColor:"black",color:"white"}}>Try Me</Button>
      </CardActions>
    </Card>
      </Grid>  
    
      </Container>
    </>
  );
}






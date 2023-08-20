
import React from 'react'
import HomeLayout from '../Home/HomeLayout'
import { useState } from 'react';

import {Grid, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { CircularProgress } from '@mui/material';

const OnlineCourseRecommendations = ({ classes }) => {

            const [topic, setTopic] = useState('');
            const [recommendations, setRecommendations] = useState([]);
            const [loading, setLoading] = useState(false);

            const handleTopicChange = (event) => {
                setTopic(event.target.value);
            };

            const fetchRecommendations = async () => {
                setLoading(true);
                const apiKey = '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';
                // const prompt = `${topic}.`;
                
                const prompt = {
                    prompt: `give a list of top 5 online courses on the topic of "${topic}". Include the course title,course website name, a  link to the course , its price, description,rating and the instructor's name. Format must be a JSON Array with the json object title,link,description,websitename, author, rating,price. Only Generate the link if the link is in knowledgebase`,
                  };
                
                const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                
                    "model": "text-davinci-003",
                    "max_tokens": 1000,
                    "prompt": JSON.stringify(prompt),
                    "temperature": 0.9
                })
                });

                const data = await response.json();
                console.log(data)
                const books = JSON.parse(data.choices[0].text);

                const formattedBooks = books.map(book => ({
                  title: book.title,
                  link: book.link,
                  price: book.price,
                  author: book.author,
                  rating:book.rating,
                  websitename:book.websiteName || book.websitename,
                  description:book.description
                }));
                
                setLoading(false);
                setRecommendations(formattedBooks);
            };




  return (
    <div>BookRecommendation

        <HomeLayout />

 
        <div style={{marginLeft:"20%" ,display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <TextField
        label="Enter Topic"
        value={topic}
        onChange={handleTopicChange}
        variant="outlined"
        
        style={{ marginBottom: '20px',width:"300px" }}
      />
      <Button variant="contained" onClick={fetchRecommendations} style={{ background: 'purple', color: 'white' ,width:300,marginTop:30,height:60}}>
        Get Recommendations
      </Button>

                     

             <div style={{display:"flex",alignItems:"center",alignContent:"center"}}>
                {loading ? (
                <CircularProgress style={{ margin: '20px auto' }} />
                ) : (
                <div>
                 </div>
                )}
            </div>
      {recommendations.length > 0 && (
        <div>
                <h5 style={{textAlign:'center'}}>Top 10 Online Courses of {topic}</h5>

 <Table>
 <TableHead>
   <TableRow>
     <TableCell>Title</TableCell>
     <TableCell>Link</TableCell>
     <TableCell>Price</TableCell>
     <TableCell>Author</TableCell>
     <TableCell>Website Name</TableCell>

     <TableCell>Rating</TableCell>
     <TableCell>Description</TableCell>

     
   </TableRow>
 </TableHead>
 <TableBody>
   {recommendations.map((book, index) => (
     <TableRow key={index}>
       <TableCell>{book.title}</TableCell>
       <TableCell><a href={book.link} target="_blank" rel="noopener noreferrer">Link</a></TableCell>
       <TableCell>{book.price}</TableCell>
       <TableCell>{book.author}</TableCell>
       <TableCell>{book.websitename}</TableCell>
       <TableCell>{book.rating}</TableCell>

       <TableCell>{book.description}</TableCell>

       
     </TableRow>
   ))}
 </TableBody>
</Table>
</div>
      )}
    </div>

    </div>

    
  )

  
}
export default OnlineCourseRecommendations;

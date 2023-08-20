import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";

import Login from "./views/Login/Login.js"
import RegisterFrom from "./views/Register/RegisterForm.js"
import  Home  from './views/Home/Home.js';
import StudyMatierial from './views/studymaterial/StudyMatierial';
import BookRecommendation from './views/studymaterial/BookRecommendation';
import OnlineCourseRecommendations from './views/studymaterial/OnlineCourseRecommendations';
import PaperRecommendation from './views/studymaterial/PaperRecommendation.js';
import Summarizer from './views/summarizer/Summarizer';
import BookSummarizer from './views/summarizer/BookSummarizer';
import ArticleSummarizer from './views/summarizer/ArticleSummarizer.js';
import ChatSystem from "./views/studentQuerySystem/studentquery.js"

function App() {
  return (
    <BrowserRouter>

    <Routes>
       <Route path='/' element={<Login />}></Route>
       <Route path='/register' element={<RegisterFrom />} />
       <Route path='/home' element={<Home />} />
       <Route name="studymaterial" path='/studymaterial' element={<StudyMatierial />} />
       <Route  path='/bookRecommendation' element={<BookRecommendation />} />
       <Route  path='/onlineCourseRecommendations' element={<OnlineCourseRecommendations />} />
       <Route  path='/paperRecommendation' element={ <PaperRecommendation />} />
       <Route  path='/summarizer' element={ <Summarizer />} />
       <Route  path='/booksummarizer' element={ <BookSummarizer />} />
       <Route  path='/articlesummarizer' element={ <ArticleSummarizer />} />
       <Route  path='/querysystem' element={ <ChatSystem />} />

       
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import BmrApp from './pages/BmrApp';
import QuizApp from './pages/QuizApp';
import TravelApp from './pages/TravelApp';
import TodoApp from './pages/TodoApp';
import CaloriesTrackerApp from './pages/CaloriesTrackerApp';
import EducationalJourney from './components/EducationalJourney';
import Hobbies from './components/Hobbies';
import ThirdSection from './components/ThirdSection';
import Tehnologies from './components/Tehnologies';
import HardSkills from './components/HardSkills';


const router = createBrowserRouter([
  {
    path: "/portfolio-project",
    element: <App/>,
  },
  {
    path: "/portfolio-project/bmr",
    element: <BmrApp/>,
  },
  {
    path: "/portfolio-project/quiz",
    element: <QuizApp/>,
  },
  {
    path: "/portfolio-project/travel",
    element: <TravelApp/>,
  },
  {
    path: "/portfolio-project/todo",
    element: <TodoApp/>,
  },
  {
    path: "/portfolio-project/calories-tracker",
    element: <CaloriesTrackerApp/>,
  },
  {
    path: '/portfolio-project/home',
    element: <FirstSection/>,
},
{
    path: '/portfolio-project/secondsection',
    element: <SecondSection/>,
},
{
    path: '/portfolio-project/education',
    element: <EducationalJourney/>,
},
{
  path: '/portfolio-project/education',
  element: <EducationalJourney/>,
},
{
    path: '/portfolio-project/tehnologies',
    element: <Tehnologies/>,
},
{
    path: '/portfolio-project/hobbies',
    element: <Hobbies/>,
},
{
    path: '/portfolio-project/Projects',
    element: <ThirdSection/>,
},
{
    path: '/portfolio-project/contact',
    element: <Footer/>,
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider basename="/" router={router} />
);

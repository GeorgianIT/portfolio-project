import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import BmrApp from './pages/BMR/BmrApp';
import QuizApp from './pages/Quizz/QuizApp';
import TravelApp from './pages/Travel/TravelApp';
import TodoApp from './pages/ToDo/TodoApp';
import CaloriesTrackerApp from './pages/CaloriesTracker/CaloriesTrackerApp';
import EducationalJourney from './components/EducationalJourney';
import Hobbies from './components/Hobbies';
import ThirdSection from './components/ThirdSection';
import Tehnologies from './components/Tehnologies';
import HardSkills from './components/HardSkills';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';
import Movies from './pages/Movies/Movies';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/portfolio-project",
    element: <App/>,
  },
  {
    path: "/portfolio-project/bmr",
    element: <BmrApp/>,
  },
  // {
  //   path: "/coffee-shop/",
  //   element: <Navigate to='/error-page/'/>,
  // },
  {
    path: "/error-page/",
    element: <ErrorPage />,
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
    path: "/portfolio-project/movies",
    element: <Movies/>,
  },
  {
    path: '/home',
    element: <FirstSection/>,
},
{
    path: '/secondsection',
    element: <SecondSection/>,
},
{
    path: '/education',
    element: <EducationalJourney/>,
},
{
  path: '/skills',
  element: <HardSkills/>,
},
{
    path: '/tehnologies',
    element: <Tehnologies/>,
},
{
    path: '/hobbies',
    element: <Hobbies/>,
},
{
    path: '/Projects',
    element: <ThirdSection/>,
},
{
    path: '/contact',
    element: <Footer/>,
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider basename="/" router={router} />
);

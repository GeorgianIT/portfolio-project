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
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider basename="/" router={router} />
);

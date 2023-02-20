import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route } from "react-router-dom"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BmrApp from './pages/BmrApp';
import QuizApp from './pages/QuizApp';
import TravelApp from './pages/TravelApp';
import TodoApp from './pages/TodoApp';
import CaloriesTrackerApp from './pages/CaloriesTrackerApp';
import { HashRouter as Router } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "BMR",
    element: <BmrApp/>,
  },
  {
    path: "Quiz",
    element: <QuizApp/>,
  },
  {
    path: "TravelApp",
    element: <TravelApp/>,
  },
  {
    path: "TodoApp",
    element: <TodoApp/>,
  },
  {
    path: "CaloriesTracker",
    element: <CaloriesTrackerApp/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/portfolio-project">
    <RouterProvider router={router} />
    <Route exact path="/portfolio-project" render={App} />
  </Router>
);

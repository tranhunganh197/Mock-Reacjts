import React from 'react';
import './home.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListRepoComponent from "component/list-repo/list-repo";
import AddRepoComponent from "component/list-repo/add-repo/add-repo";
import WelcomeComponent from "component/welcome/welcome";
import ListRepoTwoComponent from 'component/list-repo/list-repo-two';
import { ToastContainer } from 'react-toastify';

export default function HomeComponent() {
  return (
    <Router>
      <div>
      <ToastContainer/>
        <div className='header'>
          <ul className="d-flex justify-content-between">
            <li className='d-flex align-items-center'>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
            </li>
            <li className='d-flex align-items-center'>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/list-repo">List Repo 1</Link>
            </li>
            <li className='d-flex align-items-center'>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/list-repo-two">List Repo 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
            <Route path='/' element={<WelcomeComponent/>} />
            <Route path='/list-repo' element={<ListRepoComponent/>} />
            <Route path='/add-repo' element={<AddRepoComponent/>} />
            <Route path='/list-repo-two' element={<ListRepoTwoComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Top } from './components/pages/Top';
import { Signup } from './components/pages/Signup';
import { Login } from './components/pages/Login';
import { RecoilRoot } from 'recoil';
import { Post } from './components/pages/Post';
import { PostContent } from './components/pages/PostContent';
import { PostEdit } from './components/pages/PostEdit';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/create" element={<Post />} />
          <Route path="/posts/:id" element={<PostContent />} />
          <Route path="/posts/:id/edit" element={<PostEdit />} />
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

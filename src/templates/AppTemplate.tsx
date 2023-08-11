import React from 'react';
import BookList from '../components/organisms/BookList';
import AppBar from '../components/organisms/AppBar';
import "./Apptemplate.css"

const AppTemplate: React.FC = () => (
  <div className="app-template">
    <AppBar/>
    <BookList />
  </div>
);

export default AppTemplate;

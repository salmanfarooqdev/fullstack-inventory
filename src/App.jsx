import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateItem from './CreateItem';
import GetItem from './GetItem';
import CreateCategory from './CreateCategory';
import GetCategory from './GetCategory';
import DeleteItem from './DeleteItem';
import UpdateItem from './UpdateItem';
import './App.css'

function App() {

 

  return (
    <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createItem">Create Item</Link>
          </li>
          <li>
            <Link to="/category/create">Create Category</Link>
          </li>
         
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createItem" element={<CreateItem />} />
        <Route path="/item/:id" element={<GetItem />} />
        <Route path="/category/create" element={<CreateCategory />} />
        <Route path="/category/:id" element={<GetCategory />} />
        <Route path="/item/:id/delete" element={<DeleteItem />} />
        <Route path="/item/:id/update" element={<UpdateItem />} />






      </Routes>
    </div>
  </Router>
  )
}

export default App

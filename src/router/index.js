import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/home'

const RouterConfig = () => {
    return (
      <div>
        <div>顶部内容</div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <div id="container"></div>
      </div>
    )
}

export default RouterConfig
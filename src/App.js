import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import { Button } from "antd-mobile";

import Home from "./pages/Home";
import CityList from "./pages/CityList";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置路由 render属性是一个函数prop，用于指定要渲染的内容，路由重定向到首页 */}
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;

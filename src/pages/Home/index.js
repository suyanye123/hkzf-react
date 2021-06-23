import React, { Component } from "react";
import { Route } from "react-router-dom";
import News from "../News";
export default class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "blue", padding: 10 }}>
        首页
        {/* 渲染子路由 */}
        <Route path="/home/news" component={News}></Route>
      </div>
    );
  }
}

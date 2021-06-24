import React, { Component } from "react";
import { Route } from "react-router-dom";
import News from "../News";
import Index from "../Index";
import HouseList from "../HouseList";
import Profile from "../Profile";
import { TabBar } from "antd-mobile";
import "./index.css";
const tabItems = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/houselist",
  },
  {
    title: "资讯",
    icon: "icon-infom",
    path: "/home/news",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/profile",
  },
];
export default class Home extends Component {
  state = {
    // 默认选择菜单项
    selectedTab: this.props.location.pathname,
  };
  // 渲染tabbaritem
  renderTabBarItem() {
    return tabItems.map((item) => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          // 路由切换0
          this.props.history.push(item.path);
          this.setState({
            selectedTab: item.path,
          });
        }}
      />
    ));
  }
  render() {
    return (
      <div className="home">
        {/* 渲染子路由 */}
        <Route path="/home/news" component={News}></Route>
        <Route exact path="/home" component={Index}></Route>
        <Route path="/home/houselist" component={HouseList}></Route>
        <Route path="/home/profile" component={Profile}></Route>
        {/* TabBar */}

        <TabBar
          unselectedTintColor="#888"
          tintColor="#21b97a"
          barTintColor="white"
          noRenderContent="true"
        >
          {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}

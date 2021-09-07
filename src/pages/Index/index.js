//tapbar的首页
import React, { Component } from "react";
import axios from "axios";
import { Carousel, Flex } from "antd-mobile";
//导入图片
import Nav1 from "../../assets/img/nav-1.png";
import Nav2 from "../../assets/img/nav-2.png";
import Nav3 from "../../assets/img/nav-3.png";
import Nav4 from "../../assets/img/nav-4.png";
import "./index.css";
const navs = [
  { id: 1, img: Nav1, title: "整租", path: "/home/list" },
  { id: 2, img: Nav2, title: "合租", path: "/home/hezu" },
  { id: 3, img: Nav3, title: "地图找房", path: "/home/zhao" },
  { id: 4, img: Nav4, title: "去出租", path: "/home/qu" },
];
export default class Index extends Component {
  state = {
    // 图片名称
    swipers: [],
    loaded: false,
  };
  async getSwipers() {
    const res = await axios.get("http://127.0.0.1:8080/home/swiper");
    console.log(res);

    this.setState(() => {
      return {
        swipers: res.data.body,
        loaded: true,
      };
    });
  }
  componentDidMount() {
    // 在挂载前请求轮播图数据
    this.getSwipers();
  }
  // 渲染轮播图
  renderSwipers() {
    return this.state.swipers.map((item) => (
      <a
        key={item.id}
        href=".."
        style={{
          display: "inline-block",
          width: "100%",
          height: 212,
        }}
      >
        <img
          src={`http://127.0.0.1:8080${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
        />
      </a>
    ));
  }
  //渲染navs
  renderNavs() {
    return navs.map((item) => (
      <Flex.Item
        key={item.id}
        onClick={() => {
          this.props.history.push(item.path);
        }}
      >
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
      </Flex.Item>
    ));
  }
  render() {
    let { loaded } = this.state;
    return (
      <div className="index">
        {/* 轮播图 */}
        {loaded && (
          <Carousel autoplay infinite autoplayInterval={2000}>
            {this.renderSwipers()}
          </Carousel>
        )}
        {/* 导航菜单 */}
        <Flex className="nav">{this.renderNavs()}</Flex>
      </div>
    );
  }
}

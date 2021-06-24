import React, { Component } from "react";
import axios from "axios";
import { Carousel } from "antd-mobile";
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
  render() {
    let { loaded } = this.state;
    return (
      <div className="index">
        {loaded && (
          <Carousel autoplay infinite autoplayInterval={2000}>
            {this.renderSwipers()}
          </Carousel>
        )}
      </div>
    );
  }
}

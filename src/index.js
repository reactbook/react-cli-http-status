import ReactCLI, { Section } from "react-cli-renderer";
import React from "react";
import chalk from "chalk";
const axios = require('axios');

class MyReactCLIApp extends React.Component {
  state = {
    status: 0
  };

  componentDidMount() {
    setInterval(()=>{
      axios.get('http://localhost:3000')
      .then((response) => {
        // console.log(response);
        this.setState({ status: response.status })
      })
      .catch((error) => {
          if (error.response) {
            this.setState({ status: error.response.status })
          }else{
            this.setState({ status: -1 })
          }
      });
    },1000)
  }

  render() {
    return (
      <Section border={{ horizontal: "-", vertical: "|" }} align="center">
        网站状态监控
        <Section horizontal>
          <Section align="center">
            {this.state.status == 0 ? chalk.blue("●") : "○"} 正在检测<br />
            {this.state.status == 200 ? chalk.green("●") : "○"} 200 正常<br />
            {this.state.status == 500 ? chalk.red("●") : "○"} 500 错误<br />
            {this.state.status == -1 ? chalk.red("●") : "○"} 连接超时
          </Section>
        </Section>
      </Section>
    );
  }
}

ReactCLI(<MyReactCLIApp />);
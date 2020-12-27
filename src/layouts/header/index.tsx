import { Layout } from "antd";
import * as React from "react";
import "./style";

const { Header } = Layout;

interface IProps { }

class HeaderWrapper extends React.PureComponent<IProps> {
  public render() {
    return (
      <Header
        className="header-top-wrapper"
        style={{
          background: "#fff",
          padding: 0,
          borderBottom: "1px solid #e6e6e6"
        }}>
        <div className="clearfix">
          222
        </div>
      </Header>
    );
  }
}

export default HeaderWrapper;

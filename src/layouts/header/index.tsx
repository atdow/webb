import { Layout } from "antd";
import * as React from "react";
import "./style";
import banner1 from '../../assets/header/banner1.jpg';
import banner2 from '../../assets/header/banner2.jpg';
import Menu from './menu/index'
import Search from './search/index'
import My from './my/index'

// const { Header } = Layout;

interface IProps { }

class HeaderWrapper extends React.PureComponent<IProps> {
  public render() {
    return (
      <div
        className="header-top-wrapper">
        <div className='banner'>
          <ul>
            {/* <li><img src={banner2} alt="" /></li> */}
            <li></li>
          </ul>
        </div>
        <div className="header-content">
          <Menu />
          <Search />
          <My />
        </div>
      </div>
    );
  }
}

export default HeaderWrapper;

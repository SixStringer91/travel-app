import React from 'react';
import { Row, Col , Space } from 'antd';
import Search from './Search/Search'
import Language from './Language/Language'
import logo from '../../Img/logo.png'
import 'antd/dist/antd.css';



const Header = function () {
  return (<>
    <Row wrap justify="center" style={{background:'#FFD97D'}}>
      <Col flex={2} style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}><img style={{width:'120px', height:'auto'}} src={logo} /></Col>
      <Col flex={2}><Search /></Col>
      <Col flex={2} style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}} ><Language/></Col>
    </Row>
  </>)
}


export default Header;
import { Row, Col, Drawer } from 'antd';
import { NavLink } from 'react-router-dom';
import Icon, { SettingFilled } from '@ant-design/icons';
import { useState } from 'react';
import PandaSvg from './Panda';
import './Header.css';
import Search from './Search/Search';
import Language from './Language/Language';
// import Profile from './Profile/Profile';

const resetMargin = { marginLeft: 0, marginRight: 0 };

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Drawer
        height={69}
        visible={isOpen}
        placement="top"
        mask={false}
        className="drawer"
        onClose={() => setOpen((prev) => !prev)}
      >
        <Row className="header" gutter={16} justify="center" align="middle" style={resetMargin}>
          <Col md={8} xs={14}>
            <Search />
          </Col>

          <Col>
            <Language />
          </Col>
        </Row>
      </Drawer>
      <Row
        className="header"
        style={resetMargin}
        gutter={16}
        justify="space-between"
        align="middle"
      >
        <Col style={{ justifyContent: 'flex-start', marginRight: 'auto' }}>
          <NavLink to="/">
            <div>
              <Icon component={PandaSvg} />
              <span className="title">Travel App</span>
            </div>
          </NavLink>
        </Col>

        {/* <Col>
          <Profile />
        </Col> */}

        <Col>
          <SettingFilled
            onClick={() => setOpen((prev) => !prev)}
            style={{ fontSize: '200%', color: 'white' }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Header;

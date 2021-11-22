import { Menu, Input, Typography, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import { COLORS } from "../Styles/Colors";
import "./Header.css";
import { HomeFilled } from "@ant-design/icons";
import { useState } from "react";
import logo from "../../assets/Logo.png";
const { SubMenu } = Menu;

const HeaderStyled = styled(Row)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 5px 5px -5px ${COLORS.blue4};
  background-color: ${COLORS.white};
`;

const MenuStyled = styled(Menu)`
  background-color: ${COLORS.white};
`;
const Header = () => {
  const searchFunction = () => {
    console.log("Hello, this is a result of search function");
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  const [current, setCurrent] = useState("mail");

  return (
    <HeaderStyled>
      <Col span={1} className="header__logo">
        <Typography.Title>3T</Typography.Title>
        {/* <img src={logo} alt={"Logo"}/> */}
      </Col>
      <Col span={10} className="header__menu">
        <MenuStyled
          onClick={handleClick}
          mode="horizontal"
          // selectedKeys={current}
        >
          <Menu.Item key="home" icon={<HomeFilled />}>
            Home
          </Menu.Item>
          <SubMenu key="SubMenu" title="Laptops">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="accessoriesy">
            <a
              href="https://ant.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessories
            </a>
          </Menu.Item>
        </MenuStyled>
      </Col>
      <Col span={6} className="header__searchbar">
        <Input.Search
          placeholder="input search text"
          allowClear={true}
          onSearch={searchFunction}
          enterButton
        ></Input.Search>
      </Col>
      <Col span={4} className="header__user">
        <Button type="primary">Log in</Button>
        <Button>Sign up</Button>
      </Col>
    </HeaderStyled>
  );
};

export default Header;

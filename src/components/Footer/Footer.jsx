import styled from "styled-components";
import { Row as RowAntd, Col as ColAntd, Typography, Layout } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { COLORS } from "../Styles/Colors";

const FooterStyled = styled(Layout.Footer)`
  background-color: ${COLORS.blue5};
  color: ${COLORS.white};
  padding:  0px 10px 20px 10px;
`;

const Col = styled(ColAntd)`
  padding: 5px 10px 5px 10px;

  &.key {
    display: flex;
    justify-content: end;
  }
`;

const Row = styled(RowAntd)`
  padding: 5px 0px 5px 0px;

  &.logo {
    color: #fefcfb;
  }

  &.copyright {
    color: ${COLORS.blue2};
    font-weight: 600;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Row justify={"center"} align={"middle"}>
        <Col xs={24} md={12}>
          <Row justify={"center"} className={"logo"}>
            <Typography.Title>3T</Typography.Title>
          </Row>
          <Row>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nemo quas vitae perferendis amet, reiciendis beatae maiores
            accusamus debitis doloribus error enim officiis tenetur atque
            placeat, laborum voluptatibus? Voluptatibus, dolorum?
          </Row>
          <Row justify={"center"}>
            <Col>
              <FacebookFilled style={{ fontSize: "20px", color: '#1282A2' }}></FacebookFilled>
            </Col>
            <Col>
              <InstagramFilled style={{ fontSize: "20px", color: '#1282A2' }}></InstagramFilled>
            </Col>
            <Col>
              <YoutubeFilled style={{ fontSize: "20px", color: '#1282A2' }}></YoutubeFilled>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={10}>
          <Row>
            <Col xs={6} className={"key"}>
              Address:
            </Col>
            <Col xs={18}>KP. 6, P. Linh Trung, TP. Thủ Đức, TP. HCM</Col>
          </Row>
          <Row>
            <Col xs={6} className={"key"}>
              Email:
            </Col>
            <Col xs={18}>shop3t@gmail.com</Col>
          </Row>
          <Row>
            <Col xs={6} className={"key"}>
              Phone:
            </Col>
            <Col xs={18}>0123 456 789</Col>
          </Row>
          <Row>
            <Col xs={6} className={"key"}>
              Working Time:
            </Col>
            <Col xs={18}>8:00 AM - 22:00 PM</Col>
          </Row>
        </Col>
      </Row>
      <Row
        justify={"center"}
        className={"copyright"}
        style={{ fontSize: "12px" }}
      >
        © Group 3T - NT208.M11.ANTN - UIT HCM
      </Row>
    </FooterStyled>
  );
};

export default Footer;

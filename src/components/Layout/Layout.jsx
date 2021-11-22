import { Layout, BackTop, Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import { UpCircleFilled } from "@ant-design/icons";

const TempContent = styled.div`
  min-height: 1000px;
  padding: 24px;
  background: #fff;
`;
const StraightLayout = () => {
  return (
    <Layout>
      <Header></Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <TempContent>Content</TempContent>
        <BackTop><UpCircleFilled style={{ fontSize: "32px", color: '#096dd9' }}></UpCircleFilled></BackTop>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

const LayoutWithSidebar = () => {
  return <Layout></Layout>;
};

export { StraightLayout, LayoutWithSidebar };

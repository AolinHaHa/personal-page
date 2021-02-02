import React, { useState } from "react";
import { Button, Layout } from "antd";
import LeftNavContainer from "./leftNavContainer.js";
import styled from "styled-components";

const { Header, Footer, Sider, Content } = Layout;

const MasterLayout = styled(Layout)`
  height: 100vh;
`;
const AppLayout = (props) => {
  return (
    <MasterLayout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </MasterLayout>
  );
};

export default AppLayout;

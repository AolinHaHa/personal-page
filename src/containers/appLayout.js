import React, { useState } from "react";
import { Button, Layout, Typography } from "antd";
import Resume from "./resume";
import styled from "styled-components";

const { Header, Footer, Sider, Content } = Layout;

const MasterLayout = styled(Layout)`
  height: 100%;
  min-height: 100vh;
`;

const SiderWrapper = styled(Sider)`
  background: #f0f2f5;
`;
const HeaderWrapper = styled(Header)`
  background: #f0f2f5;
`;
const ContentWrapper = styled(Content)``;

const AppLayout = () => {
  return (
    <MasterLayout>
      <SiderWrapper></SiderWrapper>
      <Layout>
        <HeaderWrapper></HeaderWrapper>
        <ContentWrapper>
          <Resume />
        </ContentWrapper>
        <Footer>Footer</Footer>
      </Layout>
    </MasterLayout>
  );
};

export default AppLayout;

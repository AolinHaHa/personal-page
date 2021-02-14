import React, { useState } from "react";
import { Button, Layout, Typography } from "antd";
import ExperienceBlock from "../components/experienceBlock";
import styled from "styled-components";
import { EXPERIENCE_CONTENT } from "../constants/experienceComponentConst";

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
  const [highlightedKeywords, setHighlightedKeywords] = useState([
    "NodeJS",
    "JavaScript",
  ]);
  return (
    <MasterLayout>
      <SiderWrapper></SiderWrapper>
      <Layout>
        <HeaderWrapper></HeaderWrapper>
        <ContentWrapper>
          {EXPERIENCE_CONTENT.map((content) => (
            <ExperienceBlock
              title={content.title}
              time={content.time}
              content={content.content}
              highlight={highlightedKeywords}
            />
          ))}
        </ContentWrapper>
        <Footer>Footer</Footer>
      </Layout>
    </MasterLayout>
  );
};

export default AppLayout;

import React, { useState } from "react";
import { Typography, Card, Row, Col, notification } from "antd";
import moment from "moment";
import styled from "styled-components";
import Highlighter from "react-highlight-words";
import { CopyTwoTone } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const ColLeftAlign = styled(Col)`
  text-align: left;
  position: relative;
`;
const TextWrapperFixed = styled(Text)`
  position: absolute;
`;
const ColRightAlign = styled(Col)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RowWrapper = styled(Row)`
  margin-bottom: 12px;
  padding-left: 12px;
  .anticon-copy {
    opacity: 0;
  }
  :hover {
    .anticon-copy {
      opacity: 100%;
      transition: opacity 0.5s;
    }
  }
`;
const CardWrapper = styled(Card)`
  min-width: 1080px;
  width: 80%;
  cursor: default;
  margin-bottom: 12px;
`;

const Context = React.createContext({ name: "Default" });

const ExperienceBlock = (props) => {
  const { highlight, title, content, time } = props;
  const [mockLoading, setMockLoading] = useState(true);

  const openNotification = () => {
    notification.success({
      message: "Copied!",
      className: "custom-class",
      style: {
        width: 200,
      },
    });
  };

  setTimeout(() => {
    setMockLoading(false);
  }, 1000);

  const triggerCopyClick = (item) => {
    openNotification(item);
    return navigator?.clipboard?.writeText(item);
  };
  return (
    <CardWrapper loading={mockLoading}>
      <Row>
        <ColLeftAlign span={20}>
          <Title>{title}</Title>
        </ColLeftAlign>
        <ColRightAlign span={4}>
          <Text>
            {time[0] && moment(time[0]).format("MMMM, YYYY")} -{" "}
            {(time[1] && moment(time[1]).format("MMMM, YYYY")) ||
              moment().format("MMMM, YYYY")}
          </Text>
        </ColRightAlign>
      </Row>
      {content.map((item) => (
        <RowWrapper>
          <ColLeftAlign span={24}>
            <Highlighter
              highlightClassName="experienceBlockHighlight"
              searchWords={highlight}
              autoEscape={true}
              textToHighlight={item}
            />
            <CopyTwoTone
              onClick={() => triggerCopyClick(item)}
              style={{ marginLeft: 12 }}
            />
          </ColLeftAlign>
        </RowWrapper>
      ))}
    </CardWrapper>
  );
};

export default ExperienceBlock;

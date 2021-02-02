import React from "react";
import { Button, Layout } from "antd";

const LeftNavContainer = (props) => {
  const { defaultButtonNames } = props;
  return (
    <div>
      <Button>{defaultButtonNames.button1}</Button>
      <Button>siderButton2</Button>
      <Button>siderButton3</Button>
    </div>
  );
};

export default LeftNavContainer;

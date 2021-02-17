import React, { useState } from "react";
import ExperienceBlock from "../components/experienceBlock";
import { EXPERIENCE_CONTENT } from "../constants/experienceComponentConst";
import { Select } from "antd";
import union from "lodash/union";

const { Option } = Select;

const Resume = () => {
  const [highlightedKeywords, setHighlightedKeywords] = useState([]);
  const [options, setOptions] = useState([
    "NodeJS",
    "JavaScript",
    "react",
    "Redux",
    "Thunk",
    "RESTful",
    "ExpressJS",
    "StyledUI",
    "ElasticUI",
  ]);
  const handleChange = (val) => {
    setHighlightedKeywords(val);
  };
  return (
    <div>
      <Select mode="tags" onChange={handleChange} style={{ width: 400 }}>
        {options.map((skill) => (
          <Option key={skill}>{skill}</Option>
        ))}
      </Select>
      {EXPERIENCE_CONTENT.map((content) => (
        <ExperienceBlock
          title={content.title}
          time={content.time}
          content={content.content}
          highlight={highlightedKeywords}
        />
      ))}
    </div>
  );
};

export default Resume;

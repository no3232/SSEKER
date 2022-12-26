import styled from 'styled-components';

import StackIcon from '../common/StackIcon'
import SubtitleText from '../common/SubtitleText';

const stack = [
  "android",
  "angular",
  "c",
  "cplusplus",
  "dart",
  "django",
  "docker",
  "express",
  "fastapi",
  "figma",
  "flask",
  "flutter",
  "git",
  "go",
  "javascript",
  "kotlin",
  "linux",
  "mysql",
  "python",
  "react",
  "reactnative",
  "rust",
  "spring",
  "springboot",
  "svelte",
  "swift",
  "typescript",
  "vuejs",
  "xd"
];

const StackFilterCheckboxs = stack.map((skill) => {
  return (
    <>
      <StackIcon key={skill} stack={skill} clickable={true} />
    </>
  );
});

const StackFilter = () => {
  return (
    <>
    <SubtitleText>스킬</SubtitleText>
    <FilterDiv>
      {StackFilterCheckboxs}
    </FilterDiv>
    </>
  );
};

export default StackFilter;

const FilterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #D6DADF;
  border-radius: 10px;
  width: auto;
`
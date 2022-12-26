import styled from 'styled-components';

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
      <input type='checkbox' name={skill} value={skill} />
      <label htmlFor={skill}>{skill}</label>
    </>
  );
});

const StackFilter = () => {
  return (
    <FilterDiv>
      {StackFilterCheckboxs}
    </FilterDiv>
  );
};

export default StackFilter;

const FilterDiv = styled.div`
  background-color: grey;
  width: 90%;

  & input[type=checkbox] {
    width: 20px;
    height: 20px; 
  }

  & label {
    color: white;
    font-size: 20px;
  }
`
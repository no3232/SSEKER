import styled from 'styled-components';

import SubtitleText from '../common/SubtitleText';
import { skill } from '../modules/StackIconDummy';

const stack:string[] = []

for (let i in skill) {
  stack.push(skill[i].name)
}

// const StackFilterCheckboxs = stack.map((skill) => {
//   return (
//     <>
//       <StackIcon key={skill} stack={skill} clickable={true} textShow={false} />
//     </>
//   );
// });

const StackFilter = () => {
  return (
    <>
    <SubtitleText>스킬</SubtitleText>
    <FilterDiv>
      {/* {StackFilterCheckboxs} */}
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
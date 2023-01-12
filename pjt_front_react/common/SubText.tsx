import styled from "styled-components";

const SubText = (props: any) => {
  return (
    <>
      <SubTextStyle>{props.children}</SubTextStyle>
    </>
  );
};

export default SubText;

const SubTextStyle = styled.div`
  font-size: 13px;
  font-family: 'GmarketSansLight';
`;
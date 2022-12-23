import { useState } from "react";
import styled from "styled-components";

const styledSelectButton = styled.button``;

const selectButton = (props) => {
  const [selectCategory, setSelectCategory] = useState(false);

  return <styledSelectButton className={selectCategory && }>{}</styledSelectButton>;
};

export default selectButton;

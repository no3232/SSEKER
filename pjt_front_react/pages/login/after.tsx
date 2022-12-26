import Router from 'next/router';

import TitleText from '../../common/TitleText';
import MainButton from '../../common/MainButton';

const LoginAfterPage = () => {
  const router = Router;
  const moveToTeamList = () => {
    router.push('/team')
  }
  const moveToUserList = () => {
    router.push('/user')
  }

  return (
    <>
      <TitleText>SSEEKER</TitleText>
      <MainButton onButtonClick={moveToUserList}>팀원 구하기!</MainButton>
      <MainButton onButtonClick={moveToTeamList}>팀에 들어가기!</MainButton>
    </>
  );
};

export default LoginAfterPage;

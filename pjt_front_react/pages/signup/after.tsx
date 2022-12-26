import Router from 'next/router';

import TitleText from '../../common/TitleText';
import SubtitleText from '../../common/SubtitleText';
import MainButton from '../../common/MainButton';

const SignupAfterPage = () => {
  const router = Router;
  const moveToTeamList = () => {
    router.push('/team')
  }
  const moveToUserList = () => {
    router.push('/user')
  }

  return (
    <>
      <TitleText>준비가 모두 끝났습니다!</TitleText>
      <SubtitleText>어느 페이지부터 둘러보시겠어요?</SubtitleText>
      <MainButton onButtonClick={moveToUserList}>팀원 구하기!</MainButton>
      <MainButton onButtonClick={moveToTeamList}>팀에 들어가기!</MainButton>
      <SubtitleText>상세정보를 더 입력하고 싶어요  <a href="">정보 수정</a></SubtitleText>
    </>
  );
};

export default SignupAfterPage;
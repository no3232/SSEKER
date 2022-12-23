const SkillInfo = () => {
  return (
    <div>
      <h1>Skill Info</h1>
      <h5>마이 페이지에서 다른 언어/프레임워크를 추가할 수 있습니다!</h5>
      <form action="">
        <label htmlFor="name">프론트엔드</label>
        <input type="text" name='name' />
        <label htmlFor="campus">백엔드</label>
        <input type="text" name='campus' />
        <label htmlFor="ssafy-class">Devops</label>
        <input type="text" name='ssafy-class' />
        <label htmlFor="ssafy-class">UI/UX</label>
        <input type="text" name='ssafy-class' />
        <input type='submit' value="Complete" />
      </form>
    </div>
  );
};

export default SkillInfo;
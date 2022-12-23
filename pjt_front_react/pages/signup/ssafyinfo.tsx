const SsafyInfo = () => {
  return (
    <div>
      <h1>SSAFY Info</h1>
      <form action="">
        <label htmlFor="name">유저이름</label>
        <input type="text" name='name' />
        <label htmlFor="campus">캠퍼스</label>
        <input type="text" name='campus' />
        <label htmlFor="ssafy-class">소속 반</label>
        <input type="text" name='ssafy-class' />
        <label htmlFor="ssafy-class">소속 반</label>
        <input type="text" name='ssafy-class' />
        <label htmlFor="ssafy-track">수강 트랙</label>
        <input type="text" name='ssafy-track' />
        <input type='submit' value="Next >" />
      </form>
    </div>
  );
};

export default SsafyInfo;
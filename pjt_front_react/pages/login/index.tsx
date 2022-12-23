const LoginMainPage = () => {
  return (
    <div>
      Login Page
      <form action="">
        <label htmlFor="email">이메일()</label>
        <input type="email" name='email' />
        <label htmlFor="password">비밀번호</label>
        <input type="password" name='password' />
        <input type='submit' value="회원가입" />
      </form>
    </div>
  );
};

export default LoginMainPage;

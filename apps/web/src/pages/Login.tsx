import { memo } from 'react';

const Login = memo(() => {
  return (
    <div className="h-full flex justify-center items-center">
      <form action="/login" method="post">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">邮箱</label>
          <input
            type="email"
            className="input validator"
            required
            placeholder="Email"
          />
          <div className="validator-hint">请输入邮箱</div>

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
});

export default Login;

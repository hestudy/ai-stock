import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full flex justify-center items-center">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">登录</legend>

          <label className="label">邮箱</label>
          <input
            type="email"
            name="email"
            className="input validator"
            required
            placeholder="邮箱"
          />
          <div className="validator-hint">请输入邮箱</div>

          <label className="label">密码</label>
          <input
            type="password"
            name="password"
            className="input validator"
            required
            placeholder="密码"
          />
          <div className="validator-hint">请输入密码</div>

          <button className="btn btn-neutral mt-4" type="submit">
            登录
          </button>
        </fieldset>
      </form>
    </div>
  );
}

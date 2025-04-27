import { memo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { pb } from '../utils/pb';

const NavbarLayout = memo(() => {
  const user = useAuth();

  return (
    <div className="h-full flex flex-col">
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">AI Stock</a>
          </div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar avatar-placeholder"
              >
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-md">{user?.id?.slice(0, 2)}</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      pb.authStore.clear();
                      //   navigate('/login', {
                      //     replace: true,
                      //   });
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-0 overflow-y-auto p-2">{/* <Outlet /> */}</div>
    </div>
  );
});

export default NavbarLayout;

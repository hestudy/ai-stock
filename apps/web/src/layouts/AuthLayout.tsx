import { memo } from 'react';

const AuthLayout = memo(() => {
  // const navigate = useNavigate();
  // const { data, isLoading } = useSwr('auth', async () => {
  //   const valid = pb.authStore.isValid;

  //   if (!valid) {
  //     pb.authStore.clear();
  //     navigate('/login', {
  //       replace: true,
  //     });
  //   }

  //   await pb
  //     .collection('users')
  //     .authRefresh()
  //     .catch(() => {
  //       pb.authStore.clear();
  //       navigate('/login', {
  //         replace: true,
  //       });
  //     });

  //   return valid;
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data) {
  //   return <div>Unauthorized</div>;
  // }

  return <div>demo</div>;
});

export default AuthLayout;

import { useMemo } from 'react';
import { pb } from '../utils/pb';

export const useAuth = () => {
  return useMemo(() => pb.authStore.record, []);
};

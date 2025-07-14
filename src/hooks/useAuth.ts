import { useAuthenticationStatus, useUserData, useSignOut } from '@nhost/react';

export const useAuth = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const user = useUserData();
  const { signOut } = useSignOut();

  return {
    user,
    isAuthenticated,
    isLoading,
    signOut,
  };
};
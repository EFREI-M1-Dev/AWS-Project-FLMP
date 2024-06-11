import { useAppSelector } from './reduxHooks.tsx';

export const decodedToken = () => {
  const token = useAppSelector((state) => state.user.token);
  if (token == null) {
    return null;
  }

  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const data = JSON.parse(jsonPayload);
    return data && data.sub ? data.sub : null;
  } catch (err) {
    console.error('Failed to decode token', err);
    return null;
  }
};



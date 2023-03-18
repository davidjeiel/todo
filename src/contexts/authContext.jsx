import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from 'firebase/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const loginWithGoogle = async () => {
    const provider = new auth.GoogleAuthProvider();
    await auth().signInWithPopup(provider);
  };

  const logout = async () => {
    await auth().signOut();
  };

  const value = {
    user,
    loginWithGoogle,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

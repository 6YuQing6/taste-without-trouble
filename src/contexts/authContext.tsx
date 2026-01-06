import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import {
  getRedirectResult,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

interface AuthContextType {
  currentUser: unknown;
  userLoggedIn: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth).catch(console.error);
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        console.log("Logged in user:", {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          providerId: user.providerData[0]?.providerId,
        });
      } else {
        console.log("User signed out");
      }
      initializeUser(user);
    });

    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      localStorage.removeItem("user");
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

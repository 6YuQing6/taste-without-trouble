import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithRedirect(auth, provider);
};

export const doSignOut = () => {
  localStorage.removeItem("user");
  console.log("Logging Out");
  return auth.signOut();
};

export const doPasswordReset = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password: string) => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in");
  }
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  if (!auth.currentUser) {
    throw new Error("No user is currently signed in");
  }
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

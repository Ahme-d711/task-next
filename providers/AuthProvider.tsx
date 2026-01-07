"use client";
import { useAuthStore } from "@/features/auth/stores/authStore";
import { User } from "@/features/auth/types/";
import { ReactNode, useEffect } from "react";

export default function AuthProvider({
  token,
  user,
  children,
}: {
  token: string | null;
  user: User | null;
  children: ReactNode;
}) {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    // Set both token and user using setAuth
    if (token || user) {
      setAuth(token, user);
    }
  }, [token, user, setAuth]);

  return <>{children}</>;
}

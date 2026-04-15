import { useEffect, useState } from "react";
import { useUser, useAuth as useClerkAuth } from "@clerk/clerk-react";
import { authAPI } from "../api/api";

const useAuth = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { getToken } = useClerkAuth();
  const [dbUser,  setDbUser]  = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn || !user) {
      setDbUser(null);
      setLoading(false);
      return;
    }

    const syncUser = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        const res = await authAPI.syncUser(token, {
          clerkId: user.id,
          name:    user.fullName || user.firstName || "User",
          email:   user.primaryEmailAddress?.emailAddress || "",
          avatar:  user.imageUrl || "",
        });
        setDbUser(res.user);
      } catch (err) {
        console.error("Failed to sync user:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    syncUser();
  }, [isSignedIn, isLoaded, user]);

  return { dbUser, loading, error, isSignedIn, user };
};

export default useAuth;
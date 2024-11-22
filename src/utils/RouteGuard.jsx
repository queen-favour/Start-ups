import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function RouteGuard() {
  const { user, getUser, isValidating } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    getUser(navigate);
  }, []);

  useEffect(() => {
    if (!user) return;
  }, [user]);

  if (isValidating) {
    return (
      <div className="mt-2">
        <Spinner />
      </div>
    );
  }

  return <Outlet />;
}

import { Outlet, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Root,
});

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({
      to: "/login",
    });
  }, [navigate]);

  return <Outlet />;
}

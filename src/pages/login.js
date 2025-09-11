import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "http://192.168.11.22:8000/sign-in"; 
  }, []);

  return null; 
}
import type { FormEvent } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export default async function handleLogin(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const useremail = String(formData.get("useremail") ?? "").trim();
  const userpassword = String(formData.get("userpassword") ?? "");

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ useremail, userpassword }),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas.");
    }

    const data = await response.json();
    sessionStorage.setItem("accessToken", data.access_token);
    window.location.href = "/";
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Não foi possível realizar login.");
  }
}

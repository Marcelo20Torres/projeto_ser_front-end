import type { FormEvent } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export default async function handleRegister(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const username = String(formData.get("username") ?? "").trim();
  const useremail = String(formData.get("useremail") ?? "").trim();
  const userpassword = String(formData.get("userpassword") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (userpassword !== confirmPassword) {
    alert("As senhas não conferem.");
    return;
  }

  try {
    sessionStorage.setItem(
      "registerData",
      JSON.stringify({ username, useremail, userpassword }),
    );

    const response = await fetch(
      `${API_BASE_URL}/auth/generate-code?useremail=${encodeURIComponent(useremail)}`,
      {
        method: "GET",
      },
    );

    if (!response.ok) {
      throw new Error("Falha ao gerar código de verificação.");
    }

    window.location.href = "/confirm-code";
  } catch (error) {
    console.error("Erro ao enviar código:", error);
    alert("Não foi possível enviar o código de verificação.");
  }
}

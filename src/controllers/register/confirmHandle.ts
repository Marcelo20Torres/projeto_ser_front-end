import type { FormEvent } from "react";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export default async function handleConfirm(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const codeVerification = Number(formData.get("code_verification"));

  const savedData = sessionStorage.getItem("registerData");

  if (!savedData) {
    alert("Dados de registro não encontrados. Preencha o cadastro novamente.");
    window.location.href = "/register";
    return;
  }

  const registerData = JSON.parse(savedData) as {
    username: string;
    useremail: string;
    userpassword: string;
  };

  if (Number.isNaN(codeVerification)) {
    alert("Digite um código válido.");
    return;
  }

  try {
    sessionStorage.setItem("codeVerification", String(codeVerification));

    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: registerData.username,
        useremail: registerData.useremail,
        userpassword: registerData.userpassword,
        code_verification: codeVerification,
      }),
    });

    if (!response.ok) {
      throw new Error("Falha no cadastro");
    }

    sessionStorage.removeItem("registerData");
    window.location.href = "/login";
  } catch (error) {
    console.error("Erro ao confirmar cadastro:", error);
    toast.error("Não foi possível concluir o cadastro. Verifique o código e tente novamente.");
  }
}

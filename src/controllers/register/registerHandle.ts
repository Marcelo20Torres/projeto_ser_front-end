import type { FormEvent } from "react";

export default function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        sessionStorage.setItem(
            "registerData",
            JSON.stringify({
                name,
                email,
                password
            })
        )
        window.location.href = "/confirm-code"
    } catch (error) {
        console.error("Erro ao enviar código:", error)
    }
}
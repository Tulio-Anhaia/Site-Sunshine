"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("consent")) {
      setState({
        status: "error",
        message: "É necessário aceitar o contato comercial para enviar a mensagem.",
      });
      return;
    }

    setState({ status: "submitting", message: "" });

    // [A CONFIGURAR] — integrar com FORM_SUBMISSION_ENDPOINT (variável de ambiente).
    // Nenhuma integração real está ativa nesta versão inicial.
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setState({
        status: "success",
        message: "Mensagem recebida. Nossa equipe entrará em contato em breve.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="contact-form-status">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-graphite mb-1">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-btn border border-graphite/20 px-4 py-3 focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-graphite mb-1">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-btn border border-graphite/20 px-4 py-3 focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-graphite mb-1">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-btn border border-graphite/20 px-4 py-3 focus:border-navy"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-graphite mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-btn border border-graphite/20 px-4 py-3 focus:border-navy"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          defaultChecked={false}
          className="mt-1 h-4 w-4"
        />
        <label htmlFor="consent" className="text-sm text-graphite/80">
          Autorizo o contato da Sunshine Esportes a partir dos dados informados,
          conforme a{" "}
          <a href="/privacidade" className="text-gold-dark underline">
            Política de Privacidade
          </a>
          .
        </label>
      </div>

      <div id="contact-form-status" role="status" aria-live="polite">
        {state.status === "error" && (
          <p className="text-sm text-danger">{state.message}</p>
        )}
        {state.status === "success" && (
          <p className="text-sm text-success">{state.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary">
        {state.status === "submitting" ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}

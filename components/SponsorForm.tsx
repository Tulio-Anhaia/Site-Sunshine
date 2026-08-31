"use client";

import { FormEvent, useState } from "react";
import Button from "./Button";
import { events, sponsorTiers } from "@/lib/data";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

export default function SponsorForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!data.get("consent")) {
      setState({
        status: "error",
        message: "É necessário autorizar o contato comercial para enviar o formulário.",
      });
      return;
    }

    setState({ status: "submitting", message: "" });

    // [A CONFIGURAR] — integrar com FORM_SUBMISSION_ENDPOINT / CRM comercial.
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setState({
        status: "success",
        message: "Solicitação recebida. A equipe comercial da Sunshine entrará em contato.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Não foi possível enviar sua solicitação agora. Tente novamente em instantes.",
      });
    }
  }

  const inputClasses =
    "w-full rounded-btn border border-graphite/20 px-4 py-3 focus:border-navy";
  const labelClasses = "block text-sm font-semibold text-graphite mb-1";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="sponsor-form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="s-name" className={labelClasses}>Nome</label>
          <input id="s-name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="s-company" className={labelClasses}>Empresa</label>
          <input id="s-company" name="company" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="s-role" className={labelClasses}>Cargo</label>
          <input id="s-role" name="role" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="s-email" className={labelClasses}>E-mail corporativo</label>
          <input id="s-email" name="email" type="email" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="s-phone" className={labelClasses}>Telefone</label>
          <input id="s-phone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="s-event" className={labelClasses}>Evento de interesse</label>
          <select id="s-event" name="event" required className={inputClasses}>
            <option value="">Selecione</option>
            {events.map((ev) => (
              <option key={ev.slug} value={ev.name}>{ev.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="s-tier" className={labelClasses}>Cota de interesse</label>
          <select id="s-tier" name="tier" required className={inputClasses}>
            <option value="">Selecione</option>
            {sponsorTiers.map((tier) => (
              <option key={tier.slug} value={tier.name}>{tier.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="s-message" className={labelClasses}>Mensagem</label>
        <textarea id="s-message" name="message" rows={4} className={inputClasses} />
      </div>

      <div className="flex items-start gap-3">
        <input id="s-consent" name="consent" type="checkbox" defaultChecked={false} className="mt-1 h-4 w-4" />
        <label htmlFor="s-consent" className="text-sm text-graphite/80">
          Autorizo o contato comercial da Sunshine Esportes a partir dos dados
          informados, conforme a{" "}
          <a href="/privacidade" className="text-gold-dark underline">
            Política de Privacidade
          </a>
          .
        </label>
      </div>

      <div id="sponsor-form-status" role="status" aria-live="polite">
        {state.status === "error" && <p className="text-sm text-danger">{state.message}</p>}
        {state.status === "success" && <p className="text-sm text-success">{state.message}</p>}
      </div>

      <Button type="submit" variant="primary">
        {state.status === "submitting" ? "Enviando..." : "Enviar solicitação"}
      </Button>
    </form>
  );
}

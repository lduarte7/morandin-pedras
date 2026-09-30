export const WHATSAPP_NUMBER = "5551983069998";

export type QuotePayload = {
  ambiente?: string;
  aplicacao?: string;
  materialStatus?: string;
  projectStatus?: string;
};

export function buildWhatsAppUrl(payload: QuotePayload = {}): string {
  const lines = [
    "Olá, gostaria de solicitar um orçamento com a Morandin.",
    "",
    payload.ambiente ? `Ambiente: ${payload.ambiente}` : null,
    payload.aplicacao ? `Aplicação: ${payload.aplicacao}` : null,
    payload.materialStatus ? `Material: ${payload.materialStatus}` : null,
    payload.projectStatus
      ? `Medidas/projeto: ${payload.projectStatus}`
      : null,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

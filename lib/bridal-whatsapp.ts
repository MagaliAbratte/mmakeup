import { bridalData } from "@/content/bridal";
import { landingPageData } from "@/content/landing";

export function getBridalWhatsAppUrl(inquiryId?: string) {
  const url = new URL(landingPageData.contact.whatsappUrl);
  const message = inquiryId
    ? `¡Hola! Estoy organizando mi casamiento y me gustaría consultar disponibilidad para ${inquiryId}.`
    : bridalData.contact.message;
  url.searchParams.set("text", message);
  return url.toString();
}

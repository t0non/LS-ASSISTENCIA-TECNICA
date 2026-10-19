import {commercialWhatsApp} from './commercial-content';

export function trackWhatsApp(placement: string, equipmentName?: string) {
  const trackingWindow = window as Window & {dataLayer?: Record<string, unknown>[]};
  trackingWindow.dataLayer = trackingWindow.dataLayer || [];
  trackingWindow.dataLayer.push({
    event: 'whatsapp_click',
    page_type: 'refrigeracao_comercial',
    page_path: window.location.pathname,
    cta_location: placement,
    equipment: equipmentName || 'geral',
    link_url: commercialWhatsApp,
  });
}

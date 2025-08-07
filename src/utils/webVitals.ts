import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

// Função para enviar métricas para analytics (pode ser customizada)
function sendToAnalytics(metric: any) {
  // Em produção, você pode enviar para Google Analytics, DataDog, etc.
  if (import.meta.env.DEV) {
    console.log('Web Vitals:', metric)
  }
  
  // Exemplo para Google Analytics 4
  // gtag('event', metric.name, {
  //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  //   event_category: 'Web Vitals',
  //   event_label: metric.id,
  //   non_interaction: true,
  // })
}

export function reportWebVitals() {
  onCLS(sendToAnalytics)
  onFCP(sendToAnalytics)
  onLCP(sendToAnalytics)
  onTTFB(sendToAnalytics)
  onINP(sendToAnalytics) // INP substituiu FID como métrica principal
}
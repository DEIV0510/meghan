import { productDisplayName, type Product } from '../data/products'
import { BRAND } from '../data/brand'

export function formatPrice(price?: number): string {
  if (price == null) return 'Consultar precio'
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(price)
}

export interface CartLine {
  product: Product
  qty: number
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, l) => sum + (l.product.price ?? 0) * l.qty, 0)
}

export function cartHasUnpricedItems(lines: CartLine[]): boolean {
  return lines.some((l) => l.product.price == null)
}

export function buildCartWhatsAppMessage(lines: CartLine[]): string {
  const items = lines
    .map((l) => {
      const priceLabel = l.product.price != null ? formatPrice(l.product.price) : 'precio a confirmar'
      return `• ${productDisplayName(l.product)} — x${l.qty} — ${priceLabel}`
    })
    .join('\n')

  const hasUnpriced = cartHasUnpricedItems(lines)
  const subtotal = cartSubtotal(lines)
  const totalLine = hasUnpriced
    ? subtotal > 0
      ? `Subtotal de referencias con precio: ${formatPrice(subtotal)} (el resto, a confirmar).`
      : 'Precios por confirmar.'
    : `Total: ${formatPrice(subtotal)}`

  return `Hola, ${BRAND.name}. Quiero realizar el siguiente pedido:\n${items}\n\n${totalLine}\n\nQuiero confirmar disponibilidad y continuar con la compra.`
}

export function buildProductWhatsAppMessage(product: Product): string {
  return `Hola, ${BRAND.name}. Estoy interesado en ${productDisplayName(product)}. ¿Me pueden confirmar disponibilidad${product.price == null ? ' y precio' : ''}?`
}

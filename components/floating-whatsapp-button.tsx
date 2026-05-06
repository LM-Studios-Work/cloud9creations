import { WhatsAppIcon } from "@/components/social-icons"

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/27821234567?text=Hi%20Cloud%20Nine%20Creations%2C%20I%20would%20like%20to%20enquire%20about%20balloon%20styling."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed right-4 bottom-4 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_oklch(0.22_0.01_60_/_0.22)] transition-transform hover:scale-105 focus-visible:ring-3 focus-visible:ring-[#25D366]/35 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}

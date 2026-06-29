/**
 * Site footer for the AiDesign homepage.
 *
 * Shows the brand line, a short tagline and the current year. Kept intentionally
 * minimal; expand with real links once the corresponding pages exist.
 *
 * Returns:
 *     The footer element for the page layout.
 */
export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p className="font-medium text-foreground">AiDesign</p>
        <p>© {new Date().getFullYear()} AiDesign. All rights reserved.</p>
      </div>
    </footer>
  )
}

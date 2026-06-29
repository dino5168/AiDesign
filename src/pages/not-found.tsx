import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

/**
 * 404 page for unmatched routes.
 *
 * Returns:
 *     A centered not-found section with a link back home.
 */
export function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-32 text-center">
      <p className="font-heading text-6xl font-semibold tracking-tight">404</p>
      <p className="mt-4 text-muted-foreground">找不到這個頁面。</p>
      <Button className="mt-8" render={<Link to="/" />}>
        回首頁
      </Button>
    </section>
  )
}

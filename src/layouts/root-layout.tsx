import { Outlet } from "react-router-dom"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

/**
 * Shared page layout: persistent header/footer with a routed main area.
 *
 * Returns:
 *     The layout element; the active route renders into <Outlet />.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

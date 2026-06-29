import { Menu } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

/** 首頁導覽項目;`to` 對應 react-router 路由路徑。 */
const NAV_ITEMS: ReadonlyArray<{ label: string; to: string }> = [
  { label: "Home", to: "/" },
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
]

/**
 * Responsive site header for AiDesign.
 *
 * Sticky bar with the brand on the left, a theme toggle on the right, and
 * navigation that shows inline (NavigationMenu) on viewports ≥ md or collapses
 * into a hamburger-triggered Sheet drawer below md. Links use react-router so
 * navigation is client-side; tapping a drawer link closes it via SheetClose.
 *
 * Returns:
 *     The header element for the layout.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-heading text-lg font-semibold tracking-tight">
          AiDesign
        </Link>

        <div className="flex items-center gap-2">
          {/* 桌面:水平導覽 (≥ md) */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink
                    render={<NavLink to={item.to} end={item.to === "/"} />}
                    className="px-3 py-2"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />

          {/* 手機:漢堡 + 抽屜 (< md) */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="開啟導覽選單"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>AiDesign</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2 pb-4">
                {NAV_ITEMS.map((item) => (
                  <SheetClose
                    key={item.to}
                    render={
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted aria-[current=page]:bg-muted"
                      >
                        {item.label}
                      </NavLink>
                    }
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

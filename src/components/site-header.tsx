import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
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

/** 首頁導覽項目;目前為單頁錨點,導入 router 後改為路由路徑。 */
const NAV_ITEMS: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

/**
 * Responsive site header for the AiDesign homepage.
 *
 * Renders a sticky top bar with the brand on the left. On viewports ≥ md the
 * navigation links are shown inline via NavigationMenu; below md they collapse
 * into a hamburger button that opens a Sheet drawer. Tapping a drawer link
 * closes the drawer automatically through SheetClose.
 *
 * Returns:
 *     The header element for the page layout.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-heading text-lg font-semibold tracking-tight">
          AiDesign
        </a>

        {/* 桌面:水平導覽 (≥ md) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href} className="px-3 py-2">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

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
                  key={item.href}
                  render={
                    <a
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  }
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

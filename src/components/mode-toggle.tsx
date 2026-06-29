import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

/**
 * Light/dark theme toggle button.
 *
 * Reflects the currently applied theme via the document class and flips between
 * explicit "light" and "dark" on click. Icons cross-fade using Tailwind's dark
 * variant, so no extra state is needed to animate them.
 *
 * Returns:
 *     An icon button for toggling the theme.
 */
export function ModeToggle() {
  const { setTheme } = useTheme()

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="切換深色模式"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">切換深色模式</span>
    </Button>
  )
}

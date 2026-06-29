import { createContext, use, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const STORAGE_KEY = "aidesign-ui-theme"

const ThemeProviderContext = createContext<ThemeProviderState | null>(null)

/**
 * Resolve the effective ("light" | "dark") theme for a given setting.
 *
 * Args:
 *     theme: The selected theme, possibly "system".
 *
 * Returns:
 *     The concrete theme to apply, following the OS preference when "system".
 */
function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

/**
 * Provides theme state to the app and syncs it to the document and localStorage.
 *
 * Applies the resolved theme as a class on <html> so Tailwind's `.dark` variant
 * activates, persists the selection, and follows OS changes while in "system".
 *
 * Args:
 *     children: The subtree that can read/update the theme.
 *     defaultTheme: Theme used when nothing is stored yet.
 *
 * Returns:
 *     A context provider wrapping the children.
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? defaultTheme,
  )

  useEffect(() => {
    const root = window.document.documentElement
    const apply = () => {
      root.classList.remove("light", "dark")
      root.classList.add(resolveTheme(theme))
    }
    apply()

    // 在 system 模式下追蹤 OS 偏好變化
    if (theme !== "system") return
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    media.addEventListener("change", apply)
    return () => media.removeEventListener("change", apply)
  }, [theme])

  const setTheme = (next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next)
    setThemeState(next)
  }

  return (
    <ThemeProviderContext value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext>
  )
}

/**
 * Access the current theme and a setter.
 *
 * Returns:
 *     The theme context value.
 *
 * Raises:
 *     Error: If used outside a ThemeProvider.
 */
export function useTheme(): ThemeProviderState {
  const context = use(ThemeProviderContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

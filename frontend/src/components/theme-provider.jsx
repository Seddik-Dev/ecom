import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeProviderContext = createContext(null);

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme,
  );
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    resolveTheme(localStorage.getItem(storageKey) || defaultTheme),
  );

  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = resolveTheme(theme);

    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    setResolvedTheme(nextTheme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return undefined;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const nextTheme = getSystemTheme();
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(nextTheme);
      setResolvedTheme(nextTheme);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme) => {
        localStorage.setItem(storageKey, nextTheme);
        setThemeState(nextTheme);
      },
    }),
    [theme, resolvedTheme, storageKey],
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

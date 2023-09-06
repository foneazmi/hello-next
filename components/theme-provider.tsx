"use client";

import { useTheme } from "@/stores";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    useTheme.persist.rehydrate();
    setLoading(false);
  }, []);

  return !loading && <div data-theme={theme}>{children}</div>;
};

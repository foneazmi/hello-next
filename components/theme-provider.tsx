"use client";

import { useTheme } from "@/stores";
import { useBio } from "@/stores";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const { fetch } = useBio();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useTheme.persist.rehydrate();
    fetch();
    setLoading(false);
  }, []);

  return !loading && <div data-theme={theme}>{children}</div>;
};

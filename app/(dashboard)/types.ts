import { ReactNode } from "react";

export interface RouteItem {
  text: string;
  path: string;
  icon: ReactNode;
  external?: boolean;
}

export interface RootLayoutProps {
  children: ReactNode;
}

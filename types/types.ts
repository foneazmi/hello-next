import { ReactNode } from "react";

// Define types for portfolio items
export interface PortfolioItem {
  image?: string;
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
  text?: string;
}

// Define type for API response
export interface MeResponse {
  portfolio?: PortfolioItem[];
  // Add other properties from your API response if needed
}

export interface PortfolioItemProps {
  image?: string;
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
  text?: string;
}

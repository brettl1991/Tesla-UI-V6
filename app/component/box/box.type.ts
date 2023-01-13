import type { ReactNode } from "react";

export type boxType = {
  children?: ReactNode;
  display?: "flex" | "grid";
  gap?: boolean;
  vertical?: boolean;
};

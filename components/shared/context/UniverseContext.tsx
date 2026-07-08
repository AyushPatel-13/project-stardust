"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type UniverseState =
  | "running"
  | "freeze"
  | "explode"
  | "warp"
  | "intro";

type UniverseContextType = {
  state: UniverseState;
  setState: (state: UniverseState) => void;
};

const UniverseContext = createContext<
  UniverseContextType | undefined
>(undefined);

export function UniverseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] =
    useState<UniverseState>("running");

  return (
    <UniverseContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UniverseContext.Provider>
  );
}

export function useUniverse() {
  const context = useContext(UniverseContext);

  if (!context) {
    throw new Error(
      "useUniverse must be used inside UniverseProvider"
    );
  }

  return context;
}
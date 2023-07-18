import type { IEditorContext } from "../types";
import { createContext } from "react";

export const EditorContext = createContext<IEditorContext>(
  {} as IEditorContext
);

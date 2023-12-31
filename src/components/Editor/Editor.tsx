import { Header, Form, Navigator } from "./components";

import type { IEditorSections, IInputField, SectionsName } from "../../types";
import { Cancel } from "../Utils";

interface EditorProps {
  editorName: SectionsName;
  editorIndex: number;
  inputFields: IInputField[];
  isPreviewMode: boolean;
  editorSections: IEditorSections;
}

export function Editor({
  editorName,
  editorIndex,
  inputFields,
  isPreviewMode,
  editorSections,
}: EditorProps) {
  return (
    <div
      className={`${
        isPreviewMode ? "hidden" : "z-10 animate-fade"
      } mx-3 flex w-full max-w-lg flex-col justify-center
        gap-6 transition-opacity sm:mx-0 lg:flex`}
    >
      <div
        className={`${
          ["education", "experience"].includes(editorName)
            ? editorName === "education"
              ? "[grid-template-rows:auto_auto_1fr_auto]"
              : "[grid-template-rows:auto_1fr_auto_auto]"
            : "[grid-template-rows:auto_1fr_auto]"
        } relative grid h-[535px] gap-4 rounded-lg bg-main-color 
          p-6 font-kumbh-san lg:h-[555px] sm:p-8`}
      >
        <Header editorName={editorName} />
        <Form inputFields={inputFields} editorName={editorName} />
        <Navigator
          currentIndex={editorIndex}
          items={editorSections}
          inEditorSection
        />
      </div>
      <Cancel />
    </div>
  );
}

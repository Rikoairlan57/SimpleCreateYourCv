import { Button } from "./Button";
import { RiGithubLine } from "../../common";

export function Github() {
  return (
    <a
      className="flex justify-center"
      href="https://github.com/Rikoairlan57"
      rel="noreferrer"
      target="_blank"
      tabIndex={-1}
    >
      <Button className="normal-case" Icon={RiGithubLine} label="Rikoairlan" />
    </a>
  );
}

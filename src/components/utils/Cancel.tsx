import { Button } from "./Button";
import { Link } from "react-router-dom";

export function Cancel() {
  return (
    <Link to="/">
      <span className="flex justify-center">
        <Button className="normal-case bg-red-700" label="Cancel" />
      </span>
    </Link>
  );
}

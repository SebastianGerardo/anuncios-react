import { Link } from "react-router-dom";
// assets
import { ArrowCircleLeft } from "@/assets/svg/ArrowCircleLeft";

export const ReturnToHome = () => (
  <Link to="/" className="flex items-center gap-1 text-sm mb-2">
    <ArrowCircleLeft width="21" height="21" />
    Ir al inicio
  </Link>
);

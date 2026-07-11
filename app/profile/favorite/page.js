import FavoritePage from "../../../components/profile/FavoritePage";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
    <FavoritePage />
    </Suspense>
  
);
}

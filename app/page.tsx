import { ContentPages } from "@/content/pages";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${ContentPages[0].id}`);
}

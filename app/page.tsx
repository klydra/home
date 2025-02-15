import { contentPages } from "@/content/pages";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${contentPages[0].id}`);
}

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard"); // Redirect root to dashboard
}

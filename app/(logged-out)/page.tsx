import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Notepad
      </h1>
      <p> A free extended version of Notion </p>
      <div className="flex gap-3 items-center">
        <Button asChild>
          <Link href="/login">Sign in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}

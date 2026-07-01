import { redirect } from "next/navigation";

export default function BirthdayPage() {
  const now = new Date();

  const unlockDate = new Date("2026-07-08T00:00:00");

  if (now < unlockDate) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-6xl text-white">
        Happy Birthday Mahi ❤️
      </h1>
    </main>
  );
}
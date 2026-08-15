import { LogoutButton } from "@/components/auth/logout-button";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Welcome to Nexora
        </h1>

        <p className="mt-3 text-zinc-400">
          Your Nexora workspace is ready.
        </p>

        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { AIWorkspace } from "@/components/dashboard/ai-workspace";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <AIWorkspace />
    </DashboardShell>
  );
}
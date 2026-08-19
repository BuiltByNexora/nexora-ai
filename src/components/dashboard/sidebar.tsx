"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Bot,
  FileText,
  Home,
  Inbox,
  Plus,
  Settings,
  Users,
  Workflow,
  X,
  Zap,
  Sparkles,
} from "lucide-react";

const workspaceNavigation = [
  {
    label: "Nexora AI",
    href: "/dashboard",
    icon: Sparkles,
  },
  {
    label: "AI Employees",
    href: "/dashboard/agents",
    icon: Bot,
  },
  {
    label: "Automations",
    href: "/dashboard/automations",
    icon: Workflow,
  },
  {
    label: "Inbox",
    href: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    label: "Leads",
    href: "/dashboard/leads",
    icon: Users,
  },
];

const resourceNavigation = [
  {
    label: "Knowledge",
    href: "/dashboard/knowledge",
    icon: BookOpen,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Integrations",
    href: "/dashboard/integrations",
    icon: FileText,
  },
];

const recentChats = [
  {
    title: "UAE AI market research",
    href: "/dashboard/chat/uae-ai-market-research",
  },
  {
    title: "Marketing strategy",
    href: "/dashboard/chat/marketing-strategy",
  },
  {
    title: "Create a quotation",
    href: "/dashboard/chat/create-a-quotation",
  },
];

type SidebarProps = {
  mobileOpen?: boolean;
  onClose?: () => void;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/20">
      {children}
    </p>
  );
}

function NavigationLink({
  label,
  href,
  icon: Icon,
  pathname,
  onClick,
}: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  pathname: string;
  onClick?: () => void;
}) {
  const isActive =
    href === "/dashboard"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
        isActive
          ? "border border-blue-400/10 bg-blue-500/[0.09] text-white"
          : "text-white/40 hover:bg-white/[0.035] hover:text-white/75"
      }`}
    >
      <Icon
        className={`size-4 ${
          isActive
            ? "text-blue-300"
            : "text-white/30 group-hover:text-white/60"
        }`}
      />

      <span>{label}</span>

      {label === "AI Employees" && (
        <span className="ml-auto rounded-full border border-blue-400/15 bg-blue-500/10 px-1.5 py-0.5 text-[9px] font-medium text-blue-300">
          AI
        </span>
      )}
    </Link>
  );
}

export function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-white/[0.07] bg-[#05070d]/95 backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-[-120px] top-[-100px] size-72 rounded-full bg-blue-600/[0.08] blur-[100px]" />

        {/* Brand */}
        <div className="relative flex h-[72px] shrink-0 items-center border-b border-white/[0.06] px-5">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="group flex items-center gap-3"
          >
            <div className="grid size-9 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/[0.09] text-sm font-bold text-white shadow-[0_0_25px_rgba(37,99,235,0.12)] transition group-hover:border-blue-400/35">
              N
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight text-white">
                Nexora
              </p>

              <p className="text-[10px] uppercase tracking-[0.14em] text-white/20">
                Intelligent workspace
              </p>
            </div>
          </Link>

          {/* Mobile close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="ml-auto grid size-9 place-items-center rounded-lg text-white/35 transition hover:bg-white/[0.05] hover:text-white lg:hidden"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Navigation */}
        <div className="relative flex-1 overflow-y-auto px-4 py-6">
          {/* Workspace */}
          <div>
            <SectionLabel>Workspace</SectionLabel>

            <nav className="space-y-1">
              {workspaceNavigation.map((item) => (
                <NavigationLink
                  key={item.href}
                  {...item}
                  pathname={pathname}
                  onClick={onClose}
                />
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="mt-7">
            <SectionLabel>Resources</SectionLabel>

            <nav className="space-y-1">
              {resourceNavigation.map((item) => (
                <NavigationLink
                  key={item.href}
                  {...item}
                  pathname={pathname}
                  onClick={onClose}
                />
              ))}
            </nav>
          </div>

          {/* Recent conversations */}
          <div className="mt-7">
            <div className="mb-2 flex items-center justify-between px-3">
              <SectionLabel>Recent</SectionLabel>

              <span className="mb-2 text-[10px] text-white/15">
                Chats
              </span>
            </div>

            <div className="space-y-0.5">
              {recentChats.map((chat) => (
                <Link
                  key={chat.href}
                  href={chat.href}
                  onClick={onClose}
                  className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-white/35 transition hover:bg-white/[0.035] hover:text-white/70"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-white/15 transition group-hover:bg-blue-400/70" />

                  <span className="truncate">
                    {chat.title}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/dashboard/chats"
              onClick={onClose}
              className="mt-2 block px-3 text-[10px] text-white/20 transition hover:text-blue-300"
            >
              View all →
            </Link>
          </div>

          {/* Pro card */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-blue-400/10 bg-blue-500/[0.045] p-4">
            <div className="flex items-center gap-2 text-blue-300">
              <Zap className="size-3.5" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                Nexora Pro
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-white/30">
              Unlock more AI power, employees, and automation capacity.
            </p>

            <Link
              href="/pricing"
              onClick={onClose}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 transition hover:text-blue-200"
            >
              Explore plans
              <Plus className="size-3" />
            </Link>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="relative shrink-0 border-t border-white/[0.06] p-4">
          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/40 transition hover:bg-white/[0.035] hover:text-white/75"
          >
            <Settings className="size-4 text-white/30" />
            Settings
          </Link>

          <Link
            href="/"
            onClick={onClose}
            className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/40 transition hover:bg-white/[0.035] hover:text-white/75"
          >
            <Home className="size-4 text-white/30" />
            Back to website
          </Link>
        </div>
      </aside>
    </>
  );
}
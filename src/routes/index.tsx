import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import hr1jobsLogo from "../images/hr1jobs-logo.png.svg";
import {
  Search,
  Menu as MenuIcon,
  X,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ImageIcon,
  Maximize2,
  Briefcase,
  UserRound,
  FileText,
  Lock,
  Bell,
  Eye,
  Settings2,
  ChevronDown,
  Sparkles,
  BookOpen,
  Compass,
  ShieldCheck,
} from "lucide-react";
import {
  MODULES,
  FAQS,
  VERSION_ROWS,
  AUDIENCES,
  type GuideModule,
  type AudienceKey,
  type ImageStep,
} from "@/lib/guideline-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HƯỚNG DẪN CHO Nhà tuyển dụng & Ứng viên — Hướng dẫn thao tác nền tảng HR1Jobs" },
      {
        name: "description",
        content:
          "Trung tâm hướng dẫn HR1Jobs dành choNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN: đăng ký, đăng tuyển, quản lý hồ sơ, chọn mẫu CV và bảo mật tài khoản theo từng bước.",
      },
      { property: "og:title", content: "HƯỚNG DẪN CHO Nhà tuyển dụng & Ứng viên" },
      {
        property: "og:description",
        content:
          "Hướng dẫn thao tác HR1Jobs theo từng bước choNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN.",
      },
    ],
  }),
  component: GuidelineHub,
});

// ============= UI primitives =============

function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "employer" | "candidate" | "soft" | "warning";
}) {
  const styles: Record<string, string> = {
    default: "bg-secondary text-secondary-foreground",
    employer: "bg-employer/10 text-employer ring-1 ring-employer/20",
    candidate: "bg-candidate/10 text-candidate ring-1 ring-candidate/25",
    intro: "bg-navy/10 text-navy ring-1 ring-navy/20",
    soft: "bg-muted text-muted-foreground ring-1 ring-border",
    warning: "bg-brand/10 text-brand ring-1 ring-brand/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function AudienceBadge({ audience }: { audience: AudienceKey }) {
  return (
    <Badge variant={audience}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {AUDIENCES[audience].label}
    </Badge>
  );
}

// ============= Header =============

function Header({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 lg:px-8">
        <button
          onClick={onOpenSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground hover:bg-accent lg:hidden"
          aria-label="Mở mục lục"
        >
          <MenuIcon className="h-5 w-5" />
        </button>

        <a href="#top" className="flex items-center">
          <img src={hr1jobsLogo} alt="HR1Jobs" className="h-7 w-auto" />
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {[
            { label: "Trang chủ", href: "#start-here" },
            { label: "Giới thiệu", href: "#group-intro" },
            { label: "Nhà tuyển dụng", href: "#group-employer" },
            { label: "Ứng viên", href: "#group-candidate" },
            { label: "Thư viện", href: "#Thư viện" },
            { label: "Q&A", href: "#faq" },
          ].map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {it.label}
            </a>
          ))}
          <a
            href="https://hr1jobs.com/vi/employer/login"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Website
          </a>
        </nav>
      </div>
    </header>
  );
}

// ============= Hero =============

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--navy) 18%, transparent), transparent 45%), radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--brand) 14%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge variant="soft">
              <Sparkles className="h-3.5 w-3.5" />
              Official Documentation · v1.0
            </Badge>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl uppercase">
              HƯỚNG DẪN CHO <span style={{ color: "#E8102E" }}>NHÀ TUYỂN DỤNG</span> VÀ<br /><span style={{ color: "#E8102E" }}>ỨNG VIÊN</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trung tâm hướng dẫn thao tác dành choNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN trên nền tảng
              HR1Jobs. Tất cả quy trình được trình bày theo từng bước, có hình ảnh minh họa rõ
              ràng, giúp người dùng dễ dàng đăng ký, quản lý tài khoản, đăng tuyển, quản lý hồ
              sơ và theo dõi việc làm.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start-here"
                className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Bắt đầu xem hướng dẫn
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#group-employer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Xem Nhà tuyển dụng
              </a>
              <a
                href="#group-candidate"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Xem Ứng viên
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { value: "02", label: "Nhóm người dùng", icon: UserRound },
              { value: "12", label: "Quy trình hướng dẫn", icon: BookOpen },
              { value: "Step", label: "By-step bằng hình ảnh", icon: ImageIcon },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy/5 text-navy">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-2xl font-black tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= Quick Start (Command Center) =============

function QuickStart() {
  const cards = [
    {
      title: "Tôi là Nhà tuyển dụng mới",
      desc: "Xem hướng dẫn đăng ký, đăng nhập và đăng tuyển.",
      cta: "Bắt đầu với NTD",
      href: "#m-01-employer-register",
      icon: Briefcase,
      tone: "employer" as AudienceKey,
    },
    {
      title: "Tôi muốn đăng tin tuyển dụng",
      desc: "Xem từng bước tạo và quản lý tin đăng.",
      cta: "Xem quy trình đăng tuyển",
      href: "#m-04-employer-post-job",
      icon: FileText,
      tone: "employer" as AudienceKey,
    },
    {
      title: "Tôi là Ứng viên mới",
      desc: "Xem cách đăng ký tài khoản, quản lý hồ sơ và ứng tuyển.",
      cta: "Bắt đầu với Ứng viên",
      href: "#m-01-candidate-register",
      icon: UserRound,
      tone: "candidate" as AudienceKey,
    },
    {
      title: "Tôi muốn đổi mật khẩu / quản lý tài khoản",
      desc: "Xem hướng dẫn bảo mật và cập nhật thông tin tài khoản.",
      cta: "Xem tài khoản",
      href: "#m-09-candidate-password",
      icon: Lock,
      tone: "candidate" as AudienceKey,
    },
  ];

  return (
    <section id="start-here" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-8 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge variant="soft">
              <Compass className="h-3.5 w-3.5" /> Command Center
            </Badge>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Bạn muốn bắt đầu từ đâu?
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Chọn một lối tắt phù hợp với vai trò và mục tiêu của bạn — chúng tôi sẽ dẫn bạn
              đến đúng module hướng dẫn.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    c.tone === "employer"
                      ? "bg-employer/10 text-employer"
                      : "bg-candidate/10 text-candidate"
                  }`}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <AudienceBadge audience={c.tone} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-2.5 transition-all">
                {c.cta}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= Sidebar (sticky index) =============

function SidebarIndex({
  open,
  onClose,
  activeId,
  onClickId,
}: {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
  onClickId: (id: string) => void;
}) {
  const introModules = MODULES.filter((m) => m.audience === "intro");
  const employerModules = MODULES.filter((m) => m.audience === "employer");
  const candidateModules = MODULES.filter((m) => m.audience === "candidate");

  const Body = (
    <nav className="flex h-full flex-col gap-6 overflow-y-auto p-5">
      <div>
        <div className="flex items-center gap-2 px-2 pb-2">
          <div className="h-2 w-2 rounded-full bg-navy" />
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Giới thiệu
          </span>
        </div>
        <ul className="space-y-0.5">
          {introModules.map((m) => (
            <SidebarLink key={m.id} mod={m} active={activeId === m.id} onClick={() => { onClickId(m.id); onClose(); }} />
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 px-2 pb-2">
          <div className="h-2 w-2 rounded-full bg-employer" />
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Nhà tuyển dụng
          </span>
        </div>
        <ul className="space-y-0.5">
          {employerModules.map((m) => (
            <SidebarLink key={m.id} mod={m} active={activeId === m.id} onClick={() => { onClickId(m.id); onClose(); }} />
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 px-2 pb-2">
          <div className="h-2 w-2 rounded-full bg-candidate" />
          <span className="text-xs font-bold uppercase tracking-wider text-foreground">
            Ứng viên
          </span>
        </div>
        <ul className="space-y-0.5">
          {candidateModules.map((m) => (
            <SidebarLink key={m.id} mod={m} active={activeId === m.id} onClick={() => { onClickId(m.id); onClose(); }} />
          ))}
        </ul>
      </div>

      <div className="mt-auto rounded-xl border border-border bg-surface-strong p-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
          <ShieldCheck className="h-4 w-4 text-navy" />
          Official HR1Jobs Docs
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          Tài liệu sẽ được cập nhật song song với các phiên bản phát hành của HR1Jobs.
        </p>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-border bg-surface lg:block">
        {Body}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
          <div className="absolute inset-y-0 left-0 w-[300px] max-w-[85vw] border-r border-border bg-background shadow-elegant">
            <div className="flex h-14 items-center justify-between border-b border-border px-4">
              <span className="text-sm font-bold">Mục lục</span>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-md hover:bg-accent"
                aria-label="Đóng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="h-[calc(100%-3.5rem)]">{Body}</div>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarLink({
  mod,
  active,
  onClick,
}: {
  mod: GuideModule;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <a
        href={`#${mod.id}`}
        onClick={onClick}
        className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors ${
          active
            ? "bg-navy text-navy-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-foreground"
        }`}
      >
        {/* số module ẩn: {mod.moduleNumber} */}
        <span
          className={`grid h-2 w-2 shrink-0 rounded-full ${
            active ? "bg-navy-foreground/60" : "bg-muted-foreground/40"
          }`}
        />
        <span className="truncate font-medium">{mod.title}</span>
      </a>
    </li>
  );
}

// ============= Search + Filter bar =============

function SearchFilterBar({
  query,
  setQuery,
  filter,
  setFilter,
  total,
}: {
  query: string;
  setQuery: (s: string) => void;
  filter: "all" | AudienceKey;
  setFilter: (f: "all" | AudienceKey) => void;
  total: number;
}) {
  const tabs: { key: "all" | AudienceKey; label: string }[] = [
    { key: "all", label: "Tất cả" },
    { key: "intro", label: "Giới thiệu" },
    { key: "employer", label: "Nhà tuyển dụng" },
    { key: "candidate", label: "Ứng viên" },
  ];
  return (
    <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-border bg-background/90 px-4 py-4 backdrop-blur lg:-mx-8 lg:px-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between">
        <div className="relative min-w-0">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Tìm: "đăng tuyển", "đổi mật khẩu", "chọn CV"...'
            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {/* {total} module — ẩn khỏi UI, chỉ dùng nội bộ */}
          <div className="flex rounded-lg border border-border bg-card p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setFilter(t.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === t.key
                    ? "bg-navy text-navy-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= Step Thư viện & Lightbox =============

function StepCard({
  step,
  onZoom,
}: {
  step: ImageStep;
  onZoom: (s: ImageStep) => void;
}) {
  const hasImage = !!step.imageUrl;
  return (
    <div className="grid gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft sm:grid-cols-[1fr_1.4fr]">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy text-xs font-black text-navy-foreground">
            {String(step.stepNumber).padStart(2, "0")}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Bước {step.stepNumber}
          </span>
        </div>
        <h4 className="mt-3 text-base font-bold text-foreground">{step.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => hasImage && onZoom(step)}
        className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-strong text-left"
      >
        {hasImage ? (
          <>
            <img
              src={step.imageUrl}
              alt={step.caption}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="line-clamp-1 text-xs font-medium text-background">
                  {step.caption}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-background/95 px-2 py-1 text-[11px] font-semibold text-foreground">
                  <Maximize2 className="h-3 w-3" />
                  Xem ảnh lớn
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden text-center">
            {/* Gradient background */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #fff5f5 0%, #ffeaea 40%, #fff0f0 70%, #fdf4f4 100%)",
              }}
            />
            {/* Subtle grid pattern */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, #D0202A22 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            {/* Decorative blurred circles */}
            <div aria-hidden className="absolute -left-6 -top-6 h-24 w-24 rounded-full opacity-20" style={{ background: "#D0202A", filter: "blur(24px)" }} />
            <div aria-hidden className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full opacity-15" style={{ background: "#D0202A", filter: "blur(20px)" }} />
            {/* Step number badge */}
            <div
              className="relative z-10 grid h-10 w-10 place-items-center rounded-full text-sm font-black text-white shadow-md"
              style={{ background: "#D0202A" }}
            >
              {String(step.stepNumber).padStart(2, "0")}
            </div>
            {/* Caption */}
            <div className="relative z-10 px-4">
              <p className="text-xs font-semibold text-foreground/80 line-clamp-2">{step.caption}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Ảnh hướng dẫn sẽ được cập nhật</p>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

function Lightbox({ step, onClose }: { step: ImageStep | null; onClose: () => void }) {
  useEffect(() => {
    if (!step) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, onClose]);

  if (!step) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background text-foreground shadow-elegant hover:bg-accent"
        aria-label="Đóng"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-card">
        <img src={step.imageUrl} alt={step.caption} className="max-h-[80vh] w-full object-contain" />
        <div className="border-t border-border p-4 text-sm font-medium text-foreground">
          {step.caption}
        </div>
      </div>
    </div>
  );
}

// ============= Guide Section =============

function GuideSection({
  mod,
  onZoom,
  nextMod,
}: {
  mod: GuideModule;
  onZoom: (s: ImageStep) => void;
  nextMod?: GuideModule;
}) {
  const [openIssue, setOpenIssue] = useState<number | null>(null);
  return (
    <section id={mod.id} className="scroll-mt-36 border-t border-border py-12 first:border-t-0 lg:py-16">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <AudienceBadge audience={mod.audience} />
            {/* Badge module ẩn: Module {mod.moduleNumber} */}
          </div>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            {mod.title}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {mod.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Compass className="h-4 w-4 text-navy" /> Khi nào dùng
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.whenToUse}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-navy" /> Checklist thao tác
          </div>
          <ol className="mt-3 space-y-2">
            {mod.checklist.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-secondary text-[11px] font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Vertical step timeline */}
      <div className="mt-8 space-y-4">
        {mod.imageSteps.map((s) => (
          <StepCard key={s.stepNumber} step={s} onZoom={onZoom} />
        ))}
      </div>

      {mod.note && (
        <div className="mt-6 flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">Ghi chú quan trọng</div>
            <p className="mt-0.5 text-sm text-muted-foreground">{mod.note}</p>
          </div>
        </div>
      )}

      {mod.commonIssues && mod.commonIssues.length > 0 && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-5 py-3 text-sm font-bold text-foreground">
            Lỗi thường gặp
          </div>
          <ul className="divide-y divide-border">
            {mod.commonIssues.map((it, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setOpenIssue(openIssue === idx ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-3 text-left text-sm font-semibold text-foreground hover:bg-accent"
                >
                  <span>{it.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform ${
                      openIssue === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIssue === idx && (
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {it.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {nextMod && (
        <div className="mt-8 flex justify-end">
          <a
            href={`#${nextMod.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Xem mục tiếp theo: {nextMod.title}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </section>
  );
}

// ============= Gallery =============

function GallerySection() {
  return (
    <section id="gallery" className="border-t border-border bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <Badge variant="soft">
          <ImageIcon className="h-3.5 w-3.5" /> Gallery
        </Badge>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Thư viện ảnh hướng dẫn
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Tất cả ảnh hướng dẫn được tổ chức theo module. Khi ảnh được cập nhật, hệ thống sẽ tự
          động thay thế placeholder dưới đây.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MODULES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="group rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-strong">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, color-mix(in oklab, var(--navy) 6%, transparent) 25%, transparent 25%, transparent 50%, color-mix(in oklab, var(--navy) 6%, transparent) 50%, color-mix(in oklab, var(--navy) 6%, transparent) 75%, transparent 75%)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                  <ImageIcon className="h-7 w-7" />
                </div>
                <div className="absolute left-3 top-3">
                  <AudienceBadge audience={m.audience} />
                </div>
                <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-navy text-xs font-black text-navy-foreground">
                  {m.moduleNumber}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-foreground">{m.title}</div>
                  <div className="text-[11px] text-muted-foreground">
                    {m.imageSteps.length} bước
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= FAQ =============

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-4 lg:px-8">
        <Badge variant="soft">
          <Settings2 className="h-3.5 w-3.5" /> FAQ
        </Badge>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Câu hỏi thường gặp
        </h2>
        <p className="mt-2 text-muted-foreground">
          Những thắc mắc phổ biến nhất từNHÀ TUYỂN DỤNG VÀ ỨNG VIÊN.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
          <ul className="divide-y divide-border">
            {FAQS.map((f, i) => (
              <li key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-accent"
                >
                  <span className="text-sm font-bold text-foreground sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ============= Version Control =============

function VersionSection() {
  return (
    <section id="version" className="border-t border-border bg-surface py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge variant="soft">
              <ShieldCheck className="h-3.5 w-3.5" /> Version Control
            </Badge>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Trạng thái cập nhật module
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Theo dõi tiến độ cập nhật ảnh HƯỚNG DẪN CHO từng module.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-semibold text-muted-foreground shadow-soft">
            Phiên bản tài liệu: <span className="text-foreground">v1.0 · 27/06/2026</span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-surface-strong text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-bold">Nhóm</th>
                  <th className="px-5 py-3 font-bold">Module</th>
                  <th className="px-5 py-3 font-bold">Vai trò</th>
                  <th className="px-5 py-3 font-bold">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {VERSION_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-accent/50">
                    <td className="px-5 py-3.5">
                      <Badge
                        variant={
                          row.group === "Nhà tuyển dụng" ? "employer" : "candidate"
                        }
                      >
                        {row.group}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 font-semibold text-foreground">
                      {row.module}
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.role}</td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= Footer =============

function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-navy-foreground/15 text-sm font-black">
              H1
            </div>
            <div>
              <div className="text-sm font-bold">HR1Jobs Guideline Hub</div>
              <div className="text-[11px] uppercase tracking-wider text-navy-foreground/70">
                Official Documentation
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/75">
            Trung tâm hướng dẫn thao tác chính thức cho người dùng HR1Jobs. Mọi quy trình được
            chuẩn hóa, kèm hình ảnh minh họa từng bước.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-navy-foreground/70">
            Nhóm hướng dẫn
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#group-employer" className="hover:text-navy-foreground/100 text-navy-foreground/85">
                Nhà tuyển dụng (5 module)
              </a>
            </li>
            <li>
              <a href="#group-candidate" className="hover:text-navy-foreground/100 text-navy-foreground/85">
                Ứng viên (9 module)
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-navy-foreground/100 text-navy-foreground/85">
                FAQ
              </a>
            </li>
            <li>
              <a href="#version" className="hover:text-navy-foreground/100 text-navy-foreground/85">
                Version Control
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-navy-foreground/70">
            Phiên bản
          </div>
          <div className="mt-3 rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-4 text-sm">
            <div className="font-semibold">HR1Jobs Guideline v1.0</div>
            <div className="mt-1 text-navy-foreground/75">Cập nhật: 27/06/2026</div>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-[1400px] px-4 py-5 text-xs text-navy-foreground/60 lg:px-8">
          © {new Date().getFullYear()} HR1Jobs. Tài liệu nội bộ — sử dụng cho mục đích hướng dẫn người dùng.
        </div>
      </div>
    </footer>
  );
}

// ============= Intro Section (dạng info card, không phải bước) =============

const INTRO_MODULE_CONFIG: Record<string, {
  hero: { headline: string; sub: string; desc: string };
  features: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string; href: string }[];
  cta?: { label: string; href: string; secondary?: { label: string; href: string } };
}> = {
  "m-01-intro-platform": {
    hero: {
      headline: "Thu hút và tuyển dụng nhân tài",
      sub: "HR1Jobs — nền tảng tuyển dụng trực tuyến hàng đầu Việt Nam",
      desc: "HR1Jobs là cầu nối giữa Ứng viên và Nhà tuyển dụng, được coi là mạng lưới việc làm với công cụ thông minh để tìm kiếm ứng viên, dữ liệu hồ sơ cho phép Nhà tuyển dụng tiếp cận nhanh chóng các ứng viên phù hợp và dễ dàng truy cập vào các hồ sơ khác.",
    },
    features: [
      { icon: Briefcase, title: "Đăng tuyển dụng", desc: "Thu hút ứng viên tiềm năng. Việc làm đăng tuyển sẽ được hiển thị trực tuyến trên HR1Jobs trong vòng 30 ngày.", href: "https://hr1jobs.com/vi/employer/hr/job" },
      { icon: FileText, title: "Tìm hồ sơ ứng viên", desc: "Chủ động tìm kiếm ứng viên trong hàng trăm ngàn hồ sơ chất lượng được cập nhật đầy đủ.", href: "https://hr1jobs.com/vi/employer/search-resume" },
      { icon: Eye, title: "Quảng bá thương hiệu", desc: "Tạo ấn tượng lâu dài cho ứng viên tiềm năng và liên kết trực tiếp đến thông tin tuyển dụng qua logo/banner.", href: "https://hr1jobs.com/vi/employer/services" },
      { icon: Settings2, title: "Các dịch vụ hỗ trợ khác", desc: "Giải pháp tuyển dụng tối ưu hóa, xây dựng giải pháp chiến lược tuyển dụng để thu hút và tiếp cận ứng viên tiềm năng.", href: "https://hr1jobs.com/vi/employer/services" },
    ],
    cta: {
      label: "Đăng tuyển dụng",
      href: "https://hr1jobs.com/vi/employer/hr/job",
      secondary: { label: "Tìm kiếm ứng viên", href: "https://hr1jobs.com/vi/employer/search-resume" },
    },
  },
  "m-02-intro-features": {
    hero: {
      headline: "Sản phẩm và dịch vụ HR1Jobs",
      sub: "Đầy đủ công cụ cho Nhà tuyển dụng & Ứng viên",
      desc: "Từ đăng tin tuyển dụng, tìm kiếm hồ sơ đến quản lý ứng tuyển và phát triển sự nghiệp — HR1Jobs cung cấp hệ sinh thái tuyển dụng toàn diện.",
    },
    features: [
      { icon: UserRound, title: "Tạo hồ sơ & CV mẫu", desc: "Ứng viên tạo hồ sơ chuyên nghiệp, chọn CV mẫu đẹp và ứng tuyển chỉ trong vài bước — hoàn toàn miễn phí.", href: "https://hr1jobs.com/vi/cv-mau" },
      { icon: Bell, title: "Job Alert thông minh", desc: "Nhận thông báo tự động khi có việc làm mới phù hợp với hồ sơ. Trợ lý ảo JOJO gợi ý công việc cá nhân hóa.", href: "https://hr1jobs.com/vi/my/resume" },
      { icon: BookOpen, title: "TestCenter & Trắc nghiệm", desc: "Khám phá điểm mạnh bản thân qua bài trắc nghiệm tính cách, giúp định hướng nghề nghiệp phù hợp.", href: "https://hr1jobs.com/vi/testcenter" },
      { icon: Sparkles, title: "Cẩm nang HR1Jobs", desc: "Thư viện bài viết chuyên sâu về tuyển dụng, lương thưởng, phát triển sự nghiệp và xu hướng thị trường lao động.", href: "https://hr1jobs.com/vi/news" },
    ],
    cta: {
      label: "Xem tất cả dịch vụ",
      href: "https://hr1jobs.com/vi/employer/services",
      secondary: { label: "Tìm việc ngay", href: "https://hr1jobs.com/tim-viec" },
    },
  },
};

function IntroSection({ mod, nextMod }: { mod: GuideModule; nextMod?: GuideModule }) {
  const cfg = INTRO_MODULE_CONFIG[mod.id];

  if (!cfg) return null;

  return (
    <section id={mod.id} className="scroll-mt-36 border-t border-border py-12 first:border-t-0 lg:py-16">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2">
        <AudienceBadge audience={mod.audience} />
        {/* Badge module ẩn: Module {mod.moduleNumber} */}
      </div>

      {/* Hero block */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-7 shadow-soft lg:p-10">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {cfg.hero.headline}
          </h3>
          <p className="mt-2 text-sm font-semibold text-navy">{cfg.hero.sub}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {cfg.hero.desc}
          </p>
          {cfg.cta && (
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={cfg.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                style={{ background: "#D0202A" }}
              >
                {cfg.cta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              {cfg.cta.secondary && (
                <a
                  href={cfg.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  {cfg.cta.secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Feature grid */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cfg.features.map((f, i) => (
          <a
            key={i}
            href={f.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant hover:border-foreground/20"
          >
            <div
              className="grid h-12 w-12 place-items-center rounded-xl"
              style={{ background: "color-mix(in oklab, #D0202A 10%, transparent)" }}
            >
              <f.icon className="h-5 w-5" style={{ color: "#D0202A" }} />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">{f.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
            <div className="mt-auto inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "#D0202A" }}>
              Xem thêm <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </a>
        ))}
      </div>

      {/* Checklist & When to use */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <Compass className="h-4 w-4 text-navy" /> Khi nào dùng
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.whenToUse}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-navy" /> Điểm nổi bật
          </div>
          <ul className="mt-3 space-y-2">
            {mod.checklist.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white text-[10px] font-bold" style={{ background: "#D0202A" }}>
                  ✓
                </span>
                <span className="text-muted-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Note */}
      {mod.note && (
        <div className="mt-5 flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand/15 text-brand">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-foreground">Ghi chú</div>
            <p className="mt-0.5 text-sm text-muted-foreground">{mod.note}</p>
          </div>
        </div>
      )}

      {/* FAQ */}
      {mod.commonIssues && mod.commonIssues.length > 0 && (
        <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border px-5 py-3 text-sm font-bold text-foreground">Câu hỏi thường gặp</div>
          <ul className="divide-y divide-border">
            {mod.commonIssues.map((it, idx) => (
              <li key={idx} className="px-5 py-4">
                <div className="text-sm font-semibold text-foreground">{it.question}</div>
                <p className="mt-1 text-sm text-muted-foreground">{it.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next module */}
      {nextMod && (
        <div className="mt-8 flex justify-end">
          <a
            href={`#${nextMod.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Xem mục tiếp theo: {nextMod.title}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </section>
  );
}

// ============= Group Header inline =============

function GroupAnchor({ id, label, icon: Icon, count, tone }: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
  tone: AudienceKey;
}) {
  const colorMap: Record<AudienceKey, string> = {
    intro: "bg-navy/10 text-navy",
    employer: "bg-employer/10 text-employer",
    candidate: "bg-candidate/10 text-candidate",
  };
  return (
    <div id={id} className="scroll-mt-36 pt-4">
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className={`grid h-12 w-12 place-items-center rounded-xl ${colorMap[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Nhóm hướng dẫn
          </div>
          <div className="text-xl font-black tracking-tight text-foreground">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============= Main =============

function GuidelineHub() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | AudienceKey>("all");
  const [zoomStep, setZoomStep] = useState<ImageStep | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MODULES.filter((m) => {
      if (filter !== "all" && m.audience !== filter) return false;
      if (!q) return true;
      return (
        m.title.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q) ||
        m.checklist.some((c) => c.toLowerCase().includes(q)) ||
        m.moduleNumber.includes(q)
      );
    });
  }, [query, filter]);

  // Scroll spy — dùng IntersectionObserver với vùng trigger ở đầu viewport
  useEffect(() => {
    const ids = MODULES.map((m) => m.id);
    // activeMap lưu trạng thái từng section
    const activeMap = new Map<string, boolean>();

    const pick = () => {
      // Lấy section đầu tiên (theo thứ tự DOM) đang intersecting
      for (const id of ids) {
        if (activeMap.get(id)) {
          setActiveId(id);
          return;
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => activeMap.set(e.target.id, e.isIntersecting));
        pick();
      },
      {
        // Vùng trigger: từ header (72px) đến 60% viewport — section nào lọt vào vùng này là đang "active"
        rootMargin: "-72px 0px -40% 0px",
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const employerCount = MODULES.filter((m) => m.audience === "employer").length;
  const candidateCount = MODULES.filter((m) => m.audience === "candidate").length;
  const introCount = MODULES.filter((m) => m.audience === "intro").length;

  // Build sections list with group anchors interleaved
  const introList = filtered.filter((m) => m.audience === "intro");
  const employerList = filtered.filter((m) => m.audience === "employer");
  const candidateList = filtered.filter((m) => m.audience === "candidate");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenSidebar={() => setSidebarOpen(true)} />
      <Hero />
      <QuickStart />

      <div className="mx-auto flex max-w-[1400px] gap-0 lg:gap-8 lg:px-8">
        <SidebarIndex
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeId={activeId}
          onClickId={(id) => setActiveId(id)}
        />

        <main className="min-w-0 flex-1 px-4 pb-12 lg:px-0">
          <SearchFilterBar
            query={query}
            setQuery={setQuery}
            filter={filter}
            setFilter={setFilter}
            total={filtered.length}
          />

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-secondary text-muted-foreground">
                <Search className="h-5 w-5" />
              </div>
              <div className="mt-4 text-base font-bold text-foreground">
                Không tìm thấy module phù hợp
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Thử từ khóa khác hoặc bỏ bộ lọc đang áp dụng.
              </div>
            </div>
          )}

          {(filter === "all" || filter === "intro") && introList.length > 0 && (
            <>
              <GroupAnchor
                id="group-intro"
                label="Giới thiệu"
                icon={BookOpen}
                count={introCount}
                tone="intro"
              />
              {introList.map((m, idx) => {
                const next = introList[idx + 1] ?? (filter === "all" ? employerList[0] : undefined);
                return (
                  <IntroSection key={m.id} mod={m} nextMod={next} />
                );
              })}
            </>
          )}

          {(filter === "all" || filter === "employer") && employerList.length > 0 && (
            <>
              <GroupAnchor
                id="group-employer"
                label="Nhà tuyển dụng"
                icon={Briefcase}
                count={employerCount}
                tone="employer"
              />
              {employerList.map((m, idx) => {
                const next =
                  employerList[idx + 1] ??
                  (filter === "all" ? candidateList[0] : undefined);
                return (
                  <GuideSection
                    key={m.id}
                    mod={m}
                    onZoom={setZoomStep}
                    nextMod={next}
                  />
                );
              })}
            </>
          )}

          {(filter === "all" || filter === "candidate") && candidateList.length > 0 && (
            <>
              <GroupAnchor
                id="group-candidate"
                label="Ứng viên"
                icon={UserRound}
                count={candidateCount}
                tone="candidate"
              />
              {candidateList.map((m, idx) => (
                <GuideSection
                  key={m.id}
                  mod={m}
                  onZoom={setZoomStep}
                  nextMod={candidateList[idx + 1]}
                />
              ))}
            </>
          )}

          {/* Inline icons usage so tree-shake keeps imports semantic */}
          <span className="hidden">
            <Bell />
            <Eye />
          </span>
        </main>
      </div>

      <GallerySection />
      <FAQSection />
      <VersionSection />
      <Footer />

      <Lightbox step={zoomStep} onClose={() => setZoomStep(null)} />
    </div>
  );
}

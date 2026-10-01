import type { ReactNode } from "react";
import { CarFront, Check, Lock } from "lucide-react";

import { AppIcon } from "@/components/apps/app-icon";
import type { AppEntry } from "@/lib/apps";

/**
 * Illustrations for the app tiles. These are abstract drawings of what each
 * app does, not screenshots. All of it is decorative, so every root is
 * aria-hidden and the meaning is carried by the copy next to it.
 */

type Tone = "light" | "dark";

function Bar({ w, tone }: { w: string; tone: Tone }) {
  return (
    <span
      style={{ width: w }}
      className={`block h-2 rounded-full ${tone === "dark" ? "bg-white/15" : "bg-black/10"}`}
    />
  );
}

function CarmexioArt({ tone }: { tone: Tone }) {
  const dark = tone === "dark";
  return (
    <div
      className={`mx-auto w-[min(100%,300px)] rounded-[44px] p-2.5 ${
        dark ? "bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]" : "bg-black/5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className={`overflow-hidden rounded-[34px] ${dark ? "bg-[#101113]" : "bg-white"}`}>
        <div className="grid h-40 place-items-center bg-[linear-gradient(160deg,#12b76a,#04603a)] text-white">
          <CarFront size={76} strokeWidth={1.1} />
        </div>
        <div className="grid gap-4 p-5">
          <div className="grid gap-2">
            <Bar w="72%" tone={tone} />
            <Bar w="44%" tone={tone} />
          </div>
          <div className={`flex items-center gap-4 rounded-2xl p-4 ${dark ? "bg-white/[0.06]" : "bg-mist"}`}>
            <svg viewBox="0 0 48 48" className="size-14 shrink-0 -rotate-90">
              <circle cx="24" cy="24" r="20" fill="none" strokeWidth="5" className={dark ? "stroke-white/10" : "stroke-black/10"} />
              <circle cx="24" cy="24" r="20" fill="none" strokeWidth="5" strokeLinecap="round" stroke="#12b76a" strokeDasharray="126" strokeDashoffset="18" />
            </svg>
            <div className="grid gap-1">
              <span className={`text-[0.6875rem] font-medium ${dark ? "text-white/60" : "text-mute"}`}>Inspection report</span>
              <span className={`text-[0.9375rem] font-semibold tracking-[-0.01em] ${dark ? "text-white" : "text-ink"}`}>Overall score</span>
            </div>
          </div>
          <ul className="grid gap-2.5 pb-2">
            {["Checklist", "Body condition"].map((row) => (
              <li key={row} className={`flex items-center gap-3 text-[0.8125rem] ${dark ? "text-white/75" : "text-graphite"}`}>
                <span className="grid size-5 place-items-center rounded-full bg-[#12b76a] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {row}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Pdf4youArt({ tone }: { tone: Tone }) {
  const dark = tone === "dark";
  const sheet = dark ? "bg-[#1b1c1f] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" : "bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_24px_48px_-24px_rgba(0,0,0,0.3)]";
  return (
    <div className="mx-auto w-[min(100%,340px)]">
      <div className="relative mx-auto aspect-[4/5] w-[68%]">
        <span className={`absolute inset-0 -rotate-[9deg] rounded-2xl ${sheet} opacity-60`} />
        <span className={`absolute inset-0 rotate-[6deg] rounded-2xl ${sheet} opacity-80`} />
        <div className={`absolute inset-0 flex flex-col gap-3 rounded-2xl p-6 ${sheet}`}>
          <span className="w-fit rounded-md bg-[#7c4dff] px-2 py-1 text-[0.6875rem] font-bold tracking-wide text-white">PDF</span>
          <Bar w="88%" tone={tone} />
          <Bar w="96%" tone={tone} />
          <Bar w="64%" tone={tone} />
          <Bar w="90%" tone={tone} />
          <Bar w="52%" tone={tone} />
          <svg viewBox="0 0 120 40" className="mt-auto w-[62%] text-[#7c4dff]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M4 30c10-22 18-26 20-14s6 16 14 2 12-12 14-2 8 10 16-2 14-8 18 2 10 6 20-4" />
          </svg>
          <span className={`h-px w-[70%] ${dark ? "bg-white/20" : "bg-black/15"}`} />
        </div>
        <span className="absolute -top-3 -right-5 grid size-12 place-items-center rounded-full bg-ink text-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] ring-4 ring-white/90">
          <Lock size={20} strokeWidth={2} />
        </span>
      </div>
      <ul className="mt-9 flex flex-wrap justify-center gap-2">
        {["Convert", "Protect", "Unlock", "Watermark", "Sign"].map((tool) => (
          <li
            key={tool}
            className={`rounded-full px-3.5 py-1.5 text-[0.8125rem] font-medium ${
              dark ? "bg-white/10 text-white/85" : "bg-white text-graphite shadow-[0_0_0_1px_rgba(0,0,0,0.07)]"
            }`}
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

const diskRows = [
  { label: "App caches", w: "82%", color: "#5b8cff" },
  { label: "Leftover app data", w: "56%", color: "#8b7bff" },
  { label: "Large files", w: "68%", color: "#3ddbd9" },
  { label: "Android NDK versions", w: "34%", color: "#ffb340" },
] as const;

function DiskCleanArt({ tone }: { tone: Tone }) {
  const dark = tone === "dark";
  return (
    <div
      className={`mx-auto w-[min(100%,440px)] overflow-hidden rounded-2xl ${
        dark ? "bg-white/[0.07] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" : "bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_30px_60px_-30px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div className={`flex items-center gap-1.5 px-4 py-3 ${dark ? "border-b border-white/10" : "border-b border-hairline"}`}>
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex items-center gap-6 p-6">
        <svg viewBox="0 0 64 64" className="size-24 shrink-0 -rotate-90 sm:size-28">
          <circle cx="32" cy="32" r="26" fill="none" strokeWidth="9" className={dark ? "stroke-white/10" : "stroke-black/[0.07]"} />
          <circle cx="32" cy="32" r="26" fill="none" strokeWidth="9" stroke="#5b8cff" strokeDasharray="163.4" strokeDashoffset="96" />
          <circle cx="32" cy="32" r="26" fill="none" strokeWidth="9" stroke="#8b7bff" strokeDasharray="163.4" strokeDashoffset="128" transform="rotate(148 32 32)" />
          <circle cx="32" cy="32" r="26" fill="none" strokeWidth="9" stroke="#3ddbd9" strokeDasharray="163.4" strokeDashoffset="140" transform="rotate(226 32 32)" />
        </svg>
        <ul className="grid min-w-0 flex-1 gap-3.5">
          {diskRows.map((row) => (
            <li key={row.label} className="grid gap-1.5">
              <span className={`truncate text-[0.75rem] font-medium ${dark ? "text-white/75" : "text-graphite"}`}>{row.label}</span>
              <span className={`block h-1.5 rounded-full ${dark ? "bg-white/10" : "bg-black/[0.07]"}`}>
                <span className="block h-full rounded-full" style={{ width: row.w, background: row.color }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const days = ["M", "T", "W", "T", "F", "S", "S"] as const;
// 1 = scheduled shift, 2 = a second location, 0 = off
const roster = [
  [1, 1, 0, 1, 1, 0, 0],
  [2, 0, 2, 2, 0, 1, 0],
  [0, 1, 1, 0, 2, 2, 0],
  [1, 2, 0, 1, 1, 0, 0],
] as const;
const attendance = [
  { label: "Present", color: "#12b76a" },
  { label: "Absent", color: "#f04438" },
  { label: "Holiday", color: "#5b8cff" },
  { label: "Leave", color: "#ffb340" },
] as const;

function CrewZeitplanArt({ tone }: { tone: Tone }) {
  const dark = tone === "dark";
  const off = dark ? "bg-white/[0.06]" : "bg-black/[0.05]";
  return (
    <div
      className={`mx-auto w-[min(100%,440px)] rounded-3xl p-5 sm:p-6 ${
        dark ? "bg-white/[0.07] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]" : "bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_30px_60px_-30px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div className="grid grid-cols-[28px_repeat(7,minmax(0,1fr))] items-center gap-1.5 sm:gap-2">
        <span />
        {days.map((day, index) => (
          <span key={index} className={`text-center text-[0.6875rem] font-semibold ${dark ? "text-white/50" : "text-mute"}`}>
            {day}
          </span>
        ))}
        {roster.map((row, rowIndex) => (
          <RosterRow key={rowIndex} dark={dark}>
            {row.map((cell, cellIndex) => (
              <span
                key={cellIndex}
                className={`h-8 rounded-lg sm:h-9 ${cell === 1 ? "bg-[#2f8f5b]" : cell === 2 ? "bg-[#a9d8bc]" : off}`}
              />
            ))}
          </RosterRow>
        ))}
      </div>
      <ul className={`mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t pt-4 text-[0.75rem] font-medium ${dark ? "border-white/10 text-white/75" : "border-hairline text-graphite"}`}>
        {attendance.map((state) => (
          <li key={state.label} className="flex items-center gap-1.5">
            <span className="size-2 rounded-full" style={{ background: state.color }} />
            {state.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RosterRow({ dark, children }: { dark: boolean; children: ReactNode }) {
  return (
    <>
      <span className={`size-7 rounded-full ${dark ? "bg-white/15" : "bg-black/10"}`} />
      {children}
    </>
  );
}

function IconArt({ app }: { app: AppEntry }) {
  return (
    <div className="relative mx-auto grid aspect-square w-[min(100%,300px)] place-items-center">
      <span
        className="absolute inset-0 rounded-full opacity-25 blur-3xl"
        style={{ backgroundImage: `linear-gradient(150deg, ${app.tint[0]}, ${app.tint[1]})` }}
      />
      <span className="absolute inset-[9%] rounded-full border border-current opacity-[0.08]" />
      <span className="absolute inset-[24%] rounded-full border border-current opacity-[0.12]" />
      <span className="relative">
        <AppIcon app={app} size={128} />
      </span>
    </div>
  );
}

export function AppArt({ app, tone = "light" }: { app: AppEntry; tone?: Tone }) {
  let art: ReactNode;
  switch (app.slug) {
    case "carmexio":
      art = <CarmexioArt tone={tone} />;
      break;
    case "pdf4you":
      art = <Pdf4youArt tone={tone} />;
      break;
    case "rovidiskclean":
      art = <DiskCleanArt tone={tone} />;
      break;
    case "crewzeitplan":
      art = <CrewZeitplanArt tone={tone} />;
      break;
    default:
      art = <IconArt app={app} />;
  }
  return (
    <div aria-hidden="true" className={`w-full ${tone === "dark" ? "text-white" : "text-ink"}`}>
      {art}
    </div>
  );
}

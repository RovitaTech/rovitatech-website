import { stack } from "@/lib/services";

/** Technology list laid out like a spec sheet: group on the left, items on the right. */
export function StackSheet({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <dl className={`border-t ${dark ? "border-white/15" : "border-line"}`}>
      {stack.map((row) => (
        <div
          key={row.group}
          className={`reveal grid gap-4 border-b py-7 sm:grid-cols-[220px_1fr] sm:gap-10 sm:py-9 ${
            dark ? "border-white/15" : "border-line"
          }`}
        >
          <dt className={`text-xl font-semibold tracking-[-0.022em] ${dark ? "text-white" : "text-ink"}`}>
            {row.group}
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {row.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-full px-4 py-2 text-[0.9375rem] font-medium tracking-[-0.005em] ${
                    dark ? "bg-white/10 text-white/90" : "bg-mist text-graphite"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

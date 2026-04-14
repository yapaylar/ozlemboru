import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-white border-b" style={{ borderColor: "#e4e9f0" }}>
      <div className="container-max">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="py-10 px-6 flex flex-col gap-1"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid #e4e9f0" : undefined,
              }}
            >
              <span
                className="text-4xl font-bold tracking-tight leading-none"
                style={{ color: "#1b3563" }}
              >
                {stat.value}
              </span>
              <span className="text-sm text-slate-500 mt-1.5 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

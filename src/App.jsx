/* eslint-disable no-unused-vars */
import Datepicker from './components/Datepicker';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800 font-sans">
      {/* Top Bar */}
      <header className="w-full backdrop-blur bg-white/70 border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 flex items-center justify-center text-white font-bold shadow">AI</div>
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-500 bg-clip-text text-transparent">Workshop</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button className="hover:text-slate-900 transition">Dashboard</button>
            <button className="hover:text-slate-900 transition">Calendar</button>
            <button className="hover:text-slate-900 transition">Reports</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition">Sign in</button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-sky-500 shadow-inner ring-2 ring-white" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-sky-500 to-teal-400" />
        <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[radial-gradient(circle_at_20%_20%,white,transparent_60%),radial-gradient(circle_at_80%_40%,white,transparent_55%),radial-gradient(circle_at_50%_80%,white,transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 flex flex-col items-start gap-10">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
              Plan & Track Your Schedule
            </h1>
            <p className="text-base md:text-lg/relaxed text-white/90 font-light">
              Use the integrated date picker to organize events, deadlines and milestones. Designed with accessibility & clarity in mind.
            </p>
            <div className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-wider font-semibold text-white/80">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur ring-1 ring-inset ring-white/30">Reactive UI</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur ring-1 ring-inset ring-white/30">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur ring-1 ring-inset ring-white/30">Date Picker</span>
            </div>
          </div>

          {/* Card with Datepicker */}
          <div className="w-full max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 opacity-70 group-hover:opacity-100 blur transition" />
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 flex flex-col gap-6">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">Select a Date</h2>
                  <p className="text-sm text-slate-500">Pick a target day to begin planning.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">Event Date</label>
                  <Datepicker />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                  <button className="flex-1 inline-flex justify-center items-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-600 to-teal-500 text-white font-medium shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 active:scale-[.98] transition">
                    Save Date
                  </button>
                  <button className="h-11 px-5 rounded-xl border border-slate-300 bg-white text-slate-700 font-medium hover:bg-slate-50 active:scale-[.98] transition">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AI Workshop · All rights reserved.</p>
      </footer>
    </div>
  );
}

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center p-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">React + Vite + Tailwind</h1>
        <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 tracking-tight mb-6 drop-shadow-sm">
          Hello KBTG
        </p>
        <p className="text-slate-600 mb-6">Edit <code className="px-1 py-0.5 bg-slate-200 rounded text-sm">src/App.jsx</code> and save to test HMR.</p>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer" className="group block rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
            <h2 className="font-semibold text-slate-800 mb-1 group-hover:text-indigo-600">Vite Guide →</h2>
            <p className="text-sm text-slate-500">Build tool documentation</p>
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="group block rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
            <h2 className="font-semibold text-slate-800 mb-1 group-hover:text-indigo-600">React Docs →</h2>
            <p className="text-sm text-slate-500">Learn modern React</p>
          </a>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <span>Example Button</span>
        </button>
      </div>
    </div>
  );
}

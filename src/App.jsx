import React from 'react';
import Datepicker from './components/Datepicker';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center bg-gradient-to-br from-indigo-600 via-sky-500 to-teal-400 p-6">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl animate-pulse select-none">
        Hello world
      </h1>
      <Datepicker />
    </div>
  );
}

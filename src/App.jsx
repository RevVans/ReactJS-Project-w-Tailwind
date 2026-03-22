import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      <div className="max-w-md rounded-2xl bg-gray-800 p-8 shadow-2xl ring-1 ring-white/10">
        <h1 className="text-3xl font-extrabold text-blue-400">Starting point!</h1>
        <p className="mt-4 text-gray-400">
          Jangan lupa clone repo-nya
        </p>
        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2 font-semibold transition hover:bg-blue-500 active:scale-95">
          Tombol
        </button>
      </div>
    </div>
  )
}

export default App

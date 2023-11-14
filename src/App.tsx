import { useState } from 'react';
import UpdateElectron from '@/components/update';
import logoVite from './assets/logo-vite.svg';
import logoElectron from './assets/logo-electron.svg';
import './App.css';
import { Icon } from '@iconify/react';

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="logo-box">
        <a
          href="https://github.com/electron-vite/electron-vite-react"
          target="_blank"
          rel="noreferrer"
        >
          <img src={logoVite} className="logo vite" alt="Electron + Vite logo" />
          <img src={logoElectron} className="logo electron" alt="Electron + Vite logo" />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className="card self-center">
        <button onClick={() => setCount((count) => count + 1)}>
          <Icon icon="humbleicons:arrow-right" />
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/public/icon.png"
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-slate-500 font-medium">Product Engineer</p>
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
      <p className="read-the-docs">Click on the Electron + Vite logo to learn more</p>
      <div className="flex-center">
        Place static files into the<code>/public</code> folder{' '}
        <img style={{ width: '5em' }} src="./node.svg" alt="Node logo" />
      </div>

      <UpdateElectron />
    </div>
  );
}

export default App;

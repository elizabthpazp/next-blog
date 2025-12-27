import './globals.css';
import Link from 'next/link';
import HeartIcon from './components/icons/HeartIcon';
import HomeIcon from './components/icons/HomeIcon';

export const metadata = {
  title: 'Mi Blog con Markdown',
  description: 'Blog hecho con Next.js y Markdown',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="font-sans m-0 p-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] min-h-screen text-gray-200">
        <header className="py-6 px-8 bg-black/30 backdrop-blur-md border-b-2 border-purple-600/30 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
          <nav className="max-w-[1200px] mx-auto flex items-center justify-between">
            <Link href="/" className="text-purple-400 no-underline text-2xl font-bold flex items-center gap-2 transition-colors duration-300">
              <HeartIcon width={32} height={32} />
              <span>Mi Blog</span>
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-200 no-underline py-2 px-4 rounded-lg transition-all duration-300 bg-purple-600/10 flex items-center gap-2">
                <HomeIcon width={20} height={20} />
                Inicio
              </Link>
            </div>
          </nav>
        </header>

        <main className="py-12 px-8 max-w-[1200px] mx-auto min-h-[calc(100vh-200px)]">
          {children}
        </main>

        <footer className="py-8 bg-black/40 border-t-2 border-purple-600/30 text-center text-gray-400">
          <p className="m-0 mb-2 text-lg flex items-center justify-center gap-2">
            © 2025 Mi Blog - Creado con 
            <HeartIcon width={20} height={20} fill="#a78bfa" stroke="#a78bfa" />
            y Next.js
          </p>
          <p className="m-0 text-sm text-gray-500">
            Compartiendo ideas y conocimiento
          </p>
        </footer>
      </body>
    </html>
  );
}

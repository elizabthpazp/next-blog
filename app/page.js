import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import FileIcon from './components/icons/FileIcon';
import CalendarIcon from './components/icons/CalendarIcon';
import HeartIcon from './components/icons/HeartIcon';

export default async function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-12 px-4 mb-12 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-[20px] border border-purple-600/30 shadow-[0_8px_32px_rgba(147,51,234,0.2)]">
        <h1 className="text-6xl mb-4 bg-gradient-to-br from-purple-400 to-purple-300 bg-clip-text text-transparent font-bold">
          Bienvenido a Mi Blog
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Un espacio donde comparto mis pensamientos, ideas y experiencias sobre desarrollo web, tecnología y más.
        </p>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-3xl mb-8 text-purple-400 flex items-center gap-2">
          <FileIcon width={28} height={28} />
          Últimas Publicaciones
        </h2>
        
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {allPostsData.map(({ id, title, date }) => (
            <Link 
              key={id} 
              href={`/posts/${id}`}
              className="post-card no-underline block"
            >
              <article className="bg-purple-600/10 border border-purple-600/30 rounded-xl p-6 transition-all duration-300 cursor-pointer h-full shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
                <h3 className="text-gray-200 text-2xl mb-3 font-semibold">
                  {title}
                </h3>
                <div className="flex items-center gap-2 text-purple-400 text-sm">
                  <CalendarIcon width={16} height={16} />
                  <time>{date}</time>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mt-16 p-8 bg-black/30 rounded-xl border border-purple-600/20">
        <h2 className="text-3xl mb-4 text-purple-400">
          Sobre este blog
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Este es un espacio personal donde exploro diferentes temas relacionados con el desarrollo web, 
          programación y tecnología. Aquí encontrarás tutoriales, reflexiones y recursos útiles para 
          desarrolladores. 
          <span className="inline-flex items-center ml-1">
            ¡Gracias por visitarnos!
            <HeartIcon width={20} height={20} fill="#a78bfa" stroke="#a78bfa" className="ml-1" />
          </span>
        </p>
      </section>
    </div>
  );
}

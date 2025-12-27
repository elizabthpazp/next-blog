import fs from 'fs';
import path from 'path';
import { getPostData } from '../../../lib/posts';
import CalendarIcon from '../../components/icons/CalendarIcon';
import ArrowLeftIcon from '../../components/icons/ArrowLeftIcon';

const postsDirectory = path.join(process.cwd(), 'posts');

/* 1️⃣ Le dice a Next qué posts existen */
export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);

  return files.map(file => ({
    id: file.replace(/\.md$/, ''),
  }));
}

/* 2️⃣ Página del post */
export default async function Post({ params }) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <article className="max-w-3xl mx-auto">
      {/* Header del post */}
      <header className="mb-12 p-8 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl border border-purple-600/30 shadow-[0_8px_32px_rgba(147,51,234,0.2)]">
        <h1 className="text-4xl m-0 mb-4 text-gray-200 leading-tight">
          {postData.title}
        </h1>
        {postData.date && (
          <div className="flex items-center gap-2 text-purple-400 text-base">
            <CalendarIcon width={20} height={20} />
            <time>{postData.date}</time>
          </div>
        )}
      </header>

      {/* Contenido del post */}
      <div 
        className="bg-black/30 p-10 rounded-2xl border border-purple-600/20 leading-relaxed text-lg"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />

      {/* Botón de regreso */}
      <div className="mt-12 text-center">
        <a 
          href="/"
          className="back-button inline-flex items-center gap-2 py-3 px-8 bg-gradient-to-br from-purple-600 to-purple-700 text-white no-underline rounded-lg font-semibold transition-all duration-300 border border-purple-600/50 shadow-[0_4px_12px_rgba(147,51,234,0.3)]"
        >
          <ArrowLeftIcon width={20} height={20} />
          Volver al inicio
        </a>
      </div>
    </article>
  );
}

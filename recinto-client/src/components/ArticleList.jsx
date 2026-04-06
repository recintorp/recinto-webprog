import { Link } from 'react-router-dom';
import Button from './Button';
import concept1 from '../assets/concept.jpg';
import concept2 from '../assets/concept2.jpg';
import concept3 from '../assets/concept3.jpg';
import concept4 from '../assets/concept4.jpg';

const ArticleList = ({ articles }) => {
  const images = [concept1, concept2, concept3, concept4];

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article key={article.name} className="group flex flex-col bg-white border border-zinc-200 p-6 transition-all duration-300 hover:border-amber-500 hover:shadow-[6px_6px_0px_0px_#f59e0b]">
          <div className="overflow-hidden aspect-[4/3] bg-zinc-100 border border-zinc-200">
            <img 
              src={images[index % images.length]} 
              alt={article.title} 
              className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
            />
          </div>
          
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500">
            Document {String(index + 1).padStart(2, '0')}
          </p>
          
          <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-zinc-950">
            {article.title}
          </h3>
          
          <p className="mt-4 mb-6 flex-1 text-sm leading-6 text-zinc-600">
            {article.content[0].substring(0, 150)}...
          </p>
          
          <Link to={`/articles/${article.name}`} className="mt-auto block">
            <Button className="w-full border border-zinc-950 bg-white font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-950 hover:text-white transition-colors py-3">
              Read Document
            </Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
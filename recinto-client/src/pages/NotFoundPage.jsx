import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      <div className="mb-8">
        <div className="h-20 w-20 border-4 border-amber-500 transform rotate-45 flex items-center justify-center mx-auto">
          <div className="h-8 w-8 bg-zinc-950"></div>
        </div>
      </div>

      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-950 uppercase tracking-widest">
        Page Not Found
      </h1>
      
      <div className="mt-6 h-1 w-24 bg-amber-500 mx-auto"></div>
      
      <p className="mt-6 text-lg text-zinc-600 tracking-wide max-w-md">
        The link you followed to get here must be broken...
      </p>

      <Link 
        to="/" 
        className="mt-10 inline-block bg-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-amber-500 transition-colors duration-300"
      >
        Return to Foundation
      </Link>
    </div>
  );
}

export default NotFoundPage;
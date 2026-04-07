import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articlesData from '../assets/article-content.js';
import concept1 from '../assets/concept.jpg';
import concept2 from '../assets/concept2.jpg';
import concept3 from '../assets/concept3.jpg';
import concept4 from '../assets/concept4.jpg';

const ArticleListPage = () => {
  const articles = articlesData.map((article, index) => ({
    ...article,
    image: [concept1, concept2, concept3, concept4][index] || concept1
  }));

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y bg-white px-4 py-6 sm:px-6 sm:py-16 lg:px-8 border-zinc-200">
        <div className="max-w-7xl mx-auto w-full">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
            Library
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight text-zinc-950 sm:text-5xl uppercase tracking-tighter">
            Architectural Theory & Insights
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-zinc-600">
            A curated collection of essays and studies exploring spatial fundamentals, sustainable design principles, and the evolving role of the architect in urban development.
          </p>
          <div className="mt-8">
            <Button to="/" variant="primary">
              Return to Studio
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-500">
              Publications
            </p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950 uppercase tracking-tight">Research Index</h2>
          </div>

          <ArticleList articles={articles} />
        </div>
      </section>
    </div>
  );
}

export default ArticleListPage;
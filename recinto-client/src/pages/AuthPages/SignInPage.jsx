import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-sm';

const actionButtonClassName = 'w-full py-3.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 border';

const SignInPage = () => {
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-black uppercase tracking-tighter text-zinc-950 sm:text-4xl">Log In</h1>
      <div className="mt-4 h-1 w-12 bg-amber-500"></div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-500">
        Access your account and enter the world of artistry and buildings.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="signin-email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-950">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="studio@valence.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-950">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-sm pt-1">
          <label className="flex items-center gap-3 text-zinc-600 cursor-pointer">
            <input type="checkbox" className="h-4 w-4 rounded-sm border-zinc-300 accent-amber-500 cursor-pointer" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Remember me</span>
          </label>
          <button type="button" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-amber-500 transition-colors">
            Forgot Password?
          </button>
        </div>

        <div className="pt-2">
          <Button type="submit" className={`${actionButtonClassName} border-zinc-950 bg-zinc-950 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-white shadow-md`}>
            Access Studio
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" className={`${actionButtonClassName} border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-950`}>
            Log In with Google
          </Button>
          <Button type="button" className={`${actionButtonClassName} border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-950`}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
        No account yet?{' '}
        <Link to="/signup" className="text-amber-500 transition-colors hover:text-zinc-950 ml-1 tracking-[0.2em]">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
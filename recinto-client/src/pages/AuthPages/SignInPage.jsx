import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-[#8B5CF6]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#8B5CF6]/50 shadow-inner';

const actionButtonClassName = 'w-full py-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border rounded-xl';

const SignInPage = () => {
  return (
    <div className="w-full max-w-sm relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-8 bg-linear-to-r from-[#A855F7] to-transparent"></div>
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
          Welcome Back
        </p>
      </div>
      
      <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
        Client <span className="font-serif italic text-zinc-500">Access</span>
      </h1>
      
      <p className="mt-4 text-sm leading-relaxed text-zinc-400 font-light">
        Enter your credentials to access your studio dashboard, ongoing blueprints, and architectural models.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
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
          <label htmlFor="signin-password" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
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

        <div className="flex items-center justify-between gap-4 text-sm pt-2">
          <label className="flex items-center gap-3 text-zinc-400 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="checkbox" 
                className="peer h-4 w-4 appearance-none rounded-sm border border-white/20 bg-white/5 transition-all checked:border-[#8B5CF6] checked:bg-[#8B5CF6] hover:border-[#8B5CF6]/50 cursor-pointer" 
              />
              <svg 
                className="absolute w-2.5 h-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">Remember me</span>
          </label>
          <button type="button" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-[#C084FC] transition-colors duration-300">
            Forgot Password?
          </button>
        </div>

        <div className="pt-4">
          <Button type="submit" className={`${actionButtonClassName} border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#C084FC] hover:bg-[#8B5CF6] hover:border-[#8B5CF6] hover:text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.4)]`}>
            Access Studio
          </Button>
        </div>

        <div className="relative py-4 flex items-center">
          <div className="grow border-t border-white/5"></div>
          <span className="shrink-0 px-4 text-[9px] font-bold uppercase tracking-widest text-zinc-600">Or continue with</span>
          <div className="grow border-t border-white/5"></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Button type="button" className={`${actionButtonClassName} border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white hover:border-[#8B5CF6]/30`}>
            Google
          </Button>
          <Button type="button" className={`${actionButtonClassName} border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white hover:border-[#8B5CF6]/30`}>
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-10 border-t border-white/10 pt-8 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 text-center">
        No account yet?{' '}
        <Link to="/auth/signup" className="text-[#C084FC] transition-all duration-300 hover:text-white ml-2 tracking-[0.3em] hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
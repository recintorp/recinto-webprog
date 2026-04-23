import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 focus:border-[#8B5CF6]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#8B5CF6]/50 shadow-inner';

const actionButtonClassName = 'w-full py-4 text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 border rounded-xl';

const SignUpPage = () => {
  return (
    <div className="w-full max-w-sm relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-8 bg-linear-to-r from-[#A855F7] to-transparent"></div>
        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C084FC]">
          New Application
        </p>
      </div>
      
      <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
        Client <span className="font-serif italic text-zinc-500">Registration</span>
      </h1>
      
      <p className="mt-4 text-sm leading-relaxed text-zinc-400 font-light">
        Establish your foundation. Create an account to collaborate on ongoing blueprints and architectural concepts.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="e.g. John"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="e.g. Doe"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="studio@valence.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-3 ml-1 text-[8px] font-bold uppercase tracking-widest text-zinc-500">
            Min 8 chars, letters & symbols
          </p>
        </div>

        <div className="pt-4">
          <Button type="submit" className={`${actionButtonClassName} border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#C084FC] hover:bg-[#8B5CF6] hover:border-[#8B5CF6] hover:text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.4)]`}>
            Create Account
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
        Already have an account?{' '}
        <Link to="/auth/login" className="text-[#C084FC] transition-all duration-300 hover:text-white ml-2 tracking-[0.3em] hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">
          Log In Here
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
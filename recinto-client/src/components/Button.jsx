import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-zinc-950 text-white border border-zinc-950 hover:bg-amber-500 hover:border-amber-500',
  secondary: 'bg-transparent text-zinc-950 border border-zinc-950 hover:bg-amber-500 hover:border-amber-500 hover:text-white',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  onClick
}) => {
  const classes = [
    'inline-flex items-center justify-center px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
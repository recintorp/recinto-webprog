import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-zinc-950 text-white border border-zinc-950 hover:bg-amber-500 hover:border-amber-500',
  secondary: 'bg-transparent text-zinc-950 border border-zinc-950 hover:bg-amber-500 hover:border-amber-500 hover:text-white',
  custom: '',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant,
  className = '',
  onClick
}) => {
  const resolvedVariant = variant || (className.includes('bg-') || className.includes('text-') || className.includes('border-') ? 'custom' : 'secondary');

  const needsPadding = !className.includes('px-') && !className.includes('py-') && !className.includes('p-');
  const needsTextSize = !className.includes('text-xs') && !className.includes('text-sm') && !className.includes('text-[');

  const classes = [
    'inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300',
    needsPadding ? 'px-8 py-3' : '',
    needsTextSize ? 'text-xs' : '',
    variantClasses[resolvedVariant],
    className,
  ]
    .filter(Boolean)
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
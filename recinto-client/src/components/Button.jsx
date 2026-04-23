import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#7C3AED] text-white border border-[#A855F7]/30 hover:bg-[#8B5CF6] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]',
  secondary: 'bg-[#8B5CF6]/5 text-[#C084FC] border border-[#8B5CF6]/30 hover:bg-[#7C3AED] hover:text-white hover:border-[#7C3AED] hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.4)]',
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
  const needsRounding = !className.includes('rounded');

  const classes = [
    'inline-flex items-center justify-center font-bold uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden',
    needsPadding ? 'px-8 py-3.5' : '',
    needsTextSize ? 'text-[10px]' : '',
    needsRounding ? 'rounded-full' : '',
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
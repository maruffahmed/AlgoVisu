import { Link } from 'react-router-dom';
function ButtonWrapper({ href = null, type = 'button', disabled = false, className, children, onClick = () => {} }) {
  return href ? (
    <Link to={href} className={className} onClick={() => onClick()} type={type}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={() => onClick()} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

function Button({ variant = 'primary', className = '', ...props }) {
  let btnType = variant === 'light' ? 'btn-light' : 'btn-primary';
  let baseClass = `btn ${btnType} ${className}`;
  return (
    <>
      <ButtonWrapper className={baseClass} {...props} />
    </>
  );
}

export default Button;

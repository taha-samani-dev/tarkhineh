export default function BoxIcon40({
  children,
  ariaLabel,
  className,
  onClick = () => {},
}) {
  return (
    <div onClick={onClick} className={`py-1.5`} aria-label={ariaLabel}>
      <div
        className={`hover:[&_>svg]:fill-white rounded-sm hover:bg-primary p-1 md:p-2 w-6 h-6 md:w-10 md:h-10  ${className}`}>
        {children}
      </div>
    </div>
  );
}

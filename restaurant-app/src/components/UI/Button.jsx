
export default function Button({children, textOnly, className, ...props}) {
  
  // custom classes
  let cssClasses = textOnly ? 'text-button': 'button';
  cssClasses += ' ' + className;

  return (
    <button 
      className={ cssClasses } 
      {...props}
    >
      {children}
    </button>
  );
}
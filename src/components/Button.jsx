import ButtonSvg from "../assets/svg/ButtonSvg";

// Gonna make this a completely reusable button
const Button = ({children, white, px, className, href, onClick}) => {
  // returning round braces because we want to return immediately, an automatic one

  // -color-[] & -n-[] are coming from tailwind.config
  const classes = `button relative inline-flex h-11 justify-center 
                    items-center transition-colors hover:text-color-1
                    ${px || "px-7"} 
                    ${white ? "text-n-8" : "text-n-1"}
                    ${className || ""}
                    `;

  const spanClasses = `relative z-10`

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    
    </button>
  );

const renderLink = () => {
  return (
    <a className={classes} href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
};


  // calling the function we just made
  return href ? renderLink() : renderButton();
};

export default Button;

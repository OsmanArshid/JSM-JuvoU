import ButtonSvg from "../assets/svg/ButtonSvg";

// Gonna make this a completely reusable button
const Button = ({ children, white, px, className, href, onClick, icon }) => {
  // -color-[] & -n-[] are coming from tailwind.config
  const classes = `button relative inline-flex h-11 justify-center 
                    items-center transition-colors hover:text-color-1
                    ${px || "px-7"} 
                    ${white ? "text-n-8" : "text-n-1"}
                    ${className || ""}
                    `;

  const spanClasses = `relative z-10 flex items-center space-x-2`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>
        <span>{children}</span> {/* Text */}
        {icon && <span>{icon}</span>} {/* Icon (conditionally rendered) */}
      </span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes} href={href}>
      <span className={spanClasses}>
        <span>{children}</span> {/* my Text */}
        {icon && <span>{icon}</span>}
      </span>
      {ButtonSvg(white)}
    </a>
  );

  // calling the function we just made
  return href ? renderLink() : renderButton();
};

export default Button;

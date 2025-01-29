import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, white, px, className, href, onClick, icon }) => {
  const classes = `button relative inline-flex h-11 justify-center 
                    items-center transition-colors hover:text-color-1
                    ${px || "px-7"} 
                    ${white ? "text-n-8" : "text-n-1"}
                    ${className || ""}`;

  const spanClasses = `relative z-10 flex items-center space-x-2`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <Link to={href} className={classes}>
      <span className={spanClasses}>
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </span>
      {ButtonSvg(white)}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

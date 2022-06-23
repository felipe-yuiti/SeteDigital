import "./Button.style.css";

const Button = ({ children, style, ...props }) => {
  return (
    <button className={`button ${style ?? "primary"}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

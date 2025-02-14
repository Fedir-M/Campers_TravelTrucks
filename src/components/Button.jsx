/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import IconForButton from "./IconForButton";

const Button = ({
  onClick,
  buttonLabel,
  type = "button",
  icon,
  className = "",
}) => {
  //*здесь label=Search/Load more.../Go Back (название кнопки);type=submit/button;
  //* icon=наличие svg, className=стили,
  // которые необходимы именно этой кнопке и кот. передаются пропсом с местонахождения конкретного компонента
  return (
    <button className={className} type={type} onClick={onClick} icon={icon}>
      {icon && <IconForButton id={icon} />}
      <h2 className="">{buttonLabel}</h2>
    </button>
  );
};

export default Button;

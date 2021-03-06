const Button = (props) => {
  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className="cursor-pointer px-4 py-3 items-start font-medium bg-green-400 shadow-md rounded-xl text-white hover:bg-green-600"
    >
      {props.text}
    </a>
  );
};

export default Button;

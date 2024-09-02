function ButtonHelper({
  text = "Click Me!",
  color = "blue",
  fontSize = 14,
  handleClick,
}) {
  // if a prop is not destructured then it can be used like this:
  // props.color, props.text, props.fontSize
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function Button() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <ButtonHelper
        color="blue"
        fontSize={14}
        text="Click Me!"
        handleClick={handleButtonClick}
      />
      <ButtonHelper
        color="red"
        fontSize={12}
        text="Don't Click Me!"
        handleClick={handleButtonClick}
      />
      <ButtonHelper
        color="blue"
        fontSize={14}
        text="Click Me!"
        handleClick={handleButtonClick}
      />
      <ButtonHelper handleClick={handleButtonClick} />
    </div>
  );
}

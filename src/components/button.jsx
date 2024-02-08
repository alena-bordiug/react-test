function Button({onClick, text, color}) {
  return (
    <button type='button' className='btn' onClick={onClick} style={{backgroundColor: color}}>
      {text}
    </button>
  );
}

export default Button;

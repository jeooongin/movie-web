const Header = ({ text, firstChild, secondChild, onClick }) => {
  return (
    <header className="Header">
      <div className="header_text" onClick={onClick}>
        {text}
      </div>
      <div className="header_child_wrapper">
        <div className="header_first_child">{firstChild}</div>
        <div className="header_second_child">{secondChild}</div>
      </div>
    </header>
  );
};

export default Header;

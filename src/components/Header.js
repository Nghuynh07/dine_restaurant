import logo from "../images/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className='header'>
      {/* <div className='header__bg'></div> */}
      <div className='header__logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='header__contents'>
        <h1 className='header__heading header__heading--header'>
          Exquisite dining since 1989
        </h1>
        <p className='paragraph__text paragraph__text--header'>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
      </div>
      <Button className='btn btn--header' text='book a table' />
    </header>
  );
};

export default Header;

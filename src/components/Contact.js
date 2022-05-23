import logo from "../images/logo.svg";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact__logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='contact__location'>
        <p className='contact__text'>Marthwaite, Sedbergh</p>
        <p className='contact__text'>Cumbria</p>
        <p className='contact__text'>+00 44 123 4567</p>
      </div>
      <div className='contact__hours'>
        <p className='contact__text'>OPEN TIMES</p>
        <p className='contact__text'>MON - FRI: 09:00 AM - 10:00 PM</p>
        <p className='contact__text'>SAT - SUN: 09:00 AM - 11:30 PM</p>
      </div>
    </div>
  );
};

export default Contact;

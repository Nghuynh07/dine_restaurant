import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Social = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/book");
  };
  return (
    <div className='events__section social'>
      <div className='events__infos'>
        <h1 className='section__heading section__heading--events'>
          Social Events
        </h1>
        <p className='paragraph__text paragraph__text--events'>
          Are you looking to have a larger social event? No problem! We’re more
          than happy to cater for big parties. We’ll work with you to make your
          event a hit with everyone.
        </p>
      </div>
      <Button
        onClick={onClick}
        text='Book a table'
        className='btn btn--desktop btn--events'
      />
    </div>
  );
};

export default Social;

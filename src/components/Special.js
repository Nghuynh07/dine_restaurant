import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Special = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/book");
  };
  return (
    <div className='events__section special'>
      <div className='events__infos'>
        <h1 className='section__heading section__heading--events'>
          Special Events
        </h1>
        <p className='paragraph__text paragraph__text--events'>
          Whether it’s a romantic dinner or special date you’re celebrating with
          others we’ll look after you. We’ll be sure to mark your special date
          with an unforgettable meal.
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

export default Special;

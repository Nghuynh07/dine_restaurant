import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Family = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/book");
  };
  return (
    <div className='events__section family'>
      <div className='events__infos'>
        <h1 className='section__heading section__heading--events '>
          Family Gathering
        </h1>
        <p className='paragraph__text paragraph__text--events'>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
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

export default Family;

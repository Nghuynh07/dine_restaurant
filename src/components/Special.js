import Button from "./Button";

const Special = () => {
  return (
    <div className='events__section special'>
      <h1 className='section__heading section__heading--events'>
        Special Events
      </h1>
      <p className='paragraph__text paragraph__text--events'>
        Whether it’s a romantic dinner or special date you’re celebrating with
        others we’ll look after you. We’ll be sure to mark your special date
        with an unforgettable meal.
      </p>
      <Button text='Book a table' className='btn btn-desktop' />
    </div>
  );
};

export default Special;

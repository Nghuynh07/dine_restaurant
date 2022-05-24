import Button from "./Button";

const Family = () => {
  return (
    <div className='events__section family'>
      <h1 className='section__heading section__heading--events '>
        Family Gathering
      </h1>
      <p className='paragraph__text paragraph__text--events'>
        We love catering for entire families. So please bring everyone along for
        a special meal with your loved ones. We’ll provide a memorable
        experience for all.
      </p>
      <Button text='Book a table' className='btn btn--desktop ' />
    </div>
  );
};

export default Family;

import Button from "./Button";

const Social = () => {
  return (
    <div className='events__section social'>
      <h1 className='section__heading section__heading--events'>
        Social Events
      </h1>
      <p className='paragraph__text paragraph__text--events'>
        Are you looking to have a larger social event? No problem! We’re more
        than happy to cater for big parties. We’ll work with you to make your
        event a hit with everyone.
      </p>
      <Button text='Book a table' className='btn btn-desktop' />
    </div>
  );
};

export default Social;

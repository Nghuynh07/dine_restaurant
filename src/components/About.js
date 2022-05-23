import enjoyable from "../images/homepage/enjoyable-place-mobile.jpg";
import enjoyableTablet from "../images/homepage/enjoyable-place-tablet.jpg";
import locally from "../images/homepage/locally-sourced-mobile.jpg";
import locallyTablet from "../images/homepage/locally-sourced-tablet.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='about__section'>
        <picture className='about__img'>
          <source srcset={enjoyableTablet} media='(min-width:600px)' />
          <img src={enjoyable} alt='Mountain with sheep and river' />
          {/* <source srcset='' media=''></source> */}
        </picture>
        {/* <div className='about__img'>
          <img src={enjoyable} alt='Mountain with sheep and river' />
        </div> */}
        <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
          <g fill='none' fillRule='evenodd'>
            <path fill='#9E7F66' d='M15 3h56v1H15z' />
            <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
          </g>
        </svg>
        <h2 className='section__heading'>Enjoyable Place for all the family</h2>
        <p className='paragraph__text paragraph__text--section'>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>
      <div className='about__section'>
        <picture className='about__img'>
          <source srcset={locallyTablet} media='(min-width:600px)' />
          <img src={locally} alt='Mountain with sheep and river' />
          {/* <source srcset='' media=''></source> */}
        </picture>
        {/* <div className='about__img'>
          <img src={locally} alt='Mountain with sheep and river' />
        </div> */}
        <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
          <g fill='none' fillRule='evenodd'>
            <path fill='#9E7F66' d='M15 3h56v1H15z' />
            <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
          </g>
        </svg>
        <h2 className='section__heading'>The most locally sourced food</h2>
        <p className='paragraph__text paragraph__text--section'>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>
    </section>
  );
};

export default About;

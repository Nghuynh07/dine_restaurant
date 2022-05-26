import salmon from "../images/homepage/salmon-mobile.jpg";
import beef from "../images/homepage/beef-mobile.jpg";
import chocolate from "../images/homepage/chocolate-mobile.jpg";
const Highlights = () => {
  return (
    <section className='highlights'>
      <div className='highlights__container'>
        <div className='highlights__section'>
          <svg xmlns='http://www.w3.org/2000/svg' width='71' height='7'>
            <g fill='none' fillRule='evenodd'>
              <path fill='#9E7F66' d='M15 3h56v1H15z' />
              <circle cx='3.5' cy='3.5' r='3' stroke='#9E7F66' />
            </g>
          </svg>
          <div className='highlights__infos highlight__top'>
            <h2 className='section__heading section__heading--highlights'>
              A few highlights from our menu
            </h2>
            <p className='paragraph__text paragraph__text--highlights' data-=''>
              We cater for all dietary requirements, but here’s a glimpse at
              some of our diner’s favorites. Our menu is revamped every season.
            </p>
          </div>
        </div>
        <div>
          <div className='highlights__section highlights__section--tablet '>
            <div className='highlights__img'>
              <img src={salmon} alt='Salmon' />
            </div>
            <div className='highlights__infos'>
              <h3 className='highlights__heading highlights__heading--desktop'>
                Seared Salmon Fillet
              </h3>
              <p className='paragraph__text paragraph__text--highlights'>
                Our locally sourced salmon served with a refreshing buckwheat
                summer salad.
              </p>
            </div>
          </div>

          <div className='highlights__section'>
            <div className='highlights__line'></div>
            <div className='highlights__content'>
              <div className='highlights__img'>
                <img src={beef} alt='Beef' />
              </div>
              <div className='highlights__infos'>
                <h3 className='highlights__heading highlights__heading--desktop'>
                  Rosemary Filet Mignon
                </h3>
                <p className='paragraph__text paragraph__text--highlights'>
                  Our prime beef served to your taste with a delicious choice of
                  seasonal sides.
                </p>
              </div>
            </div>
            <div className='highlights__line'></div>
          </div>

          <div className='highlights__section highlights__section--tablet'>
            <div className='highlights__img'>
              <img src={chocolate} alt='Chocolate' />
            </div>
            <div className='highlights__infos'>
              <h3 className='highlights__heading highlights__heading--desktop'>
                Summer Fruit Chocolate Mousse
              </h3>
              <p className='paragraph__text paragraph__text--highlights'>
                Creamy mousse combined with summer fruits and dark chocolate
                shavings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

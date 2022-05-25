// import specialEvents from "../images/homepage/special-events-mobile.jpg";
import familyGathering from "../images/homepage/family-gathering-mobile.jpg";
// import familyGatheringTablet from "../images/homepage/family-gathering-tablet.jpg";
import familyGatheringDesktop from "../images/homepage/family-gathering-desktop.jpg";
// import socialEvents from "../images/homepage/social-events-mobile.jpg";
import { Link, Outlet } from "react-router-dom";

const Events = () => {
  return (
    <section className='events'>
      <picture className='events__img'>
        {/* <source srcSet={familyGatheringTablet} media='(min-width: 600px)' /> */}
        <source srcSet={familyGatheringDesktop} media='(min-width: 900px)' />
        <img src={familyGathering} alt='Family Gathering' />
      </picture>
      {/* <Routes>
        <Route
          path='family'
          element={<Image src={familyGathering} alt='Family Gathering' />}
        />
        <Route
          path='special'
          element={<Image src={specialEvents} alt='Special Events' />}
        />
        <Route
          path='social'
          element={<Image src={socialEvents} alt='Social Events' />}
        />
      </Routes> */}
      <div className='events__contents'>
        <div className='events__links'>
          <Link to='family' className='events__link'>
            Family Gathering
          </Link>
          <Link to='special' className='events__link'>
            Special Events
          </Link>
          <Link to='social' className='events__link'>
            Social Events
          </Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default Events;

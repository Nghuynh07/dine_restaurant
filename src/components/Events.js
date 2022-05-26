import specialEvents from "../images/homepage/special-events-mobile.jpg";
import specialEventsTablet from "../images/homepage/special-events-tablet.jpg";
import specialEventsDesktop from "../images/homepage/special-events-desktop.jpg";
import familyGathering from "../images/homepage/family-gathering-mobile.jpg";
import familyGatheringTablet from "../images/homepage/family-gathering-tablet.jpg";
import familyGatheringDesktop from "../images/homepage/family-gathering-desktop.jpg";
import socialEvents from "../images/homepage/social-events-mobile.jpg";
import socialEventsTablet from "../images/homepage/social-events-tablet.jpg";
import socialEventsDesktop from "../images/homepage/social-events-desktop.jpg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Events = () => {
  const location = useLocation();
  return (
    <section className='events'>
      <div className='events__container'>
        {location.pathname === "/" && (
          <picture className='events__img'>
            <source
              className='events__img--tablet'
              srcSet={familyGatheringTablet}
              media='(min-width: 600px)'
            />
            <source
              className='events__img--desktop'
              srcSet={familyGatheringDesktop}
              media='(min-width: 769px)'
            />
            <img src={familyGathering} alt='Family Gathering' />
          </picture>
        )}
        {location.pathname === "/social" && (
          <picture className='events__img'>
            <source
              className='events__img--tablet'
              srcSet={socialEventsTablet}
              media='(min-width: 600px)'
            />
            <source
              className='events__img--desktop'
              srcSet={socialEventsDesktop}
              media='(min-width: 769px)'
            />
            <img src={socialEvents} alt='Family Gathering' />
          </picture>
        )}
        {location.pathname === "/special" && (
          <picture className='events__img'>
            <source
              className='events__img--tablet'
              srcSet={specialEventsTablet}
              media='(min-width: 600px)'
            />
            <source
              className='events__img--desktop'
              srcSet={specialEventsDesktop}
              media='(min-width: 769px)'
            />
            <img src={specialEvents} alt='Family Gathering' />
          </picture>
        )}

        <div className='events__contents'>
          <div className='events__links'>
            <Link to='/' className='events__link'>
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
      </div>
    </section>
  );
};

export default Events;

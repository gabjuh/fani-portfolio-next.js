'use client'

import scrollToId from '@/helpers/scrollToId';
import UpcomingEventsWrapper from './UpcomingEventsWrapper';
import Title from './Title';
import IConcerts from '@/interfaces/IConcerts';

function UpcomingEvents({ data }: { data: IConcerts[]; }) {

  const eventLimit = 5;

  const stringToDate = (date: string | undefined) => {
    if (date) {
      const dateArray = date.split('.');
      return `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
    }
    return '1900.01.01';
  };

  function onClickEventHandler(eventId: string) {
    scrollToId(`event-main-${eventId}`);
  };

  const today = new Date();

  const getUpcomingEvents = () => {
    const upcomingEvents = data.filter((event) => {
      if (event) {
        const date = new Date(stringToDate(event ? event.startDate : ''));
        return date >= today;
      }
    });

    // Sort the upcoming events in an ascending order
    upcomingEvents.sort((a: any, b: any) => new Date(stringToDate(a.startDate)).getTime() - new Date(stringToDate(b.startDate)).getTime());

    return upcomingEvents;
  };

  const comingEvents = getUpcomingEvents();
  const isAnyUpcomingEvents = comingEvents.some(event => {
    const date = new Date(stringToDate(event.startDate));
    return event.active === '1' && date >= today;
  });

  return (
    <>
      <UpcomingEventsWrapper>
        <div className="lg:hidden">
          <Title title="Upcoming Concerts" />
        </div>
        <h3 className="text-xl lg:block hidden pl-2">Upcoming Concerts:</h3>
        <ul className="mt-2">

          {!isAnyUpcomingEvents && (<p className="mt-4 ml-2">Stay tuned! :-)</p>)}

          {comingEvents.map((event: any, index: number) => {
            console.log(index);
            if (index < 5) {
              return (
                <li className="group text-sm mt-1 cursor-pointer hover:bg-gray-500/[.3] transition-all ease-in-out duration-200 rounded-lg p-2" key={`event-hero-${index}`} onClick={() => onClickEventHandler(event.id)}>
                  {/* Title */}
                  <p className="group-hover:text-secondary transition-all ease-in-out duration-200">
                    <span className="text-xl font-bold uppercase">{event.titleEn}</span>
                  </p>
                  {/* Band */}
                  <p>
                    <span className="text-lg font-semibold">{event.band}</span>
                  </p>
                  {/* Date */}
                  <p>
                    <span className="font-bold">{event.startDate}</span> {event.startTime},
                    <span className="font-extralight"> {event.location}</span>
                  </p>
                  {index < eventLimit - 1 && comingEvents.length != 1 && index !== comingEvents.length - 1 && <hr className="mt-5 opacity-40" />}
                </li>
              );
            }
          })}

        </ul>
        <div className="w-full">
          <button onClick={() => scrollToId('concerts')} className="btn btn-secondary btn-sm mt-5 ml-2">
            see all events
          </button>
        </div>
      </UpcomingEventsWrapper>
    </>
  );
};

export default UpcomingEvents;
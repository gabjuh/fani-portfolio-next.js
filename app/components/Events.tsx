import React from 'react';
import Title from './Title';
import IData from '../../interfaces/IData';
import EventItem from './EventItem';

export default function Events ({ data }: {data: IData}) {

  const stringToDate = (date: string | undefined) => {
    if (date) {
      const dateArray = date.split('.');
      return `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
    }
    return '01.01.1900';
  };

  const getUpcomingEvents = () => {
    const upcomingEvents = data.concerts.filter((event) => {
      if (event) {
        const date = new Date(stringToDate(event ? event.startDate : ''));
        const today = new Date();
        return date >= today;
      }
    });

    // Sort the upcoming events in an ascending order
    upcomingEvents.sort((a: any, b: any) => new Date(stringToDate(a.startDate)).getTime() - new Date(stringToDate(b.startDate)).getTime());

    return upcomingEvents;
  };

  const getPastEvents = () => {
    const pastEvents = data.concerts.filter((event) => {
      if (event) {
        const date = new Date(stringToDate(event ? event.startDate : ''));
        const today = new Date();
        return date < today;
      }
    });

    // Sort the past events in a descending order
    pastEvents.sort((a: any, b: any) => new Date(stringToDate(b.startDate)).getTime() - new Date(stringToDate(a.startDate)).getTime());

    return pastEvents;
  };

  return (
    <>
      <Title title={data.concerts[0].pageTitle} id="concerts" />
      <div className="lg:w-[900px] xl:w-[1200px] w-full mx-auto">
        {data && getUpcomingEvents()?.map((event, index) => (
          <React.Fragment key={`actual-${index}`}>
            {event.active === '1' && (
              <EventItem
                data={event}
                isPast={false}
              />
            )}
          </React.Fragment>
        ))}

        <Title title={"Past Concerts"} />
          {data && getPastEvents()?.map((event, index) => (
            <React.Fragment key={`past-${index}`}>
              {event.active === '1' && (
                <EventItem
                  data={event}
                  isPast={true}
                />
              )}
            </React.Fragment>
        ))}
      </div>
    </>
  );
};

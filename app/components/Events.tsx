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
    return '1900.01.01';
  };

  const getActualEvents = () => data.concerts.filter((event) => {
    if (event) {
      const date = new Date(stringToDate(event ? event.startDate : ''));
      const today = new Date();
      return date >= today;
    }
  });

  const getPastEvents = () => data.concerts.filter((event) => {
    if (event) {
      const date = new Date(stringToDate(event ? event.startDate : ''));
      const today = new Date();
      return date < today;
    }
  });

  return (
    <>
      <Title title={data.concerts[0].pageTitle} />
      <div className="lg:w-[900px] xl:w-[1200px] w-full mx-auto">
        {data && getActualEvents()?.map((event, index) => (
          <React.Fragment key={`actual-${index}`}>
            {event.active === '1' && (
              <EventItem
                data={data.concerts[index]}
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
                  data={data.concerts[index]}
                  isPast={true}
                />
              )}
            </React.Fragment>
        ))}
      </div>
    </>
  );
};

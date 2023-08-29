import scrollToId from '@/helpers/scrollToId';
import UpcomingEventsWrapper from './UpcomingEventsWrapper';
import Title from './Title';
import IConcerts from '@/interfaces/IConcerts';
import IData from '@/interfaces/IData';

async function UpcomingEvents({ data } : { data: IData}) {

  const eventData: IConcerts[] = data.concerts;
  const eventLimit = 6;

  // await console.log(eventData)

  const stringToDate = (date: string | undefined) => {
    if (date) {
      const dateArray = date.split('.');
      return `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
    }
    return '1900.01.01';
  };

  async function comingEventsData() {
    return await Object.keys(eventData)
      .filter((eventKey) => {
        const date = new Date(stringToDate(eventKey));
        const today = new Date();
        return date >= today;
    })
    .map((eventKey: any) => eventData[eventKey]);
  };

  async function onClickEventHandler(eventId: string) {
    scrollToId(`event-main-${eventId}`);
  };

  const eventsdata = await comingEventsData();

  return (
    <>
      <UpcomingEventsWrapper>
        <div className="lg:hidden">
          <Title title="Upcoming Concerts" id="concerts" />
        </div>
        <h3 className="text-xl lg:block hidden">Upcoming Concerts:</h3>
        <ul className="mt-2">

          {eventsdata.map((event: any, index: number) => {
            const date = new Date(stringToDate(event.startDate));
            const today = new Date();
            console.log({ event })
            if (index < eventLimit && date >= today) {
              return (
                <li className="group text-sm mt-5 cursor-pointer" key={`event-hero-${index}`} onClick={() => onClickEventHandler(event.id)}>
                  {/* Title */}
                  <p className="group-hover:text-secondary transition-all ease-in-out duration-200">
                    <span className="text-xl font-bold uppercase">{event.title}</span>
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
                  {index < eventLimit - 1 && <hr className="mt-4 opacity-40" />}
                </li>
              );
            }
          })}

        </ul>
        <div className="w-full">
          {/* <button onClick={() => scrollToId('concerts')} className="btn btn-secondary btn-sm mt-6">
            see all events
          </button> */}
        </div>
      </UpcomingEventsWrapper>
    </>
  );
};

export default UpcomingEvents;
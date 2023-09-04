import React from 'react';
import MapIco from '@/assets/icos/MapIco';
import IConcerts from '@/interfaces/IConcerts';

const EventItem = ({ data, isPast } : {data: IConcerts, isPast: boolean }) => {

  const getDay = (date: string) => date.toString().slice(0, 2);
  const getYear = (date: string) => date.toString().slice(6, 10);

  const getDayOfWeek = (date: string) => {
    const day = date.toString().slice(0, 2);
    const month = date.toString().slice(3, 5);
    const year = date.toString().slice(6, 10);
    const dateObj = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = dateObj.toLocaleString('de', { weekday: 'short' });
    return dayOfWeek;
  };

  const getNameOfMonth = (date: string) => {
    const day = date.toString().slice(0, 2);
    const month = date.toString().slice(3, 5);
    const year = date.toString().slice(6, 10);
    const dateObj: any = new Date(`${year}-${month}-${day}`);
    const monthName = dateObj.toLocaleString('de', { month: 'long' });
    return monthName;
  };

  return (
    <>
      <div className="relative cursor-default lg:pt-[80px] pt-0 lg:pb-[30px] pb-[30px]" id={`event-main-${data.id}`}>
        <div className="sm:flex sm:flex-row mx-auto max-w-[900px]">
          {/* DATE */}
          <div className={`relative pt-3 lg:w-[50px] sm:pl-2 ${isPast ? 'sm:border-gray-400' : 'border-primary'} sm:border-l-[25px] sm:border-b-[0px] sm:rounded-[10px] sm:min-h-[8rem] text-center`}>
            <div className="sm:w-[140px] mx-auto text-center sm:text-left">
              <div className="absolute inline-block origin-center -rotate-90 text-xl -left-[37px] text-white top-[50%] -translate-y-[50%] ">
                {getYear(data.startDate)}
              </div>

              {/* Start date */}
              <div className="sm:flex">
                {/* Date-Desktop */}
                <div className="hidden sm:block">
                  <div className="uppercase text-[1.3rem]">
                    {getDayOfWeek(data.startDate)}
                  </div>
                  <div className="text-[2.7rem] font-extrabold leading-[2.5rem]">
                    {getDay(data.startDate)}
                  </div>
                  <div className="text-[1.3rem]">
                    {getNameOfMonth(data.startDate)}
                  </div>
                  {/* Time */}
                  <p className="whitespace-nowrap text-[1.3rem]">
                    <span className="leading-17 mb-2">{data.startTime}</span>
                  </p>
                </div>

                {/* End date */}
                {data.endDate &&
                  <div className="grow hidden sm:block">
                    <div className="uppercase text-[1rem] text-right">
                      {getDayOfWeek(data.endDate)}
                    </div>
                    <div className="text-[1.9rem] font-extrabold leading-[1.7rem] text-right whitespace-nowrap">
                      <span className="mr-[4px]">-</span>{getDay(data.endDate)}
                    </div>
                    <div className="text-[1rem] text-right">
                      {getNameOfMonth(data.endDate)}
                    </div>
                  </div>}
              </div>
            </div>
          </div>
          {/* TEXTS */}
          <div className="sm:ml-6 py-4 lg:ml-[150px] sm:text-left text-center max-w-[900px]">
            {/* Band and Title */}
            <h3 className={`text-3xl uppercase font-semibold ${isPast ? 'border-gray-400' : 'border-primary'} border-b-[5px] sm:border-none pb-2`}>{data.titleEn}</h3>
            <h3 className="text-2xl font-semibold sm:mb-0 mb-2 mt-2">
              {!data.bandLink ? data.band :
                <a className="text-secondary font-semibold hover:underline" href={data.bandLink} target="_blank">{data.band}</a>
              }
            </h3>

            {/* Date-Mobile */}
            <div className="text-[2rem] mt-0 sm:hidden block w-[90vw] mx-auto">
              {data.startDate}{data.endDate && <span className="ml-2">-</span>} {data.endDate
                ? data.endDate
                : ''}
            </div>

            <div className="mb-2">

              {/* Time */}
              {data.startTime &&
                <div className="relative h-[1.6rem] my-2.5 sm:mt-0 sm:hidden">
                  <div className="absolute left-[50%] -translate-x-[50%] sm:left-0 sm:translate-x-0">
                    {/* <div className="flex">
                      <div className="translate-y-[1px]">
                        <ClockIco />
                      </div> */}
                    <span className="text-2xl">{data.startTime}</span>
                    {/* </div> */}
                  </div>
                </div>
              }

              {/* Location */}
              {data.location &&
                <div className="min-h-[2rem] font-extralight mt-4 mb-5 mx-auto">
                  <div className="inine-block">
                    <div className="">
                      {!data.locationLink ?
                        // Text only
                        <>
                          <div className="inline-block translate-y-[5px]">
                            <MapIco />
                          </div>
                          <span className="text-2xl ml-3">{data.location}</span>
                        </>
                        :

                        // Link
                        <>
                          <div className="inline-block translate-y-[5px]">
                            <MapIco />
                          </div>
                          <a href={data.locationLink} className="text-2xl text-secondary hover:underline translate-y-[5px]" target="_blank">
                            <span className="ml-3">{data.location}</span>
                          </a>
                        </>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>

            {/* Category */}
            <div className={`badge text-sm ${isPast ? 'bg-gray-400 border-gray-400' : 'badge-primary'} rounded-full font-semibold`}>{data.categoryEn}</div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EventItem;
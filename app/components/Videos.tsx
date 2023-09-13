// import React, { useContext, useEffect, useState } from 'react';
import YoutubeVideo from './YoutubeVideo';
import Title from './Title';
import IVideos from '../../interfaces/IVideos';
import IData from '@/interfaces/IData';

const Videos = ({ data }: { data: IData; }) => {

  return (
    <>
      <Title title="Videos" id="videos" className="pb-20" />

      <div className="flex flex-row overflow-auto max-h-[800px] pb-20 mb-10 md:px-4">
        {data.videos.map((item: IVideos, index: number) => {
          return (

            <div className="mx-5" key={`video-${index}`}>

              {/* Video */}
              <YoutubeVideo
                key={`video-${index}`}
                youtubeId={item.youtubeId}
                quality={item.quality}
              />

              {/* Title */}
              <p className="text-2xl font-semibold mt-2">{item.title}</p>

              {/* Band */}
              {item.band && (
                item.bandLink === undefined ? <p className="text-lg mt-2">{item.band}</p> :
                  <a className="text-primary" href={item.bandLink} target="_blank">
                    <p className="text-lg mt-2">{item.band}</p>
                  </a>
              )}

              {/* Description */}
              {item.description && <p className="text-sm mt-2">{item.description}</p>}

            </div>
          );
        })}
      </div>    
    </>
  );

};

export default Videos;
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import { Credit, Movie } from '../types';
import Card from './cards/Card';
import CastCard from './cards/CastCard';

type Props = {
  title: string;
  description: string;
  movies?: Movie[];
  cast?: Credit["cast"][];
}

const Carousel: FC<Props> = ({ title, description, movies, cast }) => {
  const router = useRouter();
    
  useEffect(()=>{
    handleLeave();
  },[router.pathname])

  // DISABLING BODY SCROLL AFTER ENTERING CAROUSEL
  const handleEnter = () => {
    const html = document.querySelector('html');
    if (html) html.style.overflowY = 'hidden';
  };

   // ACTIVATING BODY SCROLL AFTER LEAVING CAROUSEL
  const handleLeave = () => {
    const html = document.querySelector('html');
    if (html) {
      html.style.overflowY = 'auto';
      html.style.overflowX = 'hidden';
    };
  };

  // HORIZONTAL SCROLL
  const horizontalScroll = (e: any) => {
    const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)));
    e.currentTarget.scrollLeft -= (delta * -100);
  };

  return (
    <div className='bg-neutral-900 font-bold relative' >
      <div className='pt-8 pl-6 pb-1'>
        <h2 className='text-3xl mr-3 inline'>{title}</h2>
        <span className='text-neutral-500 text-xl hidden md:inline'>{description}</span>
      </div>
      <div
        className='flex overflow-y-hidden overflow-x-scroll scrollbar-hide whitespace-nowrap py-8 mx-6'
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onWheel={horizontalScroll}
      >
        {
          movies
            ?
            movies?.map((movie, index) => {
              return <Card movie={movie} key={index} />
            })
            :
            cast?.map((actor, index) => {
              return <CastCard actor={actor} key={index} />
            })
        }
      </div>
      <div className="absolute right-0 top-0 bg-gradient-to-l from-neutral-900 h-full w-16" />
    </div>
  )
}

export default Carousel;
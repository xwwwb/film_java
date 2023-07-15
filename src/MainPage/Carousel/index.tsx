/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import './index.css';
import { LeftOutlined, RightOutlined,PauseCircleOutlined,PlayCircleOutlined } from '@ant-design/icons';
import Circle from './circle';
import { useEffect, useState, useRef } from 'react';
import { Carousel as CarouselImage } from './type';
import image1 from '../../assets/carousel/image1.jpg'
import image2 from '../../assets/carousel/image2.jpg'
import image3 from '../../assets/carousel/image3.jpg'

const carousels: Array<CarouselImage> = [
  {
    id: 1,
    name: 'carousel1',
    url: image1
  },
  {
    id: 2,
    name: 'carousel1',
    url: image2
  },
  {
    id: 3,
    name: 'carousel1',
    url: image3
  }
];
function useInterval(callback: any, timeout = 1000) {
  const latestCallback = useRef(() => {});

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    const timer = setInterval(() => latestCallback.current(), timeout);
    return () => clearInterval(timer);
  }, []);
}

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [stopCarousel, setStopCarousel] = useState<boolean>(false);
  const handleSwitch = (
    e: number | React.MouseEvent<HTMLElement>,
    flag = 1
  ) => {
    let index = 0;
    if (flag == 0 && stopCarousel == true) {
      return;
    }
    const size = carousels.length;
    if (typeof e === 'object') {
      const element = e.target as HTMLElement;
      if (element.dataset.index) {
        index = parseInt(element.dataset.index);
      } else {
        return;
      }
    } else {
      index = e;
    }
    if (index === -1) {
      index = carouselIndex - 1;
      if (index < 0) {
        index = size - 1;
      }
    } else if (index === -2) {
      index = carouselIndex + 1;
      if (index >= size) {
        index = 0;
      }
    }
  
    setCarouselIndex(index);
    if (flag == 1) {
      setStopCarousel(true);
    }
  };

  useInterval(() => {
    handleSwitch(-2, 0);
  }, 3000);

  return (
    <div id='carousel' >
      <div className="carousel-contents">
        {carousels.map((item: CarouselImage, index: number) => {
          return (
            <div
              key={index}
              className="carousel-content"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: 'opacity 0.5s ease-in-out',
                opacity: carouselIndex === index ? 1 : 0,
                backgroundImage : 'url('+item.url+')',
                backgroundSize:'cover'
              }}></div>
          );
        })}
      </div>
      <div className="carousel-pages">
        <LeftOutlined
          onClick={() => {
            handleSwitch(-1);
          }}
          className="carousel-pages-left"
          style={{ color: '#1F2937', marginRight: '50px', cursor: 'pointer' }}
        />

        <div onClick={handleSwitch} style={{ display: 'flex' }}>
          {carousels.map((item: CarouselImage, index: number) => {
            if (index === carouselIndex) {
              return <Circle key={index} fill={true} index={index} />;
            } else {
              return <Circle key={index} fill={false} index={index} />;
            }
          })}
        </div>

        <RightOutlined
          onClick={() => {
            handleSwitch(-2);
          }}
          className="carousel-pages-right"
          style={{ color: '#1F2937', marginLeft: '50px', cursor: 'pointer' }}
        />
      </div>
      <div className="carousel-auto">
        <div
          className="carousel-auto-switch"
          onClick={() => {
            setStopCarousel(!stopCarousel);
          }}>
          {stopCarousel ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import { Champion, Welcome, ChampionDetail, Trailer, Credit } from '../components/home-section';
import { championsData } from '../../src/assets/dummy';

SwiperCore.use([EffectFade, Mousewheel, Pagination]);

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000,
};

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>{({ isActive }) => <Welcome isActive={isActive} />}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Champion isActive={isActive}></Champion>}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Trailer isActive={isActive}></Trailer>}</SwiperSlide>
                <SwiperSlide>{({ isActive }) => <Credit isActive={isActive}></Credit>}</SwiperSlide>
            </Swiper>

            {championsData.map((item, index) => {
                return <ChampionDetail id={index} item={item} key={index} />;
            })}
            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>
        </>
    );
};

export default Home;

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Mousewheel, Pagination } from 'swiper';

import { Champion, Welcome } from '../components/home-section';

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
            </Swiper>
        </>
    );
};

export default Home;

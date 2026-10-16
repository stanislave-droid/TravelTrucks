"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import css from "./TruckGallery.module.css";
import { useState } from "react";
import Image from "next/image";
import { ITruckImage } from "@/types/truck";
import clsx from "clsx";

interface TruckGalleryProps {
  images: ITruckImage[];
}

export default function TruckGallery({ images }: TruckGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={css.galleryWrapper} aria-label="Truck gallery">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        className={css.originalSwiper}
        spaceBetween={32}
        aria-label="Gallery image"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.original}
              alt={`Image-${image.order}`}
              className={css.originalImage}
              width={638}
              height={505}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={32}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className={css.thumbsSwiper}
        aria-label="Gallery thumb images"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.thumb}
              alt={`Image-thumb-${image.order}`}
              className={clsx(
                css.thumbImage,
                activeSlide == image.order - 1 ? css.activeThumb : "",
              )}
              width={136}
              height={144}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

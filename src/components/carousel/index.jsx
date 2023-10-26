import { Carousel } from "@material-tailwind/react";

export function CarouselImage() {
  return (
    <Carousel loop>
      <img
        src="https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg"
        alt="bkphoto1"
        className="w-full h-[594px] object-cover"
      />
      <img
        src="https://bkdelivery.co.id/media/slider_image/2023/7/24/a8kveqzmfbctuhwwgwmjni.jpg"
        alt="bkphoto2"
        className="w-full h-[594px] object-cover"
      />
      <img
        src="https://bkdelivery.co.id/media/slider_image/2023/8/3/ijzniet93cwzputznoevuh.jpg"
        alt="bkphoto3"
        className="w-full h-[594px] object-cover"
      />
    </Carousel>
  );
}

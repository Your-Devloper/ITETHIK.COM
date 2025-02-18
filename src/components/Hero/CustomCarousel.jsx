import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay';

export default function CustomCarousel() {
    
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <div className='w-full h-screen flex justify-center items-center -mt-16'>
            <Carousel className="w-full h-max" plugins={[plugin.current]}>
                <CarouselContent>

                    <CarouselItem>
                        <Card className={'w-full h-full border-none shadow-none'}>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="https://i.pinimg.com/originals/a9/06/67/a90667f0d5a9adb6b73ab9163e7f7ef3.gif" className="w-full h-full object-cover rounded-lg" />
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem>
                        <Card className={'w-full h-full border-none shadow-none'}>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="https://i.pinimg.com/736x/40/39/ea/4039ea54530713ee7c65e39b2b38396a.jpg" className="w-full h-full object-cover rounded-lg" />
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem>
                        <Card className={'w-full h-full border-none shadow-none'}>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="https://i.pinimg.com/736x/4e/c0/9e/4ec09e63e18939eefe509a1a4b33dbb1.jpg" className="w-full h-full object-cover rounded-lg" />
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem>
                        <Card className={'w-full h-full border-none shadow-none'}>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src="https://i.pinimg.com/736x/de/cc/64/decc6467da6ebcff34f87ab976c9748e.jpg" className="w-full h-full object-cover rounded-lg" />
                            </CardContent>
                        </Card>
                    </CarouselItem>

                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>
        </div>
    )
}
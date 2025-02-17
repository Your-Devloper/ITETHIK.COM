import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from './ui/card'
import Autoplay from 'embla-carousel-autoplay';

const OurSolutions = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <div className='h-[92vh] w-full border-b text-[#31ADDB] px-28 py-20'>
            <Carousel className="w-full" plugins={[plugin.current]}>
                <CarouselPrevious />
                <CarouselNext />
                <div className='text-4xl font-extrabold mb-6'>Our Solutions</div>
                <p className='text-gray-600 w-1/2 mb-10 text-base/7'>Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>

                <CarouselContent className="-ml-1">

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square justify-center pt-15 px-8">
                                    <img src="/computer.svg" className="w-20 h-20 mb-4 bg-[#31ADDB] p-2 rounded" />
                                    <div className='text-4xl font-extrabold mb-4'>Desktop, Laptop Repair Services</div>
                                    <p className='text-gray-600 text-base/7 mb-10 '> Expert desktop and laptop repair services to ensure optimal performance, reliability, and functionality of your devices,
                                        helping you stay productive without disruptions or technical issues.  </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square justify-center pt-15 px-8">
                                    <img src="/computer.svg" className="w-20 h-20 mb-4 bg-[#31ADDB] p-2 rounded" />
                                    <div className='text-4xl font-extrabold mb-4'>Desktop, Laptop Repair Services</div>
                                    <p className='text-gray-600 text-base/7 mb-10 '> Expert desktop and laptop repair services to ensure optimal performance, reliability, and functionality of your devices,
                                        helping you stay productive without disruptions or technical issues.  </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square justify-center pt-15 px-8">
                                    <img src="/computer.svg" className="w-20 h-20 mb-4 bg-[#31ADDB] p-2 rounded" />
                                    <div className='text-4xl font-extrabold mb-4'>Desktop, Laptop Repair Services</div>
                                    <p className='text-gray-600 text-base/7 mb-10 '> Expert desktop and laptop repair services to ensure optimal performance, reliability, and functionality of your devices,
                                        helping you stay productive without disruptions or technical issues.  </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col aspect-square justify-center pt-15 px-8">
                                    <img src="/computer.svg" className="w-20 h-20 mb-4 bg-[#31ADDB] p-2 rounded" />
                                    <div className='text-4xl font-extrabold mb-4'>Desktop, Laptop Repair Services</div>
                                    <p className='text-gray-600 text-base/7 mb-10 '> Expert desktop and laptop repair services to ensure optimal performance, reliability, and functionality of your devices,
                                        helping you stay productive without disruptions or technical issues.  </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>

                </CarouselContent>

            </Carousel>
        </div>
    )
}

export default OurSolutions
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function ProductsGrid() {
    return (
        <>
            <Carousel>
                <CarouselContent className="m-2 space-x-2">

                    <Card className="m-2 space-x-2">
                        <div className="h-auto mb-4 w-full flex flex-col md:flex-row md:full">

                            <div className="h-full w-full grid gap-4 md:w-1/2">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                                </div>
                                <div className="grid grid-cols-5 gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="h-full w-full md:w-1/2">
                                <CardTitle>HDPE PIPES</CardTitle>
                                <CardDescription>
                                    Card Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quam, voluptates aliquam pariatur aperiam animi beatae corrupti quidem labore! Odit magni iste beatae possimus similique asperiores vel debitis eligendi sed.
                                </CardDescription>
                                <CardDescription className="flex space-x-2 pb-4">
                                    <Badge variant={"secondary"}>IS-4334</Badge>
                                </CardDescription>

                                <CardTitle>Silent Features</CardTitle>
                                <ul className="list-disc list-inside">
                                    <li >domer asdf af </li>
                                    <li>jkbkj  uh j hygf klhg ,j liu</li>
                                    <li> guyui jli j iuygt f, ; ijho t</li>
                                    <li>uyft  trd gfchbv hytyik jhgfoi loiy98 </li>
                                    <li>o 78trr hgm,. bxr fdxl</li>
                                    <li>adsfd gfdsdkj ytrre v</li>
                                </ul>
                            </CardHeader>

                        </div>

                        <div>
                            <div className="flex flex-col justify-center md:flex-row gap-4">
                                <Card className="p-4 min-w-1/2">
                                    <CardTitle>Material</CardTitle>
                                    <CardDescription>
                                        <ul className="list-disc list-inside ">
                                            <li>avxv</li>
                                            <li>dsad </li>
                                            <li>dsdfs</li>
                                            <li>hjhgj</li>
                                        </ul>
                                    </CardDescription>
                                </Card>

                                <Card className="p-4">
                                    <CardTitle>Pressure</CardTitle>
                                    <CardDescription>
                                        <ul className="list-disc list-inside">
                                            <li>avxv</li>
                                            <li>dsad </li>
                                            <li>dsdfs</li>
                                        </ul>
                                    </CardDescription>
                                </Card>

                                <Card className="p-4">
                                    <CardTitle>Range</CardTitle>
                                    <CardDescription>20mm - 200mm</CardDescription>
                                </Card>
                            </div>
                        </div>


                        <CardFooter>
                            <Button>btn</Button>
                        </CardFooter>
                    </Card>




                </CarouselContent>
            </Carousel>








        </>
    )
}
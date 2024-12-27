import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";

export function ProductsGrid() {
    const products = {
        1: {
            id: 1,
            name: "HDPE PIPE",
            bis: "IS: 4984:2016",
            description:
                "HDPE Pipes are manufactured from virgin prime-grade HDPE (High-Density Polyethylene) as per BIS specifications (IS: 4984:2016). They are used all over the world for applications such as water mains, gas mains, sewer mains, slurry transfer lines, rural irrigation, fire systems, etc.",
            imageUrls: ["./images/hdpe5.png", "./images/hdpe2.png", "./images/hdpe3.png", "./images/hdpe4.png", "./images/hdpe1.png"],
            minRange: 20,
            maxRange: 200,
            material: ["PE-63", "PE-80", "PE-100"],
            pressure: ["2.5", "4", "6", "8", "10"],
            silentFeatures: [
                "High durability and long lifespan.",
                "Corrosion and chemical resistance.",
                "Lightweight and easy to install.",
                "Flexible, reducing the risk of cracking under pressure.",
                "Cost-effective and low maintenance.",
                "Eco-friendly and recyclable material.",
                "Excellent hydraulic properties for smooth flow.",
            ],
        },
        2: {
            id: 2,
            name: "SPRINKLER IRRIGATION SYSTEM",
            bis: "IS: 17425",
            description:
                "Sprinkler irrigation is an efficient method of delivering water to crops through a system of pipes, pumps, and sprinklers. The Indian Standard IS-17425 specifies the guidelines and requirements for the design, installation, and maintenance of sprinkler irrigation systems, ensuring optimal water management in agricultural practices.",
            imageUrls: ["", ""],
            minRange: 20,
            maxRange: 140,
            material: ["PE-63"],
            pressure: ["2.5", "3.2"],
            silentFeatures: [
                "High durability and long lifespan.",
                "Simple setup Lightweight and easy to install.",
                "Prevents soil erosion by distributing water gently",
                "Cost-effective and low maintenance.",
                "Suitable for various crops, soil types, and terrains.",
                "Ensures uniform water distribution, reducing water wastage.",
            ],
        },
        3: {
            id: 3,
            name: "MINI SPRINKLER SYSTEM",
            bis: "IS: 12786:1989",
            description:
                "The Mini Sprinkler Irrigation System is specifically designed for agricultural use and offers efficient and reliable irrigation solutions. Crafted from 100% premium polyethylene granules, it meets the stringent quality standards outlined in IS: 12786 - 1989, ensuring exceptional performance and durability.",
            imageUrls: ["", ""],
            minRange: 20,
            maxRange: 140,
            material: ["PE-63"],
            pressure: ["0.2", "0.4"],
            silentFeatures: [
                "Uniform water distribution for efficient irrigation.",
                "Reduces water wastage and soil erosion.",
                "Lightweight and easy to install.",
                "Cost-effective and energy-efficient",
                "Lightweight and easy to install.",
                "Cost-effective and low maintenance.",
                "Supports fertigation for better crop growth.",
            ],
        },
        4: {
            id: 4,
            name: "MDPE Pipes",
            bis: "IS: 4227",
            description:
                "MDPE Pipes are manufactured from virgin prime-grade MDPE (Medium-Density Polyethylene) as per BIS specifications (IS: 4427). The piping system is designed for water supply applications, including the transportation of raw water for treatment, potable water for human consumption, and water for general use.",
            imageUrls: ["", ""],
            minRange: 20,
            maxRange: 140,
            material: ["PE-80", "PE-100"],
            pressure: ["4", "5", "6", "8", "10"],
            silentFeatures: [
                "Ensures water is safe for human consumption.",
                "Built to withstand diverse environmental conditions.",
                "Cost-effective and energy-efficient.",
                "Long service life with minimal upkeep required.",
                "Prevents contamination and maintains water quality.",
            ],
        },
    };



    return (
        <div>

            {Object.values(products).map((product) => (
                <Card key={product.id} className="mx-2 my-8 space-x-2">
                    <div className="h-auto mb-4 w-full flex flex-col md:flex-row md:full">

                        {/* Product Images */}
                        <div className="h-full w-full grid gap-4 md:w-1/2">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src={product.imageUrls[0] || "https://via.placeholder.com/300"} // Fallback image
                                    alt={product.name}
                                />
                            </div>
                            <div className="flex gap-4">
                                {product.imageUrls.slice(1).map((url, index) => (
                                    <div key={index}>
                                        <img
                                            className="h-[100px] max-w-full rounded-lg"
                                            src={url || "https://via.placeholder.com/100"} // Fallback image
                                            alt={`Thumbnail ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Details */}
                        <CardHeader className="h-full w-full md:w-1/2">
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                            <CardDescription className="flex space-x-2 pb-4">
                                <Badge variant={"secondary"}>{product.bis}</Badge>
                            </CardDescription>

                            <CardTitle>Silent Features</CardTitle>
                            <ul className="list-disc list-inside">
                                {product.silentFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </CardHeader>
                    </div>

                    {/* Additional Details */}
                    <div>
                        <div className="flex flex-col justify-center md:flex-row gap-4">
                            <Card className="p-4 min-w-1/2">
                                <CardTitle>Material</CardTitle>
                                <CardDescription>
                                    <ul className="list-disc list-inside">
                                        {product.material.map((material, index) => (
                                            <li key={index}>{material}</li>
                                        ))}
                                    </ul>
                                </CardDescription>
                            </Card>

                            <Card className="p-4">
                                <CardTitle>Pressure</CardTitle>
                                <CardDescription>
                                    <ul className="list-disc list-inside">
                                        {product.pressure.map((pressure, index) => (
                                            <li key={index}>{pressure} bar</li>
                                        ))}
                                    </ul>
                                </CardDescription>
                            </Card>

                            <Card className="p-4">
                                <CardTitle>Range</CardTitle>
                                <CardDescription>
                                    {product.minRange}mm - {product.maxRange}mm
                                </CardDescription>
                            </Card>
                        </div>
                    </div>

                    {/* Footer */}
                    <CardFooter>
                        <Button>View Details</Button>
                    </CardFooter>
                </Card>
            ))}

        </div>
    );
}

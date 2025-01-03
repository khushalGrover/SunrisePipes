import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from "react-router-dom";

export default function CTASection() {
const handleGetStarted = () => {
    // code to redirect to product page by using link from routes

}

    return (
        <section className="bg-primary py-16 md:py-24 z-[10]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-montserrat font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                        Ready to Revolutionize Your Piping Solutions?
                    </h2>
                    <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                        Discover high-quality, durable, and sustainable HDPE pipes and irrigation systems tailored to meet your needs. Let us help you build a better future today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                            <Link to="/products">
                            Get Started
                            </Link>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="bg-primary text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Contact Sales
                            <Phone className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}


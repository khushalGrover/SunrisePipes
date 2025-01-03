import { Card} from '@/components/ui/card'

export default function HeroLanding() {

  return (

    <main>
      <section className="hero-section text-center h-screen w-full flex-1 flex flex-col items-center justify-end z-100">
        <p className="text-xl text-primary-foreground mb-2">Welcome to</p>
        <h1 className="text-3xl font-montserrat font-extrabold text-gray-900 mb-24 md:text-5xl">
          <span className="text-yel">Sunrise</span>
          <span className="text-ora">Pipes</span>
          <span className="text-blu">.in</span>
        </h1>
      </section>

      <section className="text-center w-full flex-1 flex items-center justify-center flex-col product-logo-section bg-primary ">

        <div className="grid grid-cols-3 gap-4">

          <picture className="w-auto">
            <img src="./deo-plast.png" className="w-auto max-h-[100px]" alt="Brand Products" />
          </picture>
          <picture className="w-auto">
            <img src="./flowline.png" className="w-auto max-h-[100px]" alt="Brand Products" />
          </picture>
          <picture className="w-auto">
            <img src="./jal-skati.png" className="w-auto max-h-[100px]" alt="Brand Products" />
          </picture>
        </div>
        <h1 className="text-xl font-montserrat font-extrabold mb-4 md:text-2xl">
          <span className="text-yel">Our</span>
          <span className="text-ora"> Brands</span>
        </h1>
      </section>

      <section className="text-center w-full flex-1 flex items-center justify-center flex-col">
        <h1 className="text-xl font-montserrat font-extrabold mb-4 md:text-2xl">
          <span className="text-yel">About</span>
          <span className="text-ora"> us</span>
        </h1>
        <p className="text-primary/80 mb-2">
          At Sunrise Pipe Private Limited, we are dedicated to delivering cutting-edge piping solutions that drive innovation and sustainability. Established in February 2024, we build on the solid foundation of our parent company, SHIV SHAKTI PIPE UDYOG, which has been a pioneer in plastic manufacturing since 1992..
        </p>
        <p className="text-primary/80 mb-2">
          Join us in our journey to create sustainable and efficient piping solutions for a better tomorrow.
        </p>
      </section>

      <section className="text-center w-full flex-1 flex items-center justify-center flex-col choose-us-section">
        <h1 className="text-xl font-montserrat font-extrabold mb-4 md:text-2xl">
          <span className="text-yel">Why</span>
          <span className="text-ora"> Choose Us</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
          <Card className="flex flex-col max-w-5xl p-2 items-center">
            <img src="https://placehold.co/100x100" alt="Reliability" />
            <p className="text-blu font-semibold text-lg mb-1">3 Decades of Experience</p>
            <p>We bring 3 decades of experience inherited from our parent company, SHIV SHAKTI PIPE UDYOG, ensuring unmatched expertise and reliability.</p>
          </Card>
          <Card className="flex flex-col max-w-5xl p-2 items-center">
            <img src="https://placehold.co/100x100" alt="Quality" />
            <p className="text-blu font-semibold text-lg mb-1">Advanced Techniques</p>
            <p>Our advanced manufacturing techniques utilize state-of-the-art technology to produce high-quality HDPE pipes and accessories that meet industry standards.</p>
          </Card>
          <Card className="flex flex-col max-w-5xl p-2 items-center">
            <img src="https://placehold.co/100x100" alt="Durability" />
            <p className="text-blu font-semibold text-lg mb-1">Durability</p>
            <p>We rigorously test every product to guarantee durability, efficiency, and superior performance, making us a trusted partner for all your piping solutions.</p>
          </Card>
        </div>
      </section>

      {/* <section className="text-center w-full flex-1 flex items-center justify-center flex-col">
        <h1 className="text-xl font-montserrat font-extrabold mb-4 md:text-2xl">
          <span className="text-yel">Our</span>
          <span className="text-ora"> History</span>
        </h1>
        <p className="text-xl text-primary/80 mb-2"><span className="text-blu font-bold"> Sunrise Pipes Private Limited</span> was established in <span className="text-blu font-bold"> February 2024</span>, building on the strong foundation laid by our parent company, <span className="text-blu font-bold"> SHIV SHAKTI PIPE UDYOG</span>, which has been a leader in plastic manufacturing since <span className="text-blu font-bold"> 1992</span>. With over three decades of expertise, our journey reflects a commitment to innovation, quality, and customer satisfaction.</p>
      </section> */}

    </main>

  );
}

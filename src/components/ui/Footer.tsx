import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-primary-foreground text-primary/70">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-lg text-primary font-semibold">Sunrise Pipes Private Limited</h3>
                        <p className="text-sm">
                            Leading the industry in innovative pipe solutions since 1985. Quality, durability, and customer satisfaction
                            are at the core of everything we do.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-primary">Quick Links</h4>
                        <nav className="flex flex-col space-y-2 text-sm">
                            <Link className="hover:underline" to="/">
                                Home
                            </Link>
                            <Link className="hover:underline" to="/products">
                                Products
                            </Link>
                            <Link className="hover:underline" to="/brochure">
                                Brochure
                            </Link>
                            <Link className="hover:underline" to="/contact">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase text-primary">Contact Us</h4>
                        <address className="text-sm not-italic">
                            <p>Ghiloth Industrial Area Neemrana, </p>
                            <p>Rajasthan 12345</p>
                            <p>India</p>
                            <p className="mt-2">Phone: +91 90574-81000</p>
                            <p>Email: info@sunrisepipes.in</p>
                        </address>
                    </div>
                    {/* <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Newsletter</h4>
            <p className="mb-2 text-sm">Stay updated with our latest products and news</p>
            <form className="flex flex-col space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </form>
          </div> */}
                </div>
                <hr className="my-8" />
                <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-center text-sm">© 2024 Sunrise Pipes Private Limted. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-primary/70 hover:text-blu">
                            <Facebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link to="#" className="text-primary/70 hover:text-blu">
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link to="#" className="text-primary/70 hover:text-blu">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link to="#" className="text-primary/70 hover:text-blu">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}


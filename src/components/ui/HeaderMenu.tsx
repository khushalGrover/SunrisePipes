import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Switch } from "@/components/ui/switch"

const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/gallery", label: "Gallery" },
        { href: "/brochure", label: "Brochure" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    // function handleToggleTheme() {
    //     // code of toggling theme
    // }
    return (
        <header className="fixed top-0 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[100]">
            <div className="flex h-14 w-full items-center">
                <div className="hidden md:flex w-full justify-around">
                    <Link to="/" className="mr-6 flex items-center space-x-2">
                        <span className="text-2xl font-bold">
                            <span className="text-yel">Sunrise</span>
                            <span className="text-ora">Pipes</span>
                            <span className="text-blu">.in</span>
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {item.label}
                            </Link>
                        ))}
                        

                        {/* <Switch id="theme-mode" onCheckedChange={handleToggleTheme} /> */}
                    </nav>
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0 z-[101]">
                        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                            <span className="text-2xl font-bold">
                                <span className="text-yel">Sunrise</span>
                                <span className="text-ora">Pipes</span>
                                <span className="text-blu">.in</span>
                            </span>
                        </Link>
                        <nav className="mt-6 flex flex-col space-y-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Link to="/" className="mr-6 flex items-center justify-around space-x-2 md:hidden">
                            <span className="text-2xl font-bold">
                                <span className="text-yellow-500">Sunrise</span>
                                <span className="text-orange-500">Pipes</span>
                                <span className="text-blue-500">.in</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export { HeaderMenu }; // Export HeaderMenu
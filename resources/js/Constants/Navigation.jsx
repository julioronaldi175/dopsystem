export const navLinks = [
    { label: "Home", href: route("home"), routeName: "home" },
    {
        label: "Layanan",
        href: "#",
        routeName: "landing.services",
        subLinks: [
            { label: "Konten Reels", href: "#", routeName: "landing.about" },
            {
                label: "Digital Marketing",
                href: "#",
                routeName: "landing.about",
            },
            { label: "Desain Logo", href: "#", routeName: "landing.about" },
            {
                label: "Website Development",
                href: "#",
                routeName: "landing.about",
            },
        ],
    },
    {
        label: "Harga",
        href: route("landing.pricing"),
        routeName: "landing.pricing",
    },
    {
        label: "Kontak",
        href: route("landing.contact"),
        routeName: "landing.contact",
    },
    {
        label: "Tentang Kami",
        href: route("landing.about"),
        routeName: "landing.about",
    },
];

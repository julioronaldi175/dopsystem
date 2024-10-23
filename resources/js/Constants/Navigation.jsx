export const navLinks = [
    { label: "Home", href: route("home"), routeName: "home" },
    {
        label: "Layanan",
        href: "#",
        routeName: "landing.services",
        subLinks: [
            {
                label: "Konten Reels",
                href: route("landing.services", 4),
                routeName: "landing.services",
            },
            {
                label: "Digital Marketing",
                href: route("landing.services", 1),
                routeName: "landing.services",
            },
            {
                label: "Desain Logo",
                href: route("landing.services", 3),
                routeName: "landing.services",
            },
            {
                label: "Website Development",
                href: route("landing.services", 2),
                routeName: "landing.services",
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

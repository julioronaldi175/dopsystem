export const navLinks = [
    { label: "Home", href: route("home") },
    {
        label: "Services",
        href: "#",
        subLinks: [
            { label: "Web Development", href: "#" },
            { label: "App Development", href: "#" },
        ],
    },
    { label: "Join Us", href: route("landing.joinus") },
    { label: "Contact", href: route("landing.contact") },
    { label: "About", href: route("landing.about") },
];

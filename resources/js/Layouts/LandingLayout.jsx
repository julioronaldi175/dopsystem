import LandingFooter from "@/Components/Landing/LandingFooter";
import LandingNavbar from "@/Components/Landing/LandingNavbar";
import { Head } from "@inertiajs/react";

export default function LandingLayout({ title = "DOP", children, props }) {
    return (
        <>
            <Head title={title} />
            <div className="overflow-x-hidden bg-gray-50">
                {/* Header / Navbar */}
                <LandingNavbar></LandingNavbar>

                <div className="px-2 bg-white">{children}</div>

                {/* Footer */}
                <LandingFooter></LandingFooter>
            </div>
        </>
    );
}

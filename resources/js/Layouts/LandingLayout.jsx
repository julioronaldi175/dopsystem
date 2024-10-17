import LandingNavbar from "@/Components/LandingNavbar";
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
                <section className="px-4 py-6 bg-gray-100 text-center select-none">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} {props.appCompany}. All
                        rights reserved.
                    </p>
                    {props.appAddress && (
                        <p className="text-gray-600 text-xs">
                            {props.appAddress}
                        </p>
                    )}
                </section>
            </div>
        </>
    );
}

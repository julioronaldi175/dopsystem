import LandingLayout from "@/Layouts/LandingLayout";

export default function BlogHome(props) {
    return (
        <>
            <LandingLayout props={props}>
                <section className="py-12">
                    <p className="font-bold text-center">
                        Saat blog masih dalam tahap pengembangan.
                    </p>
                </section>
            </LandingLayout>
        </>
    );
}

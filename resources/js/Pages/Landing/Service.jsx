import ServiceFeatures from "@/Components/Landing/ServiceFeatures";
import LandingLayout from "@/Layouts/LandingLayout";
import React from "react";

export default function Service(props) {
    const { service, features } = props;
    return (
        <LandingLayout props={props}>
            <div>
                <ServiceFeatures service={service} features={features} />
            </div>
        </LandingLayout>
    );
}

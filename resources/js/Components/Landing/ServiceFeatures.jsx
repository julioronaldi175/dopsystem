import {
    faCheckCircle,
    faEye,
    faHandHoldingUsd,
    faMoneyCheck,
    faShoppingCart,
    faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router } from "@inertiajs/react";
import React from "react";

const ServiceFeatures = ({ service, features }) => {
    const { name, description, image } = service;
    return (
        <section className="overflow-hidden bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                Layanan Kami
                            </h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {name}
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                {description}
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature, index) => (
                                    <div key={index} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="text-green-500 mr-2"
                                            ></FontAwesomeIcon>
                                            {feature.title}
                                        </dt>
                                        <dd className="ml-1 inline">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                            <button
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => {
                                    router.visit(route("landing.pricing"));
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faTags}
                                    className="mr-1"
                                ></FontAwesomeIcon>{" "}
                                Lihat Penawaran
                            </button>
                            <a
                                href={route("landing.contact")}
                                className="text-sm font-semibold leading-6 text-gray-700"
                            >
                                Tanyakan lebih lanjut
                                <span className="px-1" aria-hidden="true">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                    <img
                        src={`/storage/images/${image}`}
                        alt={name}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width="2432"
                        height="1442"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;

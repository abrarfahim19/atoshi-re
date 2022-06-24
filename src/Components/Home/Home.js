import React from "react";
import pitch from "../Props/Pitch meeting-bro.svg";
import analyze from "../Props/Analyze-bro.svg";
import analysis from "../Props/analysis.png";
import webdesign from "../Props/web-design.png";
import webdev from "../Props/coding.png";

const Home = () => {
    return (
        <div>
            <section class="text-gray-600 body-font bg-gray-100">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Empower Your Business with
                            <br class="hidden lg:inline-block" />
                            Cutting Edge Technology
                        </h1>
                        <p class="mb-4 leading-relaxed">
                            We are a team of competent Data Analysts, Web & App
                            Developers. We craft state of the art digital
                            solutions for your business, build beautiful
                            websites and turn your messy data into meaningful
                            stories.
                        </p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 p-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Get A Quote
                            </button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src={pitch}
                        />
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font bg-gray-100">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            class="object-cover object-center rounded"
                            alt="hero"
                            src={analyze}
                        />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">
                            About Atoshi
                        </h1>
                        <p class="mb-8 leading-relaxed">
                            Atoshi (আতশী), pronounced as Ātaśī is a Bengali word
                            means Magnifying Something. As the name suggests,
                            the aim of Atoshi Solutions is to understand your
                            business problem from deep down and craft such
                            digital solutions that you love
                        </p>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 bg-white body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                            What we cook in the house
                        </h2>
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Our top notch services
                        </h1>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            {/* <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="sm:w-16 sm:h-16 w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg> */}
                            <img src={analysis} width="80" alt="" />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                                Data Analysis
                            </h2>
                            <p class="leading-relaxed text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolores, quod!
                            </p>
                            <a class="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                                Web Design
                            </h2>
                            <p class="leading-relaxed text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Modi, magni.
                            </p>
                            <a class="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            {/* <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="sm:w-16 sm:h-16 w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg> */}
                            <img src={webdesign} width="80" alt="" />
                        </div>
                    </div>
                    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            {/* <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="sm:w-16 sm:h-16 w-10 h-10"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg> */}
                            <img src={webdev} width="80" alt="" />
                        </div>
                        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                                Web Development
                            </h2>
                            <p class="leading-relaxed text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. A, error?
                            </p>
                            <a class="mt-3 text-indigo-500 inline-flex items-center">
                                Learn More
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

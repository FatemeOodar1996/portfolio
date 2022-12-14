import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import soll from "../public/FatemeOodar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Soll Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white px-10 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 flex justify-between items-center">
                        <h1 className="text-xl font-burtons dark:text-white text-gray-700">Fateme Oodar</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => {
                                        setDarkMode(!darkMode);
                                        console.log("sdfghj");
                                    }}
                                    className=" dark:text-amber-200 text-gray-700 cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-white px-4 py-2 ml-8 text-center hover:bg-yellow-700"
                                    href="#">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center md:px-10 lg:px-80">
                        <h2 className="text-4xl dark:text-teal-500 text-teal-600 py-2 font-extrabold">Fateme Oodar</h2>
                        <h3 className="lg:text-2xl sm:text-md  py-2 font-bold text-gray-700 dark:text-gray-400">
                            Developer and Designer.
                        </h3>
                        <p className="max-w-xl mx-auto py-5 leading-6  text-gray-700 dark:text-gray-400">
                            "Computer engineer who loves code based in sari, Iran! I specialize in Web Development and
                            also passionate about UI/UX Design"
                        </p>
                    </div>
                    <div className="flex justify-center text-2xl gap-10 py-6 text-gray-600">
                        <AiFillGithub className="hover:text-teal-500 hover:cursor-pointer" />
                        <AiFillMail className="hover:text-teal-500 hover:cursor-pointer" />
                        <AiFillLinkedin className="hover:text-teal-500 hover:cursor-pointer" />
                    </div>
                    <div className="mx-auto flex items-center justify-center relative bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-3 overflow-hidden">
                        <Image src={soll} alt="soll Image" layout="fill" objectFit="cover" />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-2xl dark:text-teal-500 text-teal-600 py-2 font-bold mt-8">
                            Services I offer
                        </h3>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer, I've done remote
                            work for
                            <span className="text-teal-500 font-semibold"> agencies </span>
                            consulted for <span className="text-teal-500 font-semibold">startups </span>
                            and collaborated with talanted people to create digital products for both business and
                            consumer use.
                        </p>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="md:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-teal-600 flex-1">
                            <Image className="mx-auto " alt="design Image" src={design} width={100} height={100} />
                            <h3 className="text-xl font-extrabold pt-8 pb-2 text-gray-900 ">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design theory.
                            </p>
                            <h4 className="py-4 text-gray-800 font-bold">Design Tools I Use:</h4>
                            <p className="text-sm font-semibold text-gray-800 py-1">Photoshop</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Illustrator</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Figma</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Adobe XD</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-teal-600 flex-1">
                            <Image className="mx-auto " alt="code Image" src={code} width={100} height={100} />
                            <h3 className="text-xl font-extrabold pt-8 pb-2 text-gray-900 ">Clean Code</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design theory.
                            </p>
                            <h4 className="py-4 text-gray-800 font-bold">Skill:</h4>
                            <p className="text-sm font-semibold text-gray-800 py-1">React Js</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Tailwind</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Javascript</p>
                            <p className="text-sm font-semibold text-gray-800 py-1">Bootstrap</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-2xl dark:text-teal-500 text-teal-600 py-2 font-bold mt-8">Portfolio</h3>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer, I've done remote
                            work for
                            <span className="text-teal-500 font-semibold"> agencies </span>
                            consulted for <span className="text-teal-500 font-semibold">startups </span>
                            and collaborated with talanted people to create digital products for both business and
                            consumer use.
                        </p>
                        <p className="text-sm py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web1}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={web3}
                            />
                        </div>
                    </div>
                 
                </section>
            </main>
        </div>
    );
}

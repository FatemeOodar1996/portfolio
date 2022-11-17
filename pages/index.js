import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import soll from "../public/FatemeOodar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web2 from "../public/web2.jpg";
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


            <main className=" bg-white px-10 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-10 flex justify-between items-center">
                        <h1 className="text-xl font-burtons">Fateme Oodar</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl"
                                />
                            </li>
                            <li>
                                <a
                                    className="flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md text-white px-4 py-2 ml-8 text-center"
                                    href="#">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center md:px-10 lg:px-80">
                        <h2 className="text-4xl text-teal-600 py-2 font-extrabold">Fateme Oodar</h2>
                        <h3 className="lg:text-2xl sm:text-md  py-2 font-bold text-gray-700">
                            Developer and Designer.
                        </h3>
                        <p className="max-w-xl mx-auto py-5 leading-6 text-gray-800">
                            "Computer engineer who loves code based in sari, Iran! I specialize in Web Development and
                            also passionate about UI/UX Design"
                        </p>
                    </div>
                    <div className="flex justify-center text-3xl gap-10 py-6 text-gray-600">
                        <AiFillGithub />
                        <AiFillMail />
                        <AiFillLinkedin />
                    </div>
                    <div className="mx-auto flex items-center justify-center relative bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 mt-3 overflow-hidden">
                        <Image src={soll} layout="fill" objectFit="cover" />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer, I've done remote
                            work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products for both business and
                            consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="md:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <Image className="mx-auto" src={design} width={100} height={100} />
                            <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design theory.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Adobe XD</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <Image className="mx-auto" src={code} width={100} height={100} />
                            <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design theory.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Adobe XD</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                            <Image className="mx-auto" src={consulting} width={100} height={100} />
                            <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core design theory.
                            </p>
                            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                            <p className="text-gray-800 py-1">Photoshop</p>
                            <p className="text-gray-800 py-1">Illustrator</p>
                            <p className="text-gray-800 py-1">Figma</p>
                            <p className="text-gray-800 py-1">Adobe XD</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a freelance designer and developer, I've done remote
                            work for
                            <span className="text-teal-500"> agencies </span>
                            consulted for <span className="text-teal-500">startups </span>
                            and collaborated with talanted people to create digital products for both business and
                            consumer use.
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            I offer from a wide range of services, including brand design, programming and teaching.
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
                        <div className=" basis-1/3 flex-1">
                            <Image
                                className=" rounded-lg object-cover"
                                src={web2}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className=" basis-1/3 flex-1 ">
                            <Image
                                className=" rounded-lg object-cover"
                                src={web2}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className=" basis-1/3 flex-1">
                            <Image
                                className=" rounded-lg object-cover"
                                src={web2}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className=" basis-1/3 flex-1">
                            <Image
                                className=" rounded-lg object-cover"
                                src={web2}
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
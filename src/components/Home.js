import { React } from "react";
import image from "../manything.png";
export default function Home() {

    return (
        <main>
            <img src={image} alt="manything" className="absolute ojbect-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">
                    Hello,  I &apos; m Sam Li.
                    </h1> 
                </section>
        </main>
    )
}
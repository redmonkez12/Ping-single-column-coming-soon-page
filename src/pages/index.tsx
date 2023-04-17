import { Libre_Franklin } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import { useState } from "react";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export default function Home() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    function onChange(value: string) {
        setEmail(value);
        setError(false);
    }

    function onSubmit() {
        if (email === "") {
            setError(true);
        } else if (true) {
            setError(true);
        }
    }

    return (
        <main className={`bg-white min-h-screen h-full flex flex-col px-11 pb-9 pt-16 max-w-[40rem] mx-auto ${libreFranklin.className}`}>
            <div className={"flex flex-col h-full flex-1"}>
                <div className={"flex flex-col gap-8 items-center"}>
                    <Image src={"/images/logo.svg"} width={56} height={24} alt={"logo"}/>
                    <div className={"flex flex-col items-center w-full gap-4"}>
                        <div className={"flex text-2xl md:text-5xl"}>
                            <div className={"text-gray"}>We are launching&nbsp;</div>
                            <div className={"text-black font-bold"}>soon!</div>
                        </div>

                        <div className={"text-xs md:text-xl font-light text-black"}>Subscribe and get notified</div>
                    </div>

                    <form className={"flex flex-col md:flex-row w-full gap-2.5"}>
                        <div className={"flex w-full flex-col relative"}>
                            <input className={`${error ? 'border-red' : ""}`} type="text" placeholder={"Your email address…"} value={email} onChange={(e) => onChange(e.target.value)}/>
                            {error && <div className={"error text-red text-xs tracking-[0.008rem] text-center md:text-left md:pl-4 pb-5 md:pb-0 pt-2"}>Please provide a valid email address</div>}
                        </div>
                        <button className={"button disabled:opacity-75 md:w-[12.5rem] self-start"} type={"button"} onClick={onSubmit} disabled={error}>Notify Me</button>
                    </form>
                </div>

                <div className={"flex-1 pt-[4.5rem] pb-32 md:pb-[4.5rem]"}>
                    <div className={"relative w-full h-[192px] md:h-[24rem]"}>
                        <Image src={"/images/illustration-dashboard.png"} fill alt={"hero"}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    );
}

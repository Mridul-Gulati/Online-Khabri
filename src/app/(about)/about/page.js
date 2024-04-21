import Link from "next/link";
import AboutCoverSection from "../../../components/About/AboutCoverSection";
import Skills from "../../../components/About/Skills";


export const metadata = {
    title: "About Me",
    description: `Here are some details about us`,

}

export default function About() {

    return <>
        <AboutCoverSection />
        <Skills />
        <h2 className="mt-8 dark:font-normal font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light">
            Want to Contribute? Reach out to us 📞 from <Link href="/contact" className="!underline underline-offset-2">here</Link>
        </h2>
    </>
}
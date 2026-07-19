import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import Stats from "@/components/Stats";
import DetectionCard from "@/components/DetectionCard";
import AlertCard from "@/components/AlertCard";

export default function Home() {

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            <Navbar/>

            <Hero/>

            <div className="max-w-7xl mx-auto px-8 pb-20">

                <UploadCard/>

                <Stats/>

                <DetectionCard/>

                <AlertCard/>

            </div>

        </main>

    );

}
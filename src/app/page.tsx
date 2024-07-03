import { HeroParallax } from "@/components/global/connect-parallax"
import { ContainerScroll } from "@/components/global/container-scroll-animation"
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards"
import Navbar from "@/components/global/navbar"
import { Button } from "@/components/ui/button"
import { clients, products } from "@/lib/constant"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-zinc-900 rounded-lg !overflow-visible relative flex flex-col items-center antialiased">
        {/* Needs to be changed if it messes up, bg.ibelick.com */}
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-neutral-600 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-600 to-neutral-700 md:text-center group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start for <b>free</b> today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With FlowForge
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards className="md:mt-[18rem] mt-[-100px]" items={clients} direction="right" speed="normal" />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
    </main>
  )
}

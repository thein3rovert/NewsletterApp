import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return ( 
  <main className="bg-[#03040b] flex flex-col items-center justify-center p-10 min-h-screen">
    <div className=" space-y-1"> 
      <h2 className="z-10 text-3xl font-bold text-center text-transparent 
      duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl,
      md:text-6xl whitespace-nowrap bg-clip-text">
        Join the waitlist for my
        {/*Need to create a new custom classes for txtstroke and animate-title*/}
        </h2>
      
      <h1 className="z-10 text-4xl font-bold text-center bg-white
      cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text bg-gradient-to-r
       from-orange-300 to-orange-800  text-transparent duration-1000 animate-fade-in-3">
        Thein3rovert Newsletter </h1>
    </div>
    <NewsletterForm/>
    {/* Socials*/}
  </main>
  );
}

import Image from "next/image";

export default function SchoolLandingPage() {
  return (
    <main className="font-sans text-[#4b5842] bg-white">

      {/* === Hero Section === */}
      <section className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex items-center justify-center bg-[#f7f2f2] relative min-h-[300px]">
          <div className="absolute inset-0 bg-[#f7f2f2] z-0" />
          <div className="bg-[#5a6652] text-white p-6 md:p-10 max-w-md z-10 w-full md:w-auto">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              El programa<br />para<br />inicial
            </h2>
            <p className="mt-4 text-[#d1dbe1] text-sm md:text-base">Edible Learning Spaces</p>
            <button className="mt-6 px-4 py-2 bg-[#fbd7cf] text-[#5a6652] hover:opacity-90 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative min-h-[300px]">
          <Image
            src="/image/mision.png"
            alt="Kids with vegetables"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* === Goals Section === */}
      <section className="flex flex-col items-center text-center px-4 py-16 md:py-20">
        <div className="w-16 h-16 sm:w-20 sm:h-20 relative mb-6">
          <Image
            src="/image/mision.png"
            alt="Plant Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestros objetivos</h2>
        <p className="max-w-2xl text-[#7e8a7d] text-sm md:text-base leading-relaxed px-2">
          I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click
          "Edit Text" or double click me to add your own content and make changes to the font.
          I'm a great place for you to tell a story and let your users know a little more about you.
        </p>
      </section>

      {/* === Farm / Learn / Eat Cards === */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 pb-20">
        {["farm", "learn", "eat"].map((type, i) => (
          <div key={i} className="relative h-[400px] md:h-[500px]">
            <Image
              src="/image/mision.png"
              alt={type}
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              className={`absolute bottom-0 p-6 w-full ${
                type === "learn" ? "bg-[#fbd7cf] text-[#5a6652]" : "bg-[#5a6652] text-white"
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold capitalize">{type}</h3>
              <p className="text-sm md:text-base">
                {type === "farm"
                  ? "Your fruits and vegetables"
                  : type === "learn"
                  ? "About sustainable gardening"
                  : "Healthier food"}
              </p>
              <p className="text-xs md:text-sm mt-2">
                I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
              </p>
              <button
                className={`mt-4 px-4 py-1 text-xs md:text-sm ${
                  type === "learn" ? "bg-white text-[#5a6652]" : "bg-[#fbd7cf] text-[#5a6652]"
                }`}
              >
                {type === "farm"
                  ? "Show Me How"
                  : type === "learn"
                  ? "Tell Me More"
                  : "Get Me a Plate"}
              </button>
            </div>
          </div>
        ))}
      </section>

     

      {/* === Follow Us Section === */}
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Follow Us #Greenify</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="aspect-square relative">
              <Image
                src="/image/mision.png"
                alt={`Gallery ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

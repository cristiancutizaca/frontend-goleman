import Image from "next/image";

export default function SchoolGardenSection() {
  return (
    <section className="flex flex-col lg:flex-row h-[600px]">
      {/* Left block with text */}
      <div className="flex-1 flex items-center justify-center bg-[#f7f2f2] relative">
        <div className="absolute left-0 top-0 bottom-0 w-full bg-[#f7f2f2] z-0" />
        <div className="bg-[#5a6652] text-white p-10 max-w-md z-10">
          <h2 className="text-3xl font-bold leading-tight">
            The School<br />Garden<br />Program
          </h2>
          <p className="mt-4 text-[#d1dbe1]">Edible Learning Spaces</p>
          <button className="mt-6 px-4 py-2 bg-[#fbd7cf] text-[#5a6652] hover:opacity-90">
            Learn More
          </button>
        </div>
      </div>

      {/* Right block with image */}
      <div className="flex-1 relative">
        <Image
          src="/image/kids_garden.jpg"
          alt="Kids with vegetables"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

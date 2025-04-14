import Image from "next/image";

export default function SchoolLandingPage() {
  return (
    <main className="font-sans text-white bg-white">

      {/* === Hero Section (New Image) === */}
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#d92027] p-10 flex flex-col justify-center min-h-[400px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stanford <br /> <span className="text-white">Elementary</span>
          </h1>
          <p className="mt-4 text-xl">A Great Place to Learn</p>
          <a href="#" className="mt-6 text-sm underline font-medium text-white">About Our School</a>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <Image
            src="/image/test.webp"
            alt="Hero Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* === Safety First Section === */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-[#dbf3fd]">
        <div className="relative min-h-[300px]">
          <Image
            src="/image/test.webp"
            alt="Safety First"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#003366] mb-2">Safety First</h3>
          <p className="text-[#003366] text-sm">
            Full reopening plans for next year, include a physically distanced in-person learning model
          </p>
          <a href="#" className="mt-4 font-semibold underline text-sm text-[#003366]">Learn More</a>
        </div>
      </section>

      {/* === Why Stanford Elementary === */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-[#003366] mb-8">Why Stanford Elementary</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* First Row */}
          <div className="relative h-64 md:col-span-2">
            <Image src="/image/test.webp" alt="Our Approach" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Our Approach</h3>
              <p className="text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
              <a href="#" className="text-sm underline mt-2">Learn More</a>
            </div>
          </div>
          <div className="bg-[#d92027] text-white p-6 flex flex-col justify-end">
            <h3 className="text-lg font-bold">Admission</h3>
            <p className="text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
            <a href="#" className="text-sm underline mt-2">Enroll Today</a>
          </div>

          {/* Second Row */}
          <div className="relative h-64">
            <Image src="/image/test.webp" alt="Enhance Learning" fill style={{ objectFit: 'cover' }} />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold">Enhance Learning</h3>
              <p className="text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
              <a href="#" className="text-sm underline mt-2">View Programs</a>
            </div>
          </div>
          <div className="bg-[#990000] text-white p-6 flex flex-col justify-end">
            <h3 className="text-lg font-bold">Latest News & Events</h3>
            <p className="text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
            <a href="#" className="text-sm underline mt-2">View All</a>
          </div>
          <div className="relative h-64">
            <Image src="/image/test.webp" alt="Happy Kids" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* Third Row */}
          <div className="bg-[#990000] text-white p-6 flex flex-col justify-end">
            <h3 className="text-lg font-bold">For the Parents</h3>
            <p className="text-sm">I'm a paragraph. Click here to add your own text and edit me.</p>
            <a href="#" className="text-sm underline mt-2">Get Informed</a>
          </div>
          <div className="relative h-64 md:col-span-2">
            <Image src="/image/test.webp" alt="Student on Tablet" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* === Numbers Section === */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-[#003366] mb-8">Stanford Elementary in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#003366] text-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-[#dbf3fd] min-h-[180px] flex items-center justify-center flex-col text-[#003366] text-lg font-semibold"
            >
              <Image
                src="/image/tes.webp"
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

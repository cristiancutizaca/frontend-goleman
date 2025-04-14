import Image from "next/image";

export default function OurGoalsSection() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-20 bg-white">
      {/* === Icono decorativo === */}
      <div className="w-20 h-20 relative mb-6">
        <Image
          src="/image/plant_icon.png"
          alt="Plant Icon"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* === Título === */}
      <h2 className="text-3xl font-bold text-[#4b5842] mb-4">Our Goals</h2>

      {/* === Párrafo descriptivo === */}
      <p className="max-w-2xl text-[#7e8a7d] text-base leading-relaxed">
        I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click
        "Edit Text" or double click me to add your own content and make changes to the font.
        I'm a great place for you to tell a story and let your users know a little more about you.
      </p>
    </section>
  );
}

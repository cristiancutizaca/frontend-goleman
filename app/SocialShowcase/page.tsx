"use client";

import React from "react";

const SocialShowcase = () => {
  return (
    <section className="w-full min-h-screen bg-cyan-600 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Facebook Widget */}
        <div className="bg-white shadow-2xl rounded-3xl p-4">
          <h2 className="text-lg font-bold text-purple-800 mb-4">Última publicación en Facebook</h2>
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FCDanielGoleman&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="100%"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        {/* YouTube Embed */}
        <div className="md:col-span-2 bg-white shadow-2xl rounded-3xl p-4 flex flex-col">
          <h2 className="text-lg font-bold text-purple-800 mb-4">Video destacado</h2>
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/7NKku06T0wc?start=3285"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* <div className="mt-16 flex justify-center gap-6 text-2xl text-purple-700">
        <a href="https://facebook.com/CDanielGoleman" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">📘</a>
        <a href="#" className="hover:text-pink-600">📸</a>
        <a href="#" className="hover:text-gray-700">🎵</a>
        <a href="#" className="hover:text-red-600">▶️</a>
      </div> */}

      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Instagram post (static preview or embed via 3rd-party) */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h3 className="text-base font-semibold mb-2 text-pink-600">Instagram</h3>
          <img src="https://source.unsplash.com/400x300/?instagram,photo" alt="Instagram Post" className="rounded-xl w-full" />
        </div>

        {/* TikTok embedded video */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h3 className="text-base font-semibold mb-2 text-black">TikTok</h3>
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173">
            <section>Loading TikTok...</section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>

        {/* Twitter embedded tweet */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h3 className="text-base font-semibold mb-2 text-sky-500">Twitter</h3>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/Twitter/status/1456349543033149443">Loading Tweet...</a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      </div>

      {/* Random promo content */}
      <div className="mt-24 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 p-10 rounded-3xl shadow-2xl max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">¿Sabías qué?</h2>
        <p className="text-lg text-gray-700">
          ¡Más de 10,000 estudiantes han confiado en nuestra institución para transformar su futuro!
        </p>
      </div>
    </section>
  );
};

export default SocialShowcase;

"use client";

import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Jogo",
      links: [
        { name: "Age of Empires IV", href: "#" },
        { name: "Civilizações", href: "#" },
        { name: "Estratégias", href: "#" },
      ],
    },
    {
      title: "Ranking",
      links: [
        { name: "Líderes", href: "#leaderboard" },
        { name: "Histórico", href: "#match-history" },
        { name: "Adicionar Partida", href: "#add-match" },
      ],
    },
    {
      title: "Comunidade",
      links: [
        { name: "Discord", href: "#" },
        { name: "Reddit", href: "#" },
        { name: "Twitch", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-stone-950 border-t border-stone-800 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-cinzel font-bold text-lg text-stone-100">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-stone-400 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-stone-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-stone-400 text-sm">
                © {currentYear} AOE4 Ranking. Todos os direitos reservados.
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-stone-500 text-sm font-cinzel font-semibold">
                  A Era dos Reis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
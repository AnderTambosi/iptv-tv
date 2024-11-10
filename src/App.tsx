import React, { useState, useEffect } from 'react';
import { Instagram, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const photos = [
  'https://imgur.com/uuVD9mG.jpeg',
  'https://imgur.com/PiTq1Yt.jpeg',
  'https://imgur.com/d45oQ8o.jpeg',
  'https://imgur.com/ljl9KzW.jpeg',
  'https://imgur.com/QHHtFw1.jpeg',
  'https://imgur.com/149DmRK.jpeg',
  'https://imgur.com/kzm8frQ.jpeg',
  'https://imgur.com/bDZzNpD.jpeg',
  'https://imgur.com/PNe9irz.jpeg',
  'https://imgur.com/9zfIW6v.jpeg',
  'https://imgur.com/ugD7mIM.jpeg',
  'https://imgur.com/rZHOblS.jpeg',
  'https://imgur.com/PLnE0Co.jpeg',
  'https://imgur.com/uHgqU0O.jpeg',
  'https://imgur.com/SiNjrgo.jpeg',
  'https://imgur.com/W1xbZMD.jpeg',
];

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header
        className={`fixed w-full z-20 transition-all duration-300 ${
          scrolled ? 'bg-black py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif">Larissa Sevegnani</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-400 transition-colors">
              Home
            </a>
            <a
              href="#gallery"
              className="hover:text-pink-400 transition-colors"
            >
              Galeria
            </a>
            <a href="#about" className="hover:text-pink-400 transition-colors">
              Sobre
            </a>
            <a
              href="#contact"
              className="hover:text-pink-400 transition-colors"
            >
              Contato
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/larissasevegnani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <button onClick={() => setMenuOpen(true)} className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-30 flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-8 text-2xl">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Galeria
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      )}

      <main>
        <section id="home" className="relative h-screen">
          <img
            src={photos[currentPhoto]}
            alt={`Larissa Sevegnani ${currentPhoto + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-center text-white drop-shadow-lg">
              Larissa Sevegnani
            </h2>
          </div>
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </section>

        <section id="gallery" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">
              Galeria
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setCurrentPhoto(index)}
                >
                  <img
                    src={photo}
                    alt={`Larissa Sevegnani ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 font-serif">Sobre Mim</h2>
            <p className="text-lg mb-8">
              Sou Larissa Sevegnani, uma modelo apaixonada por moda e
              fotografia. Com anos de experiência em passarelas e ensaios
              fotográficos, busco sempre transmitir emoções e contar histórias
              através das minhas imagens.
            </p>
            <a
              href="#contact"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              Entre em Contato
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-center font-serif">
              Contato
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Larissa Sevegnani. Todos os direitos reservados.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

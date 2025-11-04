import { useState } from "react";
import { Menu, Image, Video, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "La Ruta del Papa León XIV", link: "#ruta" },
    { name: "Ciudades Visitadas", link: "#ciudades" },
    { name: "Experiencia Virtual", link: "#experiencia" },
    { name: "Noticias y Eventos", link: "#noticias" },
    { name: "Planifica tu Viaje", link: "#viaje" },
    { name: "Galería Multimedia", link: "#galeria" },
    { name: "Nosotros", link: "#nosotros" },
    { name: "Contacto", link: "#contacto" }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#5a3a2f]">
      <header className="flex justify-between items-center p-4 bg-[#e7d4c2] shadow-md">
        <h1 className="text-xl font-bold tracking-wide text-[#6a3f2d]">Ruta del Papa León XIV</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu />
        </button>
        <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:space-x-4`}>
          {menuItems.map((item) => (
            <a key={item.name} href={item.link} className="block md:inline-block py-1 px-2 hover:text-[#b55e39]">
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      <section id="inicio" className="relative h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center">
        <div className="bg-black bg-opacity-50 text-white p-6 rounded-2xl">
          <h2 className="text-4xl font-bold mb-2">Un Camino de Fe y Cultura</h2>
          <p className="max-w-xl mx-auto">Descubre la travesía espiritual del Papa León XIV a través de las tierras del norte del Perú, donde la fe, la historia y la cultura se entrelazan.</p>
        </div>
      </section>

      <section id="ruta" className="p-8 text-center">
        <h3 className="text-2xl font-semibold text-[#6a3f2d] mb-4">La Ruta del Papa León XIV</h3>
        <p className="max-w-3xl mx-auto mb-6">El recorrido abarca las principales ciudades del norte del Perú, donde el Papa León XIV dejó un legado de esperanza y unión. Esta ruta conmemora su paso por Lambayeque, Chiclayo, Ferreñafe y otros lugares llenos de historia.</p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-6">
          {["Lambayeque", "Chiclayo", "Ferreñafe", "Monsefú", "Zaña"].map((city) => (
            <div key={city} className="w-64 bg-white shadow-md rounded-xl p-4 border border-[#e7d4c2]">
              <Image className="mx-auto text-[#b55e39]" size={40} />
              <h4 className="text-lg font-bold mt-2">{city}</h4>
              <p className="text-sm text-[#6a3f2d]">Fotografías, videos y testimonios de la visita del Papa en esta ciudad.</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="experiencia" className="p-8 bg-[#f6ede5] text-center">
        <h3 className="text-2xl font-semibold mb-4">Experiencia Virtual</h3>
        <Video className="mx-auto mb-3 text-[#b55e39]" size={40} />
        <p className="max-w-2xl mx-auto">Pronto podrás recorrer virtualmente los caminos del Papa León XIV mediante videos 360° y tomas aéreas con dron que capturan la esencia de cada destino.</p>
      </section>

      <section id="contacto" className="p-8 bg-[#f6ede5] text-center">
        <h3 className="text-2xl font-semibold mb-4">Contáctanos</h3>
        <Mail className="mx-auto mb-2 text-[#b55e39]" size={40} />
        <p className="mb-4">¿Tienes preguntas o deseas participar en las actividades de la Ruta del Papa León XIV?</p>
        <form className="max-w-md mx-auto space-y-3">
          <input type="text" placeholder="Nombre" className="w-full border border-[#e7d4c2] rounded-lg p-2" />
          <input type="email" placeholder="Correo electrónico" className="w-full border border-[#e7d4c2] rounded-lg p-2" />
          <textarea placeholder="Mensaje" className="w-full border border-[#e7d4c2] rounded-lg p-2" rows="4"></textarea>
          <button className="bg-[#b55e39] text-white px-4 py-2 rounded-lg hover:bg-[#a25232]">Enviar</button>
        </form>
      </section>

      <footer className="bg-[#e7d4c2] text-center p-4 text-sm">
        <p>© 2025 Gobierno Regional de Lambayeque - Ruta Turística del Papa León XIV</p>
        <p>Desarrollado con orgullo cultural y fe.</p>
      </footer>
    </div>
  );
}
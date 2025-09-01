import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  {
    src: gallery1,
    alt: "Fantasy landscape with floating islands",
    prompt: "Fantasy landscape with floating islands and magical crystals"
  },
  {
    src: gallery2,
    alt: "Cyberpunk cityscape at night",
    prompt: "Cyberpunk cityscape with neon lights and futuristic buildings"
  },
  {
    src: gallery3,
    alt: "Cosmic portrait with galaxy patterns",
    prompt: "Portrait of cosmic being with galaxy patterns in hair"
  },
  {
    src: gallery4,
    alt: "Abstract space nebula scene",
    prompt: "Abstract space scene with colorful nebulae and stars"
  },
  {
    src: gallery5,
    alt: "Glowing crystal cave",
    prompt: "Magical crystal cave with glowing purple gems"
  },
  {
    src: gallery6,
    alt: "Underwater bioluminescent scene",
    prompt: "Underwater scene with bioluminescent jellyfish"
  }
];

const GallerySection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Showcase <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible variety of artwork our AI can create. Each image was generated from a simple text prompt.
          </p>
        </div>
        
        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ 
                animationDelay: `${index * 150}ms`,
                gridRowEnd: index % 3 === 1 ? 'span 2' : 'auto' // Vary heights for masonry effect
              }}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-2">Prompt:</p>
                  <p className="text-xs opacity-90 leading-relaxed">"{image.prompt}"</p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-blue-600/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
        
        {/* View more button */}
        <div className="text-center mt-12">
          <button className="btn-gradient">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
export default function Home() {
  const logos = [
    {
      id: 1,
      name: "HTML",
      bw: "/svgs/html-bw.svg",
      color: "/svgs/html-color.svg",
    },
    {
      id: 2,
      name: "CSS",
      bw: "/svgs/css-bw.svg",
      color: "/svgs/css-color.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {logos.map((logo) => (
          <div key={logo.id} className="group relative w-40 h-40">
            {/* Zwart-wit SVG */}
            <img
              src={logo.bw}
              alt={`${logo.name} logo`}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            {/* Gekleurde SVG */}
            <img
              src={logo.color}
              alt={`${logo.name} logo`}
              className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

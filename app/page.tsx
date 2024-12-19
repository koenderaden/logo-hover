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
    {
      id: 3,
      name: "Figma",
      bw: "/svgs/figma-bw.svg",
      color: "/svgs/figma-color.svg",
    },
    { id: 4, name: "JS", bw: "/svgs/js-bw.svg", color: "/svgs/js-color.svg" },
    {
      id: 5,
      name: "React",
      bw: "/svgs/react-bw.svg",
      color: "/svgs/react-color.svg",
    },
    {
      id: 6,
      name: "GitHub",
      bw: "/svgs/github-bw.svg",
      color: "/svgs/github-color.svg",
    },
    {
      id: 7,
      name: "Storyblok",
      bw: "/svgs/storyblok-bw.svg",
      color: "/svgs/storyblok-color.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="flex gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="group relative w-15 h-15"
            style={{ width: "60px", height: "60px" }}
          >
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

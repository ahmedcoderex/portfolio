import CardProject from "../ui/CardProject";
import HeadSection from "../ui/HeadSection";

const projectsData = [
  {
    title: "Book Store",
    image: "./bookStore.webp",
    description:
      "Bayt Kitab Al-Fayoum is a specialized bookstore management platform designed for seamless cataloging and inventory control. The project features a robust Admin Dashboard that enables full CRUD operations and real-time 'Availability Toggles' for books. Built with React and Supabase, it ensures high-speed performance and instant data synchronization.",
    techStack: [
      {
        name: "React.js",
        textColor: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-100",
      },
      {
        name: "Tailwind",
        textColor: "text-teal-700",
        bgColor: "bg-teal-50",
        borderColor: "border-teal-100",
      },
      {
        name: "Supabase",
        color: "text-orange-700",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-100",
      },
      {
        name: "React Query",
        textColor: "text-emerald-700",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-100",
      },
    ],
    codeLink: "https://github.com/ahmedcoderex/bookstore",
    liveLink: "https://beetelketabaalfayuwm-1c952.web.app/",
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <HeadSection text="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(
            (
              { image, description, title, codeLink, liveLink, techStack },
              index,
            ) => (
              <CardProject
                key={index}
                image={image}
                title={title}
                description={description}
                linkGitHub={codeLink}
                linkView={liveLink}
                techStack={techStack}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

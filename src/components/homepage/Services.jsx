import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web Design",
    "Wireframing",
    "UI/UX Design",
  ];

  const toolBoxItems = [
    "JavaScript",
    "ReactJS",
    "GSAP",
    "TailwindCSS",
    "Figma",
    "Framer",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="habilidades" />
      <div className="space-y-14">
        <ServiceUi
          title="minhas competências."
          description="Meu objetivo é transformar ideias simples em visuais agradáveis aos olhos mesmo que sejam também simples e minimalistas, transmitir e interpretar ideias transformando elas em código é a minha especialidade."
          items={expertiseItems}
        />
        <ServiceUi
          title="minha stack."
          description="Essas são as tecnologias que costumo usar em meus projetos, ampliando cada vez mais minha caixa de ferramentas e sempre procurando me especializar mais."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}

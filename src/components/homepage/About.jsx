import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/eulucas.jpeg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="sobre mim" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="imagem de luquinhas"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              Resumindo, quem sou eu?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              <br></br>
              Como Desenvolvedor Front-End autônomo e Designer UI/UX, estabeleci minha base no estado de Santa Catarina, Brasil.
            <br></br>
            <br></br>Minha especialidade reside em elaborar designs elegantes, fáceis de usar e de estética minimalista, particularmente voltados para startups e negócios de pequeno porte. Meu foco é posicionar estas empresas de forma proeminente no mundo digital, garantindo que elas deixem uma impressão duradoura e impactante.
            <br></br>
            <br></br>
            Meu amor por lo-fi e matcha se infiltra em meu trabalho, permitindo-me adicionar um toque pessoal e distinto a cada projeto que realizo. 🍵
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

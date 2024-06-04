import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/devlucas.webp";
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
            alt="Imagem do desenvolvedor"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 md:w-1/2 lg:top-32">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight opacity-0 2xl:text-7xl"
            >
              Resumindo, quem sou eu?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 opacity-0 2xl:text-4xl"
            >
              <br></br>
              Como Desenvolvedor Front-End autônomo e Designer UI/UX, estabeleci
              minha base em Santa Catarina, Brasil.
              <br></br>
              <br></br>Minha especialidade é criar sites elegantes, intuitivos e
              com uma estética minimalista, especialmente voltados para startups
              e pequenos negócios. Meu objetivo é posicionar essas empresas de
              maneira destacada no mundo digital, garantindo que deixem uma
              impressão duradoura e impactante.
              <br></br>
              <br></br>
              Minha paixão por lo-fi e matcha se reflete no meu trabalho,
              adicionando um toque pessoal e único a cada projeto que realizo.
              🍵
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

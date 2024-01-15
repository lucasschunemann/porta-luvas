import { Icon } from "@iconify/react";
import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const heading = useRef(null)
  const body = useRef(null)
  const contactSection = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start:"180px bottom",

      // markers: true,
      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="my-[10%] overflow-hidden"
      aria-label="contact me"
    >
      
      
      <Heading title="Contato" />
      <div ref={contactSection} className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 ref={heading} className="max-w-lg 2xl:max-w-3xl text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0">
            Vamos dar vida às suas ideias!
          </h3>
          <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
          <br></br>
            Sua visão merece atenção imediata. Por isso, estou aqui para garantir que sua ideia não só seja ouvida, mas meticulosamente transformada em realidade. Estou a apenas um clique de distância para começarmos a planejar seu próximo projeto de sucesso.
            
          </p>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">Mais Contatos</h4>
            <div className="flex flex-col space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="mailto:lucas.vhschunemann@gmail.com"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>lucas.vhschunemann@gmail.com
                 <br />
                </span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5547992396261&text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20design%20ou%20mais%20informações"
                className="group relative w-fit cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <span>(47) 99239-6261
                 <br />
                </span>
                <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
             <br />
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 2xl:text-4xl font-semibold">Minhas Redes</h4>
            <div className="space-y-3 text-body-2 2xl:text-3xl">
              <a
                href="https://bento.me/lucas-von"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="simple-icons:bento" color="#666" />
                <div className="relative">
                  <span>Bento</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/lucasvonhelden/"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:instagram" color="#666" />
                <div className="relative">
                  <span>Instagram</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://github.com/lucasschunemann"
                className="group flex items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-von-helden-schünemann-213590219/"
                className="group group flex w-fit items-center space-x-2"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold 2xl:text-4xl">Location</h4>
            <div className="space-y-2 text-body-2 2xl:text-3xl">
              <p>
                Santa Catarina, Brasil <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

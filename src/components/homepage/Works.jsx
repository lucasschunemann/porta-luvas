import pfadv from "/src/assets/images/pfadv.png";
import wfclinica from "/src/assets/images/wfclinica.png";
import reactlist from "/src/assets/images/contactlist.png";
import vuetodo from "/src/assets/images/vuetodo.webp";
import spot from "/src/assets/images/spot.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change my-[12%] overflow-hidden"
    >
      <Heading title="portfolio" />
      <div className="mt-24 grid grid-cols-1 gap-y-48 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 md:col-span-8 md:pr-12">
          <Projects
            link="https://pfadvogados.netlify.app"
            img={pfadv}
            alt="PF advogados website mockup"
            name="pf advogados"
            type="Web Design • Frontend Development"
            year="2023-2024"
            tools="HTML • JavaScript • CSS"
          />
        </div>

        <div className="col-span-1 md:col-span-4 md:pl-12 md:pt-32">
          <Projects
            link="https://wfodonto.netlify.app"
            img={wfclinica}
            alt="wf clinica page mockup"
            name="Clínica Odontológica WF"
            type="Frontend Development"
            year="2024"
            tools="NextJS"
          />
        </div>

        <div className="col-span-1 md:col-span-6 md:pr-16 md:pt-48">
          <Projects
            link="https://contactlist-eta.vercel.app/"
            img={reactlist}
            alt="Contact list in React"
            name="React Contact List"
            type="Frontend Development (Study)"
            year="2024"
            tools="ReactJS • JavaScript"
          />
        </div>

        <div className="col-span-1 md:col-span-6 md:pl-16 md:pt-64">
          <Projects
            link="https://to-vue-do.netlify.app"
            img={vuetodo}
            alt="to-do list in vue"
            name="To-Do List"
            type="Frontend Development (Study)"
            year="2024"
            tools="VueJS • JavaScript • CSS"
          />
        </div>

        <div className="col-span-1 md:col-span-12 md:pt-80">
          <Projects
            link="https://ui-remake-spot.netlify.app/"
            img={spot}
            alt="spotify ui remake image"
            name="Spotify UI Redesign"
            type="UX/UI • Frontend Development"
            year="2024"
            tools="CSS • HTML • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}

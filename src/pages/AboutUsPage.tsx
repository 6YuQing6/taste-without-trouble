import { Container } from "@mui/material";

function AboutUsPage() {
  return (
    <Container maxWidth="lg">
      <div className="m-2 pt-4">
        <div className="pb-2 w-full border-b border-gray-200 mb-10">
          <h1> About the Team </h1>
        </div>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN (Image) */}
          <div className="md:col-span-4 flex justify-center md:justify-start  md:sticky md:top-24">
            <img
              src="./images/profile_pic.png"
              alt="Melanie Reisner-Earl"
              loading="lazy"
              className="w-auto h-auto object-cover rounded-lg"
            />
          </div>

          {/* RIGHT COLUMN (Text Content) */}
          <div className="md:col-span-8 space-y-2 text-left">
            <h2 className="text-3xl font-bold pt-1">Melanie Reisner-Earl</h2>

            <h4 className="text-lg text-gray-600 font-medium">
              Biology Student & Gut Health Advocate
            </h4>
            <div className=" md:max-h-[50vh] md:overflow-y-auto space-y-4 text-left">
              <p>
                I'm a biology student based in Pleasanton, CA, with a deep
                passion for the gut mind connection and gastrointestinal
                disorders. I began this mission in 2025 to spread awareness
                about GI conditions and how they impact both physical and mental
                health. As a child, I struggled with severe dysphagia and
                unexplained gastrointestinal issues. Doctors often dismissed my
                symptoms, attributing them to a “sensitive stomach,” IBS, or
                family history.
              </p>

              <p>
                Yet everyday life felt like a constant battle—choking on food,
                experiencing cycles of diarrhea and constipation, and dealing
                with throat and tongue swelling after eating foods like eggs and
                dairy. I knew something more was going on, but I didn't have the
                answers.
              </p>

              <p>
                In 2023, my life took a frightening turn. A mass of food became
                lodged in my throat, tearing my esophagus. I nearly lost my life
                as my airway began to close from the fluid buildup caused by
                choking. During my hospital stay, a gastroenterologist at
                Stanford suggested I undergo an endoscopy after noticing
                immune-related signs in the esophagus.
              </p>

              <p>
                That experience left me deeply traumatized and, for the first
                time, afraid of food. When I entered college, that fear evolved
                into a restrictive eating disorder. During recovery, I began
                throwing up after certain foods and noticed that my body no
                longer tolerated meals the way it once had.
              </p>

              <p>
                Eventually I pushed for an endoscopy, and the results revealed
                eosinophilic esophagitis (EoE), a chronic immune condition
                characterized by inflammation in the esophagus. My biopsy showed
                basilar hyperplasia, severe esophagitis with over 100
                eosinophils per high-power field, and eosinophilic microabscess
                formation.
              </p>

              <p>
                I learned that eliminating trigger foods like soy, egg, dairy,
                and gluten could help manage EoE and allow my body to heal.
                Physically I improved, but emotionally it was difficult because
                food restrictions can be isolating.
              </p>

              <p>
                Over time, I realized many people with GI disorders face similar
                struggles. That’s why I started creating allergen-friendly,
                gut-friendly recipes—meals that are safe and enjoyable. My goal
                is to raise awareness about GI disorders among young people and
                how they intersect with eating disorders.
              </p>

              <p>
                Through sharing my story, I hope to inspire others to advocate
                for their health and remember that healing—both physical and
                emotional—is possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUsPage;

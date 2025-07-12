import Link from "next/link";
import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

import { bitebookim, bandhu, sendwise } from "@/assets";
import { buttonVariants } from "./ui/Button";

const Projects = () => {
    return (
        <section className="view-container mt-24">
            <SectionTitle badges={["design", "dev"]}>
                Selected Projects
            </SectionTitle>
            <div className="space-y-8">
                <ProjectCard
                    title="SendWise"
                    scope="Design + Development"
                    description=" Constructed a desktop-based WhatsApp marketing and billing automation software using Python, Tkinter, Selenium, and OCR.
 Enabled local shopkeepers to generate digital bills and send them directly to customers via WhatsApp Web, bypassing API restrictions.
 Integrated features like contact management, message scheduling, and pause/resume controls. Adopted by 20+ businesses, leading to a
 10% increase in customer retention and sales."
                    image={sendwise}
                    imageAlt="Sendwise banner"
                    sourceLink="https://github.com/dhairya703/Marketing_Soft"
                    liveLink="https://drive.google.com/drive/folders/1Ue82okxq7JuRuVDk3YSUQ5SzRkjtEdUl?usp=sharing"
                    technologies={[
                        "Selenium",
                        "tkinter",
                        "Ocr",
                        "SQL",
                        "Python",
                        "UI/UX",
                    ]}
                />
                <ProjectCard
                    title="BiteBook"
                    scope="Design + Development"
                    description="Developed a full-stack daily mess menu app with real-time notifications, in-app chat, and YOLO-based crowd detection to
 monitor and manage mess hall capacity. Enhanced user convenience and safety during peak hours. Garnered 100+ active users and
 reduced peak-time crowding by 30%"
                    image={bitebookim}
                    imageAlt="BiteBook banner"
                    sourceLink="https://github.com/dhairya703/Bitebook00"
                    liveLink=""
                    technologies={[
                        "Flutter",
                        "Firebase",
                        "Flask",    
                        "UI/UX",
                    ]}
                />
                <ProjectCard
                    title="BANDHU"
                    scope="Design+Development"
                    description="Created a dedicated mobile application to provide comprehensive support, companionship, and assistance to elderly individuals,
 ensuring their well-being, safety, and a higher quality of life. "
                    image={bandhu}
                    imageAlt="Unlinked banner"
                    liveLink="https://github.com/dhairya703/bandhu_app"
                    technologies={["Flutter", "Firebase", "Figma"]}
                />
            </div>
            <div className="mt-6 flex items-center gap-5">
                <div className="grow border-t-2 border-muted-1 border-dashed" />
               <Link
    href="https://github.com/dhairya703"
    target="_blank" // optional: opens in new tab
    rel="noopener noreferrer" // for security
    className={buttonVariants({
        variant: "outline",
        size: "default",
    })}
>
    See all projects
</Link>

            </div>
        </section>
    );
};

export default Projects;

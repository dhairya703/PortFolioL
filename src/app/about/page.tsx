"use client";

const About = () => {
    return (
        <section className="px-4 md:px-10 py-20 max-w-5xl mx-auto text-foreground">
            <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

            {/* Summary */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                <p className="text-muted-foreground mb-2">
                    Computer Science undergrad from VIT Chennai, passionate about building impactful tech products. Experienced in delivering real-world solutions adopted by users and businesses, with a focus on solving meaningful, everyday problems.
                </p>
                <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> dhairyagarg06@gmail.com<br />
                    <strong>GitHub:</strong>{" "}
                    <a href="https://github.com/dhairya703" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        github.com/dhairya703
                    </a>
                </p>
                 <p className="text-sm text-muted-foreground">
                    <strong>LeetCode:</strong>{" "}
                    <a href="https://leetcode.com/u/Dhairya_Garg" target="_blank" className="text-primary underline">
                        leetcode.com/u/Dhairya_Garg
                    </a><br />
                    <strong>Codeforces:</strong>{" "}
                    <a href="https://codeforces.com/profile/Dhairya_garg" target="_blank" className="text-primary underline">
                        codeforces.com/profile/Dhairya_garg
                    </a>
                </p>
            </div>

            {/* Education */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <ul className="space-y-4 text-muted-foreground text-sm">
                    <li>
                        <strong>Vellore Institute of Technology, Chennai</strong><br />
                        B.Tech in Computer Science and Engineering (CPS specialization), CGPA: 9.01<br />
                        08/2022 – 08/2026<br />
                        Relevant Coursework: Data Structures, OS, DBMS, Networks, System Design, AI
                    </li>
                    <li>
                        <strong>BVB Vidyashram, Jaipur (12th CBSE)</strong><br />
                        Percentage: 93.8 (2021–2022)<br />
                        Subjects: English Core, Math, Physics, Chemistry, PE
                    </li>
                    <li>
                        <strong>BVB Vidyashram, Jaipur (10th CBSE)</strong><br />
                        Percentage: 93.0 (2019–2020)
                    </li>
                </ul>
            </div>

           {/* Achievements */}
<div className="mb-10">
    <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
    <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-4">
        <li>
            <div>
                <p>
                    <strong>Appfusion Hackathon – 2nd Place:</strong> Built an app for Alzheimer’s patients featuring Google Maps, emergency alerts, reminders, and cognitive tests.
                </p>
                <a
                    href="https://drive.google.com/file/d/11Xl5YeiQAAvIdyZw_yY69PccPLSIS1-i/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary underline text-sm"
                >
                    View Certificate
                </a>
            </div>
        </li>
        <li>
            <div>
                <p>
                    <strong>Flutter Frames Hackathon – 2nd Place (150+ teams):</strong> Developed a women’s safety app with live street camera feeds, SOS alerts, and safe route navigation.
                </p>
                <a
                    href="https://drive.google.com/file/d/11Ud4g0bxwOGgCZaNjVtKL6mbMLX62xEj/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary underline text-sm"
                >
                    View Certificate
                </a>
            </div>
        </li>
    </ul>
</div>

            {/* Skills */}
            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 text-sm text-muted-foreground gap-4">
                    <div>
                        <strong>Languages:</strong> Java, Python, Dart, SQL, HTML, CSS
                    </div>
                    <div>
                        <strong>Frameworks & Libraries:</strong> Flutter, React Native, Node.js, Flask, React.js, Tailwind
                    </div>
                    <div>
                        <strong>Databases:</strong> PostgreSQL, MySQL, Firestore, MongoDB
                    </div>
                    <div>
                        <strong>Tools:</strong> Git, Firebase, Docker, Netlify, Vercel, Heroku, Railway, Jira, Figma, AWS
                    </div>
                    <div>
                        <strong>Practices:</strong> REST APIs, CI/CD, MVC Architecture
                    </div>
                </div>
            </div>


        </section>
    );
};

export default About;

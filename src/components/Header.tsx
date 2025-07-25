import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";

const Header = () => {
    return (
        <header className="view-container mt-16 md:mt-20">
            <p className="font-mono text-primary-light text-base md:text-xl">
                Hi, I'm Dhairya Garg.
            </p>
            <h1 className="font-semibold text-[34px] md:text-5xl lg:text-[66px] flex flex-col mt-5 leading-snug">
                <span className="text-muted-white-2">I help startups with</span>
                <span className="text-muted-white-1 md:mt-2">
                    purpose driven softwares.
                </span>
            </h1>
            <p className="max-w-xl text-base lg:text-xl text-muted-foreground mt-10 leading-normal">
                Computer Science undergrad from VIT Chennai, passionate about building impactful tech products. Experienced in delivering real-world
 solutions adopted by users and businesses, with a focus on solving meaningful, everyday problems
            </p>
            <div className="flex gap-5 mt-10">
                <Link
                    href="mailto:dhairyagarg06@gmail.com"
                    className={buttonVariants({})}
                >
                    Say Hello
                </Link>
                <Link
                    className={buttonVariants({
                        variant: "outline",
                        size: "default",
                    })}
                    href="https://cal.com/dhairya-garg-bgbkdj/30min"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Schedule a call
                </Link>
            </div>
        </header>
    );
};

export default Header;

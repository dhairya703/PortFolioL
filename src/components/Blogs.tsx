import BlogCard from "./ui/BlogCard";
import SectionTitle from "./ui/SectionTitle";

const Blogs = () => {
    return (
        <section className="view-container my-24">
            <SectionTitle
                badges={["App dev", "open source"]}
            >
                Some noteworthy blogs
            </SectionTitle>
            <div className="">
                <BlogCard slug="flutter-vs-react-native-in-2025-my-honest-thoughts-after-using-both-26a336896220">
                    flutter-vs-react-native-in-2025-my-honest-thoughts-after-using-both-26a336896220
                </BlogCard>
            </div>
        </section>
    );
};

export default Blogs;

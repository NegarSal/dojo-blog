import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlog] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;
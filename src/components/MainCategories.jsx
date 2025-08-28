import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
            {/* links */}
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="/posts" className="bg-yellow-500 text-white rounded-full px-4 py-2">All Posts</Link>
                <Link to="/posts?cat=databases" className="hover:bg-yellow-50 rounded-full px-4 py-2">Databases</Link>
                <Link to="/posts?cat=marketing" className="hover:bg-yellow-50 rounded-full px-4 py-2">Marketing</Link>
                <Link to="/posts?cat=blockchain" className="hover:bg-yellow-50 rounded-full px-4 py-2">Blockchain</Link>
                <Link to="/posts?cat=seo" className="hover:bg-yellow-50 rounded-full px-4 py-2">Search Engines</Link>
                <Link to="/posts?cat=web-dev" className="hover:bg-yellow-50 rounded-full px-4 py-2">Web Development</Link>
            </div>
            <span className="text-xl font-medium">|</span>
            {/* search */}
            <Search />
        </div>
    );
};

export default MainCategories;
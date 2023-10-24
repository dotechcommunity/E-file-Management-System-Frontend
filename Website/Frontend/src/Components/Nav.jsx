import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className=" font-lora flex  flex-col justify-evenly items-start uppercase h-screen absolute ">
            <Link to="/">Home</Link>
            <Link to="/myfiles">My Files</Link>
            <Link to="/starred">Starred</Link>
            <Link to="/file-requests">File Requests</Link>
            <Link to="/shared">Shared</Link>
            <Link to="/deleted">Deleted</Link>
        </nav>
    );
};

export default Nav;
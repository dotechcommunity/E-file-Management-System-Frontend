import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className=" font-poppins flex flex-col justify-evenly items-start w-[15vw] bg-primarytwo shadow-md leading-7 text-xl h-screen absolute pl-7 ">
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
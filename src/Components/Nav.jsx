import { Link } from "react-router-dom";
import { home, file, share, bin, star, filesLogo, fileRequest, } from "../Assets/"

const Nav = () => {
    return (
        <nav className=" font-poppins flex flex-col justify-evenly items-start 
        w-[15vw] bg-primarytwo shadow-md leading-7 text-xl h-screen absolute pl-7 ">
            <div className="flex space-x-5 items-center flex-row ">
                <img src={home} alt="files" className="w-6 h-6"/>
                <Link to="/">Home</Link>
            </div>
            <div className="flex space-x-5 items-center flex-row">
                <img src={file} alt="files" className="w-6 h-6"/>
                <Link to="/myfiles">My Files</Link>
            </div>
            <div className="flex space-x-5 items-center flex-row">
                <img src={star} alt="files" className="w-6 h-6"/>
                <Link to="/starred">Starred</Link>
            </div>
            <div className="flex space-x-5 items-center flex-row">
                <img src={fileRequest} alt="files" className="w-6 h-6"/>
                 <Link to="/file-requests">File Requests</Link>
            </div>
            <div className="flex space-x-5 items-center flex-row">
                <img src={share} className=" w-6 h-6" />
                <Link to="/shared">Shared</Link>
            </div>
            <div className="flex space-x-5 items-center flex-row">
                <img src={bin} alt="files" className="w-6 h-6"/>
                <Link to="/deleted">Deleted</Link>
            </div>

            <div className="items-center ">
                <img src={filesLogo} alt="fileLogo" className="w-50 h-50" />
            </div>
        </nav>
    );
};

export default Nav;
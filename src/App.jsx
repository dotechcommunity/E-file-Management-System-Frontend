import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyFiles from "./Pages/MyFiles";
import Starred from "./Pages/Starred";
import FileRequest from "./Pages/FileRequest";
import Shared from "./Pages/Shared";
import Deleted from "./Pages/Deleted";
import Nav from "./Components/Nav";

function App() {
  return (
      // Router is a component that wraps all the other components and provides them with the routing functionality.
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myfiles" element={<MyFiles />} />
          <Route path="/Starred" element={<Starred />} />
          <Route path="/file-requests" element={<FileRequest />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/deleted" element={<Deleted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
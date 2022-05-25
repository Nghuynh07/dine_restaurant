import { Route, Routes } from "react-router-dom";
import Family from "./components/Family";
import Social from "./components/Social";
import Special from "./components/Special";
import Book from "./pages/Book";
import Home from "./pages/Home";

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='family' element={<Family />} />
          <Route path='social' element={<Social />} />
          <Route path='special' element={<Special />} />
        </Route>
        <Route path='book' element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;

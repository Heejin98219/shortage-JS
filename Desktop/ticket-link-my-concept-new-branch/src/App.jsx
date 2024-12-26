import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MidMenus from "./components/MidMenus";
import Posters from "./components/Posters";
import Search from "./components/Search";
import TicketList from "./components/TicketList";
import TopMenus from "./components/TopMenus";
import Recommended from "./components/Recommended";
import CompanyInfo from "./components/CompanyInfo";
import SNS from "./components/SNS";
import Login from "./components/Login";
import Join from "./components/Join";
import FindId from "./components/FindId";
import FindPw from "./components/FindPw";
import ShowId from "./components/ShowId";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <TopMenus />
                <Search />
                <MidMenus />
                <Posters />
                <TicketList />
                <Recommended />
                <CompanyInfo />
                <SNS />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpw" element={<FindPw />} />
          <Route path="/showid" element={<ShowId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

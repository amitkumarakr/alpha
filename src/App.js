// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import dotenv from 'dotenv';
import Card from "./Card";
import Loading from "./Loading";
// dotenv.config();
function App() {
  const [search, setsearch] = useState("");
  const handlechange = (e) => {
    setsearch(e.target.value);
  };
  const valueserpapikey = "C6CA71E1597D4B6BB386672FD0DA98DE"
  const [load, setload] = useState(false);
  const [data, setdata] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    setload(true);
    toast.loading("Searching...Please Wait !!!");
    setdata("");
    try {
      let res = await fetch(
        `https://api.valueserp.com/search?api_key=${valueserpapikey}&q=${search}&location=Jamshedpur%2CJharkhand%2CIndia&google_domain=google.co.in&gl=in&hl=en`
      );
      res = await res.json();
      console.log(res.organic_results);
      setdata(res.organic_results.sort((a, b) => a.position - b.position));
      console.log(data);
      toast.remove();
      setload(false);
      toast.success("Search Results Fetched Successfully !!!");
    } catch (e) {
      toast.remove();
      toast.error(e.message);
      setload(false);
    }
  };
  return (
    <div >
      {load && <Loading style={{ zIndex: 100 }} />}
      <div>
        <Toaster />
      </div>

      <nav
        class="navbar navbar-light bg-dark justify-content-center"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 ,opacity: load ? 0.3 : 1, }}
      >
        <form
          class="form-inline"
          onSubmit={handlesubmit}
          style={{ width: "80%", display: "flex", justifyContent: "center" , gap : "15px" }}
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={handlechange}
            style={{ textAlign: "center" }} // Align input text to center
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>

      <div
        style={{
          paddingTop: "70px", // Adjust this value to match the height of your navbar
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "silver",
          opacity: load ? 0.3 : 1,// Adjust the opacity based on loading state
          minHeight : "93vh"
        }}
      >
        {data &&
          data.map((element) => {
            return (
              <Card
                title={element.title}
                desc={element.snippet}
                link={element.link}
                domain={element.domain}
              />
            );
          })}
      </div>

      {(
        <footer class="bg-dark text-white text-center text-lg-start" style = {{opacity: load ? 0.3 : 1}}>
          <div
            class="text-center p-3"
          >
            © 2024 Copyright:
            Team Alpha
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;

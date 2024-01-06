import { Link, Route, Routes } from "react-router-dom";
import { All } from "./All";
import { FullStackDevelopment } from "./FullStackDevelopment";
import { Career } from "./Career";
import { CyberSecurity } from "./CyberSecurity";

export function DataScience() {
  return (
    <div className="container-{breakpoint}">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="4000">
            <div className="d-blockfull w-100">
              <h1 className="dataTitle">Data Science</h1>
              <p className="dataPera">
                One of the most propelling careers on the planet today, Data
                Science is a vast arena of diverse technologies and techniques.
                Are you ready to step into the world of Data? Then you probably
                should not miss this corner of articles that is an assorted
                curation out of tedious research & exploration.
                <p className="dataPera1">
                  The GUVI Blog’s Data Science category is here to help you
                  steer through a lot of opinions that float on the internet.
                  High-Quality content curated by experts!
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-navbar">
        <ul className="col-custom-midnav">
          <li id="midLink">
            <Link to="/all" className="navlink">
              ALL
            </Link>
          </li>
          <li id="midLink">
            <Link to="/fullstack" className="navlink">
              FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li id="midLink">
            <Link to="/datascience" className="navlink">
              DATA SCIENCE
            </Link>
          </li>
          <li id="midLink">
            <Link to="/cybersecurity" className="navlink">
              CYBER SECURITY
            </Link>
          </li>
          <li id="midLink">
            <Link to="/career" className="navlink">
              CAREER
            </Link>
          </li>
        </ul>
      </div>
      <div className="display">
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Competitive-Analysis-for-a-UX-Design.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">Competitive Analysis for a UX Design</h5>
            <p className="card-text">
              UX designers play a pivotal role in customer satisfaction and
              retention. Thus, a competitive analysis.
            </p>
            <a href="#" className="link-success">
              Read More &#187;
            </a>
          </div>
        </div>
        {/* div 2 */}
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Best-9-Opportunities-for-Mechanical-Engineers-in-Indias-EV-Industry.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">
              Best 9 Opportunities for Mechanical Engineers in India’s EV
              Industry
            </h5>
            <p className="card-text">
              As the electric vehicle (EV) industry accelerates in India, it
              brings with it a range.
            </p>
            <a href="#" className="link-success">
              Read More &#187;
            </a>
          </div>
        </div>
        {/* div-3 */}
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/1.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">
              Top 8 Big Data Visualization Tools That You Should Know in 2024
            </h5>
            <p className="card-text">
              The world is driven by data these days. You can almost predict
              future events if.
            </p>
            <a href="#" className="link link-success">
              Read More &#187;
            </a>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/fullstack" element={<FullStackDevelopment />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

// export default DataScience() ;

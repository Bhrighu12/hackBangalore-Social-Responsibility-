import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";
function HomePage(){
    return(
        <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Invest to Unleash the Potential !</h1>
          <p>
            <h2>"Thynk Unlimited Thynk Technology"</h2>
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Patent's Granted</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Award's Gained</h2>
            </div>
            <div className="box">
              <h1>435+</h1>
              <h2>Industry Ready Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/homeimg.jpg" alt="" />
      </div>
    </div>

    )
}
export default HomePage;
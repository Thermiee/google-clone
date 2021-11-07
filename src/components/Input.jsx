import { Search, Mic } from "@material-ui/icons";
import Privacy from "../assets/privacy.png";

const Input = ({ setSearch }) => {
  // Use setSearch function to get the value of search
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="inputSection">
        <form>
          <div className="inputGroup">
            <div className="inputController">
              <div className="inputField">
                <div className="inputFieldInner">
                  <div className="searchIconContainer">
                    <Search />
                  </div>
                  <div className="inputFieldContainer">
                    <input
                      className="inputText"
                      type="text"
                      name=""
                      id=""
                      onChange={handleChange}
                    />
                  </div>
                  <div className="micIconContainer">
                    <Mic />
                  </div>
                </div>
              </div>
            </div>

            <div className="inputButtonsContainer">
              <center>
                <input
                  className="inputButton"
                  type="search"
                  defaultValue="Sidehustle Search"
                  aria-label="Sidehustle Search"
                  onChange={(e) => console.log(e.target.value)}
                />
                <input
                  className="inputButton"
                  type="search"
                  defaultValue="I'm Feeling Lucky"
                  aria-label="I'm Feeling Lucky"
                  onChange={(e) => console.log(e.target.value)}
                />
              </center>
            </div>
          </div>
        </form>
      </div>
      <div className="privacySection">
        <div className="privacy">
          <div className="privacyContent">
            <img src={Privacy} className="privacyImage" alt="privacy logo" />
            <p className="privacyLink">Take your Privacy Checkup</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;

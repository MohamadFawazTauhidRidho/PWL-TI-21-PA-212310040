import ChapterOne from "./ChapterOne";
import Footers from "./Footers";
import Headers from "./Headers";

const LayoutInit = ({ children }) => {
  return (
    <div className="background-image">
      <div className="">
        <div className="">
          
          <Headers />

          <section className="">
            <div className=""><ChapterOne/>
            </div>
          </section>

          <Footers />

        </div>
      </div>
    </div>
  );
};

export default LayoutInit;

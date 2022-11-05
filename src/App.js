import BootNavbar from "./components/navbar/navbar.js";
import Landing from "./components/landing/landing.js";
import About from "./components/about/about.js";
import Tracks from "./components/tracks/tracks.js";
import Prizes from "./components/prizes/prizes.js";
import Sponsors from "./components/sponsors/sponsors.js";
import FAQ from "./components/faq/faq.js";
import Footer from "./components/footer/footer.js";
import TimeLine from "./components/timeline/timeline.js";
import Themes from "./components/themes/Themes.jsx";
import Crew from "./components/crew/crew.jsx";
import Speakers from "./components/speakers/speakers.js";
import Judges from "./components/judges/judges.js";

function App() {
  return (
    <div>
      <BootNavbar />
      <Landing />
      <About />
      <Themes />
      <Tracks />
      <Prizes />
      <TimeLine />
      <Sponsors />
      {/* <Speakers /> */}
      {/* <Judges /> */}
      <Crew />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

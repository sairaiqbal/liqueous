import MainContent from "./components/MainContent/MainContent";
import TickerArea from "./components/TickerArea/TickerArea";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <TickerArea />
      <MainContent />
    </div>
  );
};
export default Home;

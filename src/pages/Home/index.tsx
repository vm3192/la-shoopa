import Carousel from "../../components/Carousel";
import ClothesList from "../../components/ClothesList";
import Sales from "../../components/Sales";

const Home: React.FC = () => {
	return (
		<>
			<Carousel />
			<Sales />
			<ClothesList />
		</>
	);
};

export default Home;

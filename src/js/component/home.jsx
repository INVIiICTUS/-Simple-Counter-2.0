import React from "react";
import Contador from "./Contador.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Tontada from "./Tontada.jsx";


//create your first component
const Home = ({
	segundos,
	minutos,
	horas,
	dias,
	resetearContador,
}) => {
	return (
		<>
			<Jumbotron />
			<>
			<Contador
				segundos={segundos}
				minutos={minutos}
				horas={horas}
				dias={dias}
				resetearContador={resetearContador}
			/>
			</>
			<Tontada />
		</>
	);
};

export default Home;
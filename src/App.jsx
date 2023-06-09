/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	const eliminarPaciente = (id) => {
		// filtramos para dejar en el estado a los pacientes que no tienen el id que queremos eliminar.
		const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )
		setPacientes(pacientesActualizados)

	}

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Formulario
					setPacientes={setPacientes}
					pacientes={pacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					paciente={paciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;

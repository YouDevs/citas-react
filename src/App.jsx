/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	const [pacientes, setPacientes] = useState(() => {
		return JSON.parse(localStorage.getItem('pacientes')) ?? []
	});
	const [paciente, setPaciente] = useState({});

	// useEffect(() => {
	// 	console.log('algo en local storage?')
	// 	console.log(localStorage.getItem('pacientes'))
	// 	const obtenerLS = () => {
	// 		const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
	// 		setPacientes(pacientesLS)
	// 	}

	// 	obtenerLS()
	// }, [])

	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes))
	}, [pacientes])

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

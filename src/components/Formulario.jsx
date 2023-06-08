/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import Error from './Error'
import Paciente from './Paciente';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

	const [nombre, setNombre] = useState('')
	const [propietario, setPropietario] = useState('')
	const [email, setEmail] = useState('')
	const [fecha, setFecha] = useState('')
	const [sintomas, setSintomas] = useState('')
	const [error, setError] = useState(false)

	// En este caso useEffect se ejecuta cuando estado: paciente cambie.
	useEffect(() => {
		// valida que el objeto paciente tenga algo:
		if( Object.keys(paciente).length > 0 ) {
			// Setea los estados de los inputs de formulario:
			setNombre(paciente.nombre)
			setPropietario(paciente.propietario)
			setEmail(paciente.email)
			setFecha(paciente.fecha)
			setSintomas(paciente.sintomas)
		}

	}, [paciente])

	// Este useEfecct se ejecutaría solo se va a ejecutar una vez cuando el componente esté listo:
	// useEffect(() => {
	// 	console.log("El componente está Listo")

	// }, [])

	const generarId = () => {
		const random = Math.random().toString(36).substr(2)
		const fecha = Date.now().toString(36)

		return random + fecha
	}


	const handleSubmit = (e) => {
		e.preventDefault()

		// Validación
		if( [nombre, propietario, email, fecha, sintomas].includes('') ) {
			setError(true)
			return
		}

		setError(false)

		// Objecto paciente:
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas
		}

		// Si existe paciente.id quiere decir que estamos editando:
		if(paciente.id) {
			// Editando paciente
			// Asignamos el id que ya vive en el objeto paciente:
			objetoPaciente.id = paciente.id

			console.log(objetoPaciente)
			// Itera sobre todos los pacientes del state
			// Si encuentra al paciente que se actualizará lo retorna con los cambios
			// Mientras no se encuentre retornará a los pacientes en su estado actual.
			const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

			setPacientes(pacientesActualizados)
			setPaciente({})
		} else {
			// Nuevo paciente
			// Asignamos un id al nuevo paciente:
			objetoPaciente.id = generarId()
			setPacientes([...pacientes, objetoPaciente])
		}


		// Reiniciar el formulario:
		setNombre('')
		setPropietario('')
		setEmail('')
		setFecha('')
		setSintomas('')

		console.log("Formulario Enviado")
	}

	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
			<p className="text-lg mt-5 text-center mb-10">
				Añade pacientes y {""}
				<span className="text-indigo-600 font-bold">Adminstralos</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
			>
				{ error && <Error> <p>Todos los campos son obligatorios</p> </Error> }

				<div className="mb-5">
					<label
						type="text"
						htmlFor="mascota"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={nombre}
						onChange={ (e) => setNombre(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label
						type="text"
						htmlFor="propietario"
						className="block text-gray-700 uppercase font-bold"
					>
						Nombre Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre de la propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={propietario}
						onChange={ (e) => setPropietario(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label
						type="text"
						htmlFor="email"
						className="block text-gray-700 uppercase font-bold"
					>
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Email contacto propietario"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={email}
						onChange={ (e) => setEmail(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label
						type="text"
						htmlFor="alta"
						className="block text-gray-700 uppercase font-bold"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						value={fecha}
						onChange={ (e) => setFecha(e.target.value) }
					/>
				</div>
				<div className="mb-5">
					<label
						type="text"
						htmlFor="sintomas"
						className="block text-gray-700 uppercase font-bold"
					>
						Sintomas
					</label>
					<textarea
						name=""
						id="sintomas"
						className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
						placeholder="Describe los sintomas"
						value={sintomas}
						onChange={ (e) => setSintomas(e.target.value) }
					></textarea>
				</div>

				<input
					type="submit"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
					value={paciente.id ? 'Editar Paciente': 'Agregar paciente'}
				/>

			</form>
		</div>
	);
};

export default Formulario;

import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
		<h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
		<p className="text-xl mt-5 mb-10 text-center">
				Administra tus {""}
				<span className="text-indigo-600 font-bold">Pacientes y Citas</span>
		</p>

		<div className="m-3 bg-white shadow-md px-5 py-10 rounded">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Propietario: {""}
				<span className="font-normal normal-case">Carlos</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: {""}
				<span className="font-normal normal-case">
					carlos_develops@outlook.com
				</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Alta: {""}
				<span className="font-normal normal-case">10 Diciembre 2023</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Sintomas: {""}
				<span className="font-normal normal-case">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</span>
			</p>
		</div>

		<Paciente />
		<Paciente />
		<Paciente />
		<Paciente />
		<Paciente />
    </div>
  );
};

export default ListadoPacientes;

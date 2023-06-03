const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded">
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
  )
}

export default Paciente
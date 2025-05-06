import React, {useState} from "react";

// Componente principal
const Home = () => {

	// Estado para almacenar la lista de tareas
	const [todoList, setTodoList] = useState([])

	// Estado para almacenar el valor del input (nueva tarea)
	const [newTodo, setNewTodo] = useState("")

	// Estado para controlar cuál elemento debe mostrar la "X" (índice del item)
	const [showX, setShowX] = useState(null)

	// Función que se ejecuta al presionar una tecla en el input
	const handlePressKey = (e) => {

		// Si la tecla presionada es "Enter"
		if (e.key === "Enter"){
			// Agrega la nueva tarea a la lista y limpia el input
			setTodoList([...todoList, newTodo])
			setNewTodo("")
		}
	}

	// Función para eliminar una tarea según su índice
	const handleDelete = (indexToDelete) => {
		// Filtra la lista, quitando el elemento con el índice que se desea eliminar
		setTodoList(todoList.filter((elem, index) => index ==! indexToDelete))
	}

	return (
		<div className="text-center">
			{/* Título del todo list */}
            <div>Todo</div>

			<div id="container">
				<ul>
					{/* Input para agregar nuevas tareas */}
					<li>
						<input
							type="text"
							placeholder="Agregar Tarea"
							value={newTodo}
							onChange={(e)=> setNewTodo(e.target.value)} // Actualiza el valor del input
							onKeyDown={handlePressKey} // Escucha si se presiona "Enter"
						/>
					</li>

					{/* Mapea y muestra todas las tareas en la lista */}
					{
						todoList.map((todo, index)=>(

							// Cada tarea es un <li> que detecta si el mouse está encima o no
							<li 
							className="d-flex justify-content-between"
							key={index}
								onMouseOver={() => setShowX(index)} // Muestra la X
								onMouseLeave={() => setShowX(null)} // Oculta la X


							><span>{todo}</span>
								{/* Texto de la tarea */}
								

								{/* Botón "X" para eliminar la tarea, aparece solo si el mouse está encima */}
								{showX === index && 
									<small className="mx-5" onClick={() => handleDelete(index)}>X</small>
								}
							</li>
						))
					}

					{/* Muestra un mensaje según la cantidad de tareas */}
					<li>
						{todoList.length === 0
							? "No hay tareas, añadir tareas"
							: todoList.length + " Por hacer"}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home; // Exporta el componente para que se use en otros archivos

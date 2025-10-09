const preg = document.getElementById("pregunta");
const resp_input = document.getElementById("respuesta");

let pregunta_actual = 0;
const preguntas = [
	{
		question: "pregunta 1",
		answer: 1,
		deviation: .5
	},
	{
		question: "pregunta 2",
		answer: 2,
		deviation: .5
	},
	{
		question: "pregunta 3",
		answer: 3,
		deviation: .5
	}
];
const max_preguntas = preguntas.length;

function popular_preguntas() {
	preg.innerHTML = preguntas[pregunta_actual].question;
	resp_input.value = ""
}

function siguiente_pregunta() {
	const respuesta_input = parseInt(resp_input.value)
	const i = preguntas[pregunta_actual]

	if (i.answer - i.deviation < respuesta_input
		&& respuesta_input < i.answer + i.deviation) {
		if (pregunta_actual < max_preguntas-1) {
			pregunta_actual += 1;
			popular_preguntas();
		}
		else {
			alert("se acabaron las preguntas");
		}
	} else {
		alert("respuesta incorrecta")
	}
}

// llenar primera pregunta al inicial pagina
popular_preguntas()

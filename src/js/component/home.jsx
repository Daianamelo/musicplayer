import React, {useState, useEffect, useRef} from "react";
//importo useref
//include images into your bundle


//create your first componen
const Home = () => {

	//declaramos estado 
	
	const [sound, setSound]=useState([]);
	//     [estado,funcion actualiza estado]
	const audioElemento = useRef();//activo useRef para refernciarlo despues a la etiqueta audio
	
	//funcion para enfocar en el audio
	const playSong = (index) => {
		// inputElement.current.focus();
		audioElemento.current.src=`https://assets.breatheco.de/apis/sound/${sound[index].url}`;
		console.log(audioElemento.current);
		audioElemento.current.play();
		//console.log(audioElemento.current.src);
		console.log(sound[index].url); //(array[posicion].propiedad) 
		console.log(sound);

		if (play) {
			
		}
	  };


	useEffect(()=>{
		//codigo a ejecutar
	// console.log("La pagina se ha cargado exitosamente");
	fetch('https://assets.breatheco.de/apis/sound/songs') //1.ir a buscar info en la url
	.then((response)=>response.json()) //2.Convierte la respuesta en un json
	.then((data)=>setSound(data)) //3. GUarda el json en un objeto data

	},[])//cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina

	return (
		<>
{/* dibujamos la lista de canciones */}

		<ol class="text-light bg-dark" type="1">
			{sound.map((item, index)=><li className="elements m-2 border-bottom" key={item.id}>{item.name}<button onClick={() => playSong(index)}><i className="fas fa-play-circle"></i></button></li>)}
		</ol>
		
		<div>
			<audio controls ref={audioElemento}>
  <source src="https://assets.breatheco.de/apis/sound"  type="audio/ogg"/>
  {/* <source src="horse.mp3" type="audio/mpeg"> */}
  Your browser does not support the audio element.
</audio>
</div>
		

		
		</>
	);
};

export default Home;


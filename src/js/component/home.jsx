import React, {useState, useEffect, useRef} from "react";
//importo useref
//include images into your bundle


//create your first componen
const Home = () => {

	//declaramos estado 	
	const [sound, setSound]=useState([]);
	let [lugar,setLugar]=useState(0)
	//     [estado,funcion actualiza estado]
let playElemento = useRef();//activo useRef para refernciarlo despues a la etiqueta audio
	//funcion para enfocar en el audio
	useEffect(()=>{
		//codigo a ejecutar
	// console.log("La pagina se ha cargado exitosamente");
	fetch('https://assets.breatheco.de/apis/sound/songs') //1.ir a buscar info en la url
	.then((response)=>response.json()) //2.Convierte la respuesta en un json
	.then((data)=>setSound(data)) //3. GUarda el json en un objeto data

	},[])//cuando el array está vacio el va a cargar el codigo a ejecutar UNA vez cargada la pagina

	function playSong (url,index){
	
		if (playElemento.current.paused) {
			playElemento.current.src=`https://assets.breatheco.de/apis/sound/${url}`
		playElemento.current.play()	
		}else{
			playElemento.current.pause
		}
		setLugar(index)
	  }
	  function atras(){
		setLugar(lugar - 1);
		playElemento.current.src=`https://assets.breatheco.de/apis/sound/${sound[lugar].url}`;
		playElemento.current.play();
	  }
	  
	  function siguiente(){
		setLugar(lugar + 1);
		playElemento.current.src=`https://assets.breatheco.de/apis/sound/${sound[lugar].url}`;
		playElemento.current.play();
	  }
	return (
		<>
{/* dibujamos la lista de canciones */}

		<ol className="text-light bg-dark" type="1">
			{sound.map((item, index)=><li className="elements m-2 border-bottom" key={index}>{item.name}<button onClick={() => playSong(item.url,index)}><i className="fas fa-play-circle"></i></button></li>)}
		</ol>
		
		<div>
		<button onClick={atras}><i className="fa fa-backward"></i> </button>
		<audio ref={playElemento} controls/>
<button onClick={siguiente}><i className="fa fa-forward"></i></button>
</div>
		

		
		</>
	);
};

export default Home;


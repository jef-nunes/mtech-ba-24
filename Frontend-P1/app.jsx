document.body.style.backgroundColor = "rgb(0, 0, 0)";
document.body.style.backgroundRepeat = "no-repeat";
const logo = new Image(441, 121);
logo.src = "Logo.png";
let currentDisplay = 1;
let showMenuItems = false

const text1 = "Bem vindo a tecnologica plataforma de jogos,\n contendo diversas utilidades como:\n diversos jogos, perfil de usuário e ranking de jogadores"
const text2 = "Nossa empresa foi criada para o mercado de jogos e estamos sempre inovando em nossos produtos"

function App(){

const [currentDisplay, setCurrentDisplay] = React.useState(1);

const MenuBtn = ({ newStyle, label, indexer }) => {
  const [itemHover, setItemHover] = React.useState(false);
  return (
    <button
      style={{ ...newStyle, fontWeight:"bold", color:"rgb(53, 255, 103)", padding: '10px 15px',borderRadius: '10px',borderColor:"rgb(28, 243, 0)",borderWidth:"2px",
      backgroundColor: itemHover ? "rgb(36, 56, 30)" : "rgb(34, 50, 24)" }}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)} onClick={function(){
        setCurrentDisplay(indexer)
        console.log(currentDisplay)}}>
      {label}
    </button>
  );
}

const TopBar=()=>{
  const itemStyle = { fontSize: "medium", color: "#9dff52", marginLeft:"20px" };
      return (
      <div>
      <div style={{ backgroundColor: "rgb(10, 10, 10)", display: "flex", width: "220px", height: "44px",
      position: "absolute", marginLeft:"230px",marginTop:"15px", flexDirection: "row",
      borderRadius:"10px", borderWidth:"2px", borderColor:"rgb(247, 247, 247)", paddingTop:"10px", paddingBottom:"10px",
      borderStyle:"solid",borderWidth:"2px",borderColor:"#FFFFFF"}}>
      <img src={"Logo.png"} style={{width:200,height:40,paddingLeft:20,paddingRight:20}}/>
      </div>
      <div style={{backgroundColor: "rgb(18, 28, 28)", display: "flex", width: "680px", height: "44px",
      position: "absolute", right:"450px",marginTop:"15px", flexDirection: "row",
      borderColor:"rgb(247, 247, 247)", paddingTop:"10px", paddingBottom:"10px",
      borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(31, 40, 68)",borderRadius:"15px"}}>
      <MenuBtn newStyle={itemStyle} label="Features" indexer={1}/>
      <MenuBtn newStyle={itemStyle} label="Sobre" indexer={2}/>
      <MenuBtn newStyle={itemStyle} label="Jogos" indexer={3}/>
      <MenuBtn newStyle={itemStyle} label="Ranking" indexer={4}/>
      <MenuBtn newStyle={itemStyle} label="Perfil" indexer={5}/>
      <MenuBtn newStyle={itemStyle} label="Versões" indexer={6}/>
      </div>
      </div>)
}

const Middle=()=>{
  let display = (<div/>)
  switch (currentDisplay){
    case 1:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="arcades.jpg" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  <p style={{color:"#FFFFFF",fontSize:"32px",textAlign: "left", width:"250px", marginLeft:"700px"}}>
  {text1}
  </p>
  </div>
  </div>
  </div>
  );
  break;
  case 2:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="about.jpg" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  <p style={{color:"#FFFFFF",fontSize:"32px",textAlign: "left", width:"250px", marginLeft:"700px"}}>
  {text2}
  </p>
  </div>
  </div>
  </div>
  );
  break;
  case 3:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="Jogos.jpg" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  </div>
  </div>
  </div>
  );
  break;
  case 4:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="rankings.jpg" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  </div>
  </div>
  </div>
  );
  break;
  case 5:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="avatar.png" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  </div>
  </div>
  </div>
  );
  break;
  case 6:
    display = (<div style={{marginTop:"170px"}}>
    <div style={{marginTop:"50px",width:"100vw",height:"356px",backgroundColor:"rgb(1, 1, 5)"
  }}>
  <div style={{position:"absolute",marginBottom:"0px",width:"100vw",height:"556px",backgroundColor:"rgb(1, 8, 40)",
    backgroundImage:`url(circuits.jpg)`, backgroundRepeat:"no-repeat", backgroundSize:"100vw,356px", opacity:"0.5"
  }}></div>
  <div style={{backgroundColor:"rgb(8, 8, 15)",position:"absolute",marginTop:"0px",marginLeft:"125px", width:"1356px",height:"556px",
     borderStyle:"solid",borderWidth:"1px",borderColor:"rgb(50,50,50)"
  }}>
  <img src="consoles.jpg" style={{position:"absolute",marginTop:"50px",marginLeft:"50px", width:"386px",height:"256px",
  borderStyle:"solid",borderWidth:"2px",borderColor:"rgb(50,150,254)"}}/>
  </div>
  </div>
  </div>
  );
  break;
  default:
    break;
}
return display;
}

return (<div style={{position:"absolute",top:0,left:0}}>
<TopBar/>
<Middle/>
</div>)
}

setTimeout(()=>{
ReactDOM.render(<App/>, document.getElementById('root'));
},500);
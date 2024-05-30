const tg = window.Telegram.WebApp
// const app = () =>{
//     useEffect(()=>{
//         tg.ready();
//     }, [])
//     const OnClose =()=>{
//         tg.close()
//     }
//     return(
//     <div className="App">

//     <button onclick={OnClose}></button>
//     </div>
// );}
const username = document.getElementById("name")
username.textContent = tg?.username
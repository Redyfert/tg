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
let username = "Aleg Loh"
let user = document.getElementById("name")
user.textContent = tg.first_name

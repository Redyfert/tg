const tg = window.Telegram.WebApp
const app = () =>{
    useEffect(()=>{
        tg.ready();
    }, [])
    const OnClose =()=>{
        tg.close()
    }
    return(
    <div className="App">
    ogo
    <button onclick={OnClose}></button>
    </div>
);}
app()
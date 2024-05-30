const tg = window.Telegram.WebApp
const app = () =>{
    useEffect(()=>{
        tg.ready();
    }, [])
    let OnClose =()=>{
        tg.close()
    }
    return(
    <div className="App">
    <span>${tg.initDataUnsafe?.user?.username}</span>
    <button onclick={OnClose}>Close</button>
    </div>
);}
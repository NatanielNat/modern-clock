
const timer = () => {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    document.querySelector(".hh").innerHTML = h.toString().padStart(2,'0');
    document.querySelector(".mm").innerHTML = m.toString().padStart(2,'0');
    document.querySelector(".ss").innerHTML = s.toString().padStart(2,'0');
    
    /* const text = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    document.querySelector(".time").innerHTML = text; */
    
}
setInterval(timer,1000)





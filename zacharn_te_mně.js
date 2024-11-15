function Control(){
    const suffering = document.getElementById("paswd");
    const eternal_suffering = document.getElementById("ctrl_paswd");
    const output = document.getElementById("output")
    const nick = document.getElementById("nick")
    const code = document.getElementById("code")


    //console.log(suffering);

    if ((suffering.value == eternal_suffering.value) && (!isNaN(code.value) && (nick.value != "") && (suffering.value != "") && (eternal_suffering.value != ""))){
        
        console.log("login is true");
        output.innerHTML =("login is true");
        output.style.color= "green" //inspirace od Šimona
    }
    else{
        console.log("login is flase");
        output.innerHTML =("login is false");
        output.style.color= "red"
    }
}
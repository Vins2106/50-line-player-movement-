let player = document.querySelector(".player");
let ref = document.getElementById("cur-key");
document.onkeypress = (e) => {
  if (e.code == "KeyW") {
  	console.log("atas")
  	ref.innerHTML = "atas /\\";
  	if (!player.style.marginTop || player.style.marginTop == "0px") return;
  	player.style.marginTop = parseInt(player.style.marginTop.replace(/px/g, '') || 0) - 10 + "px";
  } else if (e.code == "KeyD") {
  	console.log("kanan") 
  	ref.innerHTML = "kanan >"; 
  	if (player.style.marginLeft == "470px") return; 
  	player.style.marginLeft = parseInt(player.style.marginLeft.replace(/px/g, '') || 0) + 10 + "px"; 
  } else if (e.code == "KeyS") { 
  	console.log("bawa") 
  	ref.innerHTML = "bawa \\/"; 
  	if (player.style.marginTop == "470px") return; 
  	player.style.marginTop = parseInt(player.style.marginTop.replace(/px/g, '') || 0) + 10 + "px"; 
  	console.log(player.style.marginTop) 
  } else if (e.code == "KeyA") { 
  	console.log("kiri") 
  	ref.innerHTML = "kiri <"; 
  	if (!player.style.marginLeft || player.style.marginLeft == "0px") return; 
  	player.style.marginLeft = parseInt(player.style.marginLeft.replace(/px/g, '') || 0) - 10 + "px"; 
  } 
}
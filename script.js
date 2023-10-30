//your JS code here. If required.
const button = document.querySelector("#enterBtn");
const fun = () => {
	const heading = document.createElement("h1");
	heading.innerText = "Entered Metaverse";

	const para = document.querySelector("#status");
	
	const body = document.querySelector("body");

	body.insertBefore(heading, para);
	para.remove();

	console.log(body);
	
}

button.addEventListener("click",fun);
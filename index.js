const delay = require('delay');
async function nomeDaFuncao(){
	console.log("Hello Wolrd!");
	await delay(3000);
	console.log("Hello 2");
	
}
nomeDaFuncao();
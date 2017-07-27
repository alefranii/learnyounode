var n = 0;

for(var i = 2; i < process.argv.length; i++){
	n = n + parseInt(process.argv[i]);
}

console.log(n);
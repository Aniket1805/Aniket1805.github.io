var names=new Array();
names[0]="Yaakov";
names[1]="john";
names[2]="jen";
names[3]="paul";
names[4]="frank";
names[6]="larry";
names[7]="pola";
names[8]="nora";
names[9]="jim";
for (var i =0; i < names.length ;  i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
		console.log("Goodbye" +names[i])
}
else{
	console.log("Hello" + names[i])
}
var vect=["Diego"];
console.log(vect);


var ing=function()
{
	var nom1=document.getElementById("nom1").value;
	vect.push(nom1);
	console.log(vect);
	document.getElementById("nom1").value="";
}



var elim=function()
{
	var a=0;
	var nom2=document.getElementById("nom2").value;
	var ultimo=vect.length-1;


	while(a<vect.length)
	{
		
		if(nom2==vect[a])
		{
			var ult=vect[ultimo];
			vect[ultimo]=vect[a];
			vect[a]=ult;
			vect.pop();
			console.log(vect);
			a=vect.length;
			document.getElementById("men").value="Eliminado con exito";
			document.getElementById("nom2").value="";
		}
		else
		{
			a=a+1;
			if (nom2!=vect[a])
			{
				document.getElementById("men").value=nom2+" no ha sido encontrado";
			}
		}
	}
}


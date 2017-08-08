
var animalContainer=document.getElementById("animal-info");
var btn=document.getElementById('btn');
var pageCounter=1;

btn.addEventListener("click",function(){
	var ourRequest=new XMLHttpRequest();
	ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-"+pageCounter+".json");

	ourRequest.onload=function(){
	
	
	//console.log(ourRequest.responseText);
	var ourData=JSON.parse(ourRequest.responseText);
	//console.log(ourData[0]);
	
	randerHTML(ourData);
	
	
	};

ourRequest.send();
pageCounter++;
if(pageCounter>3)
{
	btn.style.visibility='hidden';
}
}
);

function randerHTML(data)
{
	var htmlString="";
	for(i=0;i<data.length;i++)
	{
		htmlString+="<p>"+data[i].name+" is a "+data[i].species;
		
		for(j=0;j<data[i].foods.likes.length;j++)
		{
			htmlString+="It likes "+data[i].foods.likes[j];
			
			if(j+1!=data[i].foods.likes.length) htmlString+=' , ';
		}
		
		for(j=0;j<data[i].foods.dislikes.length;j++)
		{
			htmlString+="It dislikes "+data[i].foods.dislikes[j]+' , ';
			
			if(j+1!=data[i].foods.dislikes.length) htmlString+=' , ';
		}
		
		
		htmlString+=".</p>";
		
	}
	animalContainer.insertAdjacentHTML("beforeend",htmlString);
	
	
}






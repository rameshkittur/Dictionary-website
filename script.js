const dictionary =async(word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0af08b847bmsh83a0be3664afe0dp1e359cjsnef6efdc4c13f',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url+word,options)
.then(response=>response.json())
.then((response)=>{
    console.log(response)
    wordheading.innerHTML="Meaning of: "+response.word
    defination.innerHTML=response.definition.replace("4.","<br>4.").replace("2.","<br>2.").replace("3.","<br>3.")

})
.catch(err=>console.log(err));
}

searchbtn.addEventListener("click",(e)=>{
  e.preventDefault();
  dictionary(searchinput.value)
})
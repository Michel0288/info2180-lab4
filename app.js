onload= function(){
    var btn=document.getElementById('btn');
    var httpRequest=new XMLHttpRequest();
    var result=document.getElementById('result');
    var result1=document.getElementById('result-tag');
    var character=document.getElementById('textbox');
    btn.addEventListener('click',function(event){
        event.preventDefault();
        var url="superheroes.php?charac_data="+character.value;
        httpRequest.onreadystatechange=hrequest;
        // httpRequest.open('GET',url);
        httpRequest.open('GET',url,true);
        httpRequest.send(); 
    });
    
    function hrequest(){
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if (httpRequest.status===200){
                var response=httpRequest.responseText;
                result1.innerHTML="RESULT"
                result.innerHTML=response;
                //alert(response);
            }else{
                result1.innerHTML="RESULT"
                result.innerHTML="There was a problem with the request";
                //alert('There was a problem with the request')
            }
        }
    }
}
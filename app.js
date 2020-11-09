onload= function(){
    var btn=document.getElementById('btn');
    var httpRequest=new XMLHttpRequest();

    btn.addEventListener('click',function(event){
        var url='superheroes.php'
        httpRequest.onreadystatechange=hrequest;
        httpRequest.open('GET',url);
        httpRequest.send();
    });
    
    function hrequest(){
        if(httpRequest.readyState===XMLHttpRequest.DONE){
            if (httpRequest.status===200){
                var response=httpRequest.responseText;
                alert(response);
            }else{
                alert('There was a problem with the request')
            }
        }
    }
}
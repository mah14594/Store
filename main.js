
//single product and add to cart pages
function decrease(){
    var quan=parseInt (document.getElementById("quant").value) ;

quan-=1;
if (quan==-1){
    quan=0;
}
document.getElementById("quant").value=quan;

}
function increase(){
    var quan=parseInt (document.getElementById("quant").value) ;

quan+=1;
document.getElementById("quant").value=quan;

}
function decrease1(){
    var quan=parseInt (document.getElementById("quant1").value) ;

quan-=1;
if (quan==-1){
    quan=0;
}
document.getElementById("quant1").value=quan;

}
function increase1(){
    var quan=parseInt (document.getElementById("quant1").value) ;

quan+=1;
document.getElementById("quant1").value=quan;

}
function decrease2(){
    var quan=parseInt (document.getElementById("quant2").value) ;

quan-=1;
if (quan==-1){
    quan=0;
}
document.getElementById("quant2").value=quan;

}
function increase2(){
    var quan=parseInt (document.getElementById("quant2").value) ;

quan+=1;
document.getElementById("quant2").value=quan;

}
function decrease3(){
    var quan=parseInt (document.getElementById("quant3").value) ;

quan-=1;
if (quan==-1){
    quan=0;
}
document.getElementById("quant3").value=quan;

}
function increase3(){
    var quan=parseInt (document.getElementById("quant3").value) ;

quan+=1;
document.getElementById("quant3").value=quan;

}
//remove button in add to cart page 


function remove(elem){
    var ids=["row1","row2","row3"];
    if (elem.id=="remove1"){
        document.getElementById(ids[0]).style.display="none";
    }
    if (elem.id=="remove2"){
        document.getElementById(ids[1]).style.display="none";
    }
      if (elem.id=="remove3"){ 
        document.getElementById(ids[2]).style.display="none";
    }
}
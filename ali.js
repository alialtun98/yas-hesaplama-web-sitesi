const getButton=document.querySelector("button");
getButton.addEventListener('click',function(){
    const divEl=document.querySelector("div");
    const yas=document.querySelector("input[name='yas']").value;
    let result=2022-yas;

    divEl.innerHTML=`Yaşınız ${result}`;

    if(result != Number(result)){
        divEl.innerHTML= `Sadece Sayı Giriniz`;
    }

    if(result<0){
        divEl.innerHTML= `Yaşınızı - Sayı Olamaz`;
    }

    if(result>105){
        divEl.innerHTML= `YAŞIYOR OLSAYDINIZ ${result} YAŞINDA OLURDUNUZ`;
    }

});
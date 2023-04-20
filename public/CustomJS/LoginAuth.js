$(document).ready(function(){
    let loginData = $('.userLoginForm');
    loginData.off().on('submit',(e) => {
        e.preventDefault();
        userLogin();
    });
});

async function userLogin(){
    const array=$('.userLoginForm').serializeArray();
    let data = {}
    for(let key of array){
        data[key.name] = key.value 
    }
    const URL = Base_url + 'api/userAuth';
    console.log(URL);
    const options = {
        method : 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type" : "Application/json"
        }
    }
    let response = await fetch(URL, options);
    response = await response.json();
    console.log(response);
    if(response.result){
        window.location.replace('/');

    }else{
        $('.authMessage').text("Wrong Credential");
        $('.authMessage').attr('class', 'text-danger');
    }
    $('.userLoginForm').trigger("reset");
}

import '../style/main.scss';

let data = new Object();

let form  = document.getElementsByTagName('form')[0];
let error = document.querySelector('.error');
let select = document.getElementsByClassName('items');
let button = document.getElementById('button_next');

form.addEventListener("focus", function (event) {
    const elem = event.target;

    elem.addEventListener("input", function (event) {
        enabled_button(data,button);

        if(elem.type == 'text') {
            let val = elem.value;
            if(!val.length == 0) {
                data.name = elem.value;
            }else{
                data.name = undefined;
            }
        }

        if(elem.type == 'password') {
            let val = elem.value;
            if (!val.length == 0) {
                data.pass = elem.value;
            }else{
                data.pass = undefined;
            }
        }

        if(elem.type == 'email') {
            let val = elem.value;
            if(!val.length == 0) {
                if (!elem.value.includes('@')) {
                    error.innerHTML = "Please enter a valid email address";
                    error.className = "error active";
                    elem.className = 'form-input_error';
                    elem.nextElementSibling.className= 'error_label';
                } else {
                    error.innerHTML = "";
                    error.className = "error";
                    elem.className = 'form-input';
                    elem.nextElementSibling.className = '';
                    data.email = elem.value;
                }
            }else{
                data.email = undefined;
            }
        }

        console.log(data.name,data.email,data.pass);
    });
}, true);

function enabled_button(data,button) {
    console.log(data,button);
    if( data.name !== undefined && data.email !== undefined && data.pass !== undefined){
        button.className = 'form-button';
    }else{
        button.className = 'form-button_disabled'
    }
}

console.log(data.name,data.email,data.pass);
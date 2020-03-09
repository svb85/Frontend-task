import '../style/main.scss';

let data = new Object();

let form  = document.getElementsByTagName('form')[0];
let error = document.querySelector('.error');
let button = document.getElementById('button_next');

form.addEventListener("focus", function (event) {
    const elem = event.target;

    elem.addEventListener("input", function (event) {
        if (elem.type == 'text') {
            let val = elem.value;
            if (!val.length == 0) {
                data.name = elem.value;
            } else {
                data.name = undefined;
            }
        }

        if (elem.type == 'password') {
            let val = elem.value;
            if (val.length >= 8) {
                data.pass = elem.value;
            } else if(val.length <= 9 ){
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
                    elem.nextElementSibling.className = 'normal_email';
                    data.email = elem.value;
                }
            }else{
                data.email = undefined;
            }
        }

        enabled_button(data, button);
    }, true);
}, true);

form.addEventListener("change", function (event) {
    const select = event.target;

    if(select.type == 'radio'){
        console.log(select.type);
        let label = select.nextElementSibling.innerText
        if(!label.length == 0){
            console.log(label);
            data.select = label;
        }else{
            data.select = undefined
        }
        enabled_button(data,button);
    }
}, true);

function enabled_button(data,button) {
    if( data.name !== undefined && data.email !== undefined && data.select !== undefined && data.pass !== undefined ){
        button.className = 'form-button';
    }else{
        button.className = 'form-button_disabled'
    }
}
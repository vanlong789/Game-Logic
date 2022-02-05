const start = document.querySelector('.start-Game__button');
const times = document.querySelector('.times-tuall');
const value_sum = document.querySelectorAll('.value-sum');
const submit = document.querySelector('.check-sum');
const notication = document.querySelector('.notication');
const sum = document.querySelector('.sum-value');

let y = 1;
start.onclick = function(){
   if(y == 1){
        test(15);
        ramdom();
        y++;
   }else{
        window.location = "./index.html"
        y = 1;
   }
}

// xử lý thời gian
function test(x){
    setInterval(function(){
        if(x === 0){
            returnTime(x);
        }else{
            x--;
            returnTime(x);
        }
    },1000)
    
    function returnTime(value){
        times.innerHTML = `${value}s`;
        times.setAttribute('data',`${value}`);
    }
}
// xử lý giá trị

function checkValue(inputs){
    let boolean = false;
    for(input of inputs){
        if(input.value.trim() === ''){
            boolean = true;
        }
    }
    return boolean;
}
// ramdom 

const myArray = [];
function ramdom(){
    let a = Math.round(Math.random()*9);
    let b = Math.round(Math.random()*9);
    let c = Math.round(Math.random()*9);
    let d = Math.round(Math.random()*9);
    let e = Math.round(Math.random()*9);
    let sum = a + b + c + d + e;
    let valueArray = {
       sum:sum
    }
    myArray.push(valueArray);

    value_sum[0].value = a;
    value_sum[1].value = b;
    value_sum[2].value = c;
    value_sum[3].value = d;
    value_sum[4].value = e;
}







submit.onclick = function(e){
    e.preventDefault();
    if(!checkValue(value_sum)){
        let m = Number(value_sum[5].value.trim());
        let getTime = Number(times.getAttribute("data"));
        if(getTime === 0){
            notication.innerHTML = 'Đã hết thời gian';
            notication.style.color = 'red';
        }else{
            if(m === myArray[0].sum){
                notication.innerHTML = 'Đáp án chính xác';
                notication.style.color = 'green';
            }else{
                notication.innerHTML = 'Đáp án chưa chính xác';
                notication.style.color = 'red';
            }
        }
    }
}





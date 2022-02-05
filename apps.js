const start = document.querySelector('.start-Game__button');
const times = document.querySelector('.times-tuall');
const value_sum = document.querySelectorAll('.value-sum');
const submit = document.querySelector('.check-sum');
const notication = document.querySelector('.notication');
const sum = document.querySelector('.sum-value');

let y = 1;
start.onclick = function(){
   if(y == 1){
        test(60);
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
    let a = Math.round(Math.random()*5);
    let b = Math.round(Math.random()*5);
    let c = Math.round(Math.random()*5);
    let d = Math.round(Math.random()*5);
    
    let valueArray = {
        a:a,b:b,c:c,d:d
    }
    myArray.push(valueArray);
    console.log(myArray)

    value_sum[0].value = myArray[0].a;
    value_sum[2].value = myArray[0].c;
    sum.innerHTML = a + b + c + d;
}







submit.onclick = function(e){
    e.preventDefault();
    if(!checkValue(value_sum)){
        let m = Number(value_sum[0].value.trim());
        let n = Number(value_sum[1].value.trim());
        let p = Number(value_sum[2].value.trim());
        let q = Number(value_sum[3].value.trim());
        if(m === myArray[0].a && n === myArray[0].b && p === myArray[0].c && q === myArray[0].d){
            notication.innerHTML = 'Đáp án chính xác';
            notication.style.color = 'green';
        }else{
            notication.innerHTML = 'Đáp án chưa chính xác';
            notication.style.color = 'red';
        }
    }
}





/*
Semaphore 
Mohammad Mohmoud Taha Attallah
Abdelrhman Ryahiy

*/

let crticalSection=[];

function signal(p){
    document.write(`<br>`);
    document.write(`push to Ccrtical Section process:: <strong>${p}</strong>`);
}

function wait(p){
    document.write(`<br>`);
    document.write(`<br> the Process <strong>${p}</strong> is wating!! <br>`)
    signal(p);
}

function Semaphore(...s){
    document.write(`<div class="complier">`);
    document.write(`<h3 class="head"> process task:: ${s.join(" , ")}.</h3>`);
    for(let i=0; i<s.length; i++){
        if(i==0){
            signal(s[i]);
        }else{
            wait(s[i]);
        }
    }
    document.write(`</div>`)
}
// All Value is a Process in Arguments for Semaphore Function 
Semaphore(6,4,7,11);
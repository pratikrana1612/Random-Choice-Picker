const text = document.querySelector('.main_container textarea');
const tagEle = document.querySelector('.main_container .tag');
// console.log(tagEle)
let num=0;
let timer;
const randomNubmerGenerater = function ()
{
    return Math.floor(Math.random() * 50);
}

const textShower = function () 
{
    if(text.value.trim() === '')
    {
        tagEle.classList.remove('show');
        tagEle.innerText = '';
    }
    else if(text.value.trim() !== '')
    {
        tagEle.classList.add('show');
        tagEle.innerText = text.value;
    }
     if(text.value.includes(','))
    {
        flag=false;
        tagEle.classList.remove('show');
        tagEle.innerText = '';
        const ele = text.value.split(',');
        for(i of ele)
        {
            const div= document.createElement('div');
            div.className='show';
            div.innerText = `${i}`;
            tagEle.append(div);
            // tagEle.innerHTML = `
            // <div class="show">${ele[0]}</div>
            // <div class="show">${ele[1]}</div>
            // `
        }
        pratik();
    }

};
const couter = function (number)
{
    num++;
    if(num==number)
    {
     clearInterval(timer);
    }
        const divs=document.querySelectorAll('.main_container .tag div');
            if(num%2 ==0)
            {
                divs[1].classList.remove('colors');
                divs[0].classList.add('colors');
            }
            else{
                divs[0].classList.remove('colors');
                divs[1].classList.add('colors');
            }
}
const looper = function (number)
{
    // for(let r=0;r<number;r++)
    // {
    //     const divs=document.querySelectorAll('.main_container .tag div');
    //         if(r%2 == 0)
    //         {
    //             divs[1].classList.remove('colors');
    //             divs[0].classList.add('colors');
    //         }
    //         else{
    //             divs[0].classList.remove('colors');
    //             divs[1].classList.add('colors');
    //         }
    timer = setInterval(couter(number),1000);
        // console.log(divs);
        couter(number);
}
text.addEventListener("keypress",(event) =>
{
    if (event.keyCode === 13) 
    {
        let number=randomNubmerGenerater();
        looper(number);
    }
  
});
const pratik = function()
{
        let number=randomNubmerGenerater();
        looper(number);
}
text.addEventListener('input',textShower);
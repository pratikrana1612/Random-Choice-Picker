const text = document.querySelector('.main_container textarea');
const tagEle = document.querySelector('.main_container .tag');
// console.log(tagEle)
// let num=0;
// let timer;
text.addEventListener('keyup',(e) =>
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
        let ele = text.value.split(',');
        ele = ele.filter( el => el.trim() !== '').map(el =>el.trim());
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
    }
    if (e.keyCode === 13) 
    {
        // let number=randomNubmerGenerater();
        setTimeout(() => {
            tagSelector();
        }, 100);
        // console.log('adf');
    }
});

const randomNubmerGenerater = function ()
{
    return Math.floor(Math.random() * 50);
}
const tagSelector = function ()
{
    const times=30;
    const interval = setInterval(
        () => 
        {
            const randomtag = randomtagPicker();
            highlighter(randomtag);
            setTimeout(() => {
                unhighlighter(randomtag);
            }, 100);
            // console.log(randomtag);
        }
    ,100);  
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomtag = randomtagPicker();
            highlighter(randomtag);
        }, 100);
    }, 3000);
} 
const randomtagPicker = () =>
{
    const divs=document.querySelectorAll('.main_container .tag div');
    return divs[Math.floor(Math.random() * divs.length)];
}
const highlighter = (tag) =>
{
    tag.classList.add('high-light');
}
const unhighlighter = (tag) =>
{
    tag.classList.remove('high-light');
}
// const couter = function (number)
// {
//     num++;
//     if(num==number)
//     {
//      clearInterval(timer);
//     }
//         const divs=document.querySelectorAll('.main_container .tag div');
//             if(num%2 ==0)
//             {
//                 divs[1].classList.remove('colors');
//                 divs[0].classList.add('colors');
//             }
//             else{
//                 divs[0].classList.remove('colors');
//                 divs[1].classList.add('colors');
//             }
// }
// const looper = function (number)
// {
//     for(let r=0;r<number;r++)
//     {
//         const divs=document.querySelectorAll('.main_container .tag div');
//             if(r%2 == 0)
//             {
//                 divs[1].classList.remove('colors');
//                 divs[0].classList.add('colors');
//             }
//             else{
//                 divs[0].classList.remove('colors');
//                 divs[1].classList.add('colors');
//             }
//     timer = setInterval(couter(number),2000);
//     console.log(divs);
//      couter(number);
// }
// const clearner = function ()
// {

//     const divs=document.querySelectorAll('.main_container .tag div');
//     for(i of divs)
//     {
//         i.classList.remove('colors');
//     }
// }
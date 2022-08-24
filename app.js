const text = document.querySelector('.main_container textarea');
const tagEle = document.querySelector('.main_container .tag');

// console.log(tagEle)
text.addEventListener("keypress",(event) => 
{
    if (event.keyCode === 13) 
    {
        const splited = text.value.split(",");
        textShower(splited);
    }
});
const textShower = function (splited='') 
{
    if(text.value.trim() === '')
    {
        tagEle.classList.remove('show');
        tagEle.innerText = '';
    }
    else if(splited != '')
    {
        tagEle.innerHTML = `
        <div class="show">${splited[0]}</div>
        <div class="show">${splited[1]}</div>
        `
    }
    else if(text.value.trim() !== '' && splited === '')
    {
        tagEle.classList.add('show');
        tagEle.innerText = text.value;
    }
 
};

text.addEventListener('input',textShower.bind(null,''));
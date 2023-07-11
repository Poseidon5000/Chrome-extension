const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const leadsArr = [];

btn.addEventListener('click', () => {
   leadsArr.push(input.value);
    input.value = '';
    console.log(leadsArr);


//Displaying the url

let listItem = " ";

for (let i = 0; i < leadsArr.length; i++) {
    listItem  +=   `<li>
    <a target='_blank' href='${leadsArr[i]}'>
        ${leadsArr[i]}
    </a>
</li>`
    console.log(listItem);
}

ul.innerHTML = listItem;
});


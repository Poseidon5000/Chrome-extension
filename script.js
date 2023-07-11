const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const deleteBtn = document.querySelector('.delete-btn');

const leadsArr = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('Lead-Array'));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    leadsArr = leadsFromLocalStorage;
    // console.log(leadsArr);
    renderLeads();
}

btn.addEventListener('click', () => {
   leadsArr.push(input.value);
    input.value = '';
    console.log(leadsArr);

    localStorage.setItem('Lead-Array', JSON.stringify(leadsArr));
    renderLeads();


//Displaying the url
});

function renderLeads(){
    let listItem = " ";

for (let i = 0; i < leadsArr.length; i++) {
    listItem  +=   `<li>
    <a target='_blank' href='https://${leadsArr[i]}'>
        ${leadsArr[i]}
    </a>
</li>`
    console.log(listItem);
}

ul.innerHTML = listItem;
}


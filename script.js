const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');

let leadsArr = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('Lead-Array'));
// console.log(leadsFromLocalStorage);


if (leadsFromLocalStorage) {
    leadsArr = leadsFromLocalStorage;
    // console.log(leadsArr);
    renderLeads();
}

function renderLeads(){
    let listItem = " ";

for (let i = 0; i < leadsArr.length; i++) {
    listItem  +=   `<li>
    <a target='_blank' href='https://${leadsArr[i]}'>
        ${leadsArr[i]}
    </a>
</li>`
    // console.log(listItem);
}

ul.innerHTML = listItem;
}



btn.addEventListener('click', () => {
   leadsArr.push(input.value);
    input.value = '';
    console.log(leadsArr);

    localStorage.setItem('Lead-Array', JSON.stringify(leadsArr));
    renderLeads();


//Displaying the url
});

deleteBtn.addEventListener("click", function() {
    localStorage.clear();
    leadsArr = [];
    renderLeads();
})

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(leadsArr) )
        renderLeads()
    })
})

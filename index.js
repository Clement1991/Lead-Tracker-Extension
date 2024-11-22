let inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEL = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn"); 
let tabBtn = document.getElementById("tab-btn");
const tabs = [];

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})


// create a variable to store items from myLeads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEL.value);
    inputEL.value = "";

    // save to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    render(myLeads);

    // console.log(localStorage.getItem("myLeads"))
})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

function render(leads) {
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a targer='_blank' href='${leads[i]}'>${leads[i]}</a>
            </li>`;
        //listItems += "<li><a href='" + leads[i] + "'>" + leads[i] + "</a></li>"
        //ulEL.innerHTML += `<li>${leads[i]}</li>`;
        // create element "li"
        // set text content "myLead[i]"
        // append to ul

        // const li = document.createElement("li");
        // li.textContent = leads[i];
        // ulEL.append(li);
    } 
    ulEL.innerHTML = listItems;
}



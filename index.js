
let myLeads = [] 
const inputBtn  = document.getElementById("input-btn")                                              
const inputEl = document.getElementById("input-el")  
const ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)


    inputEl.value = ' '

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderList()

    console.log(localStorage.getItem("myLeads"))
    
})



function renderList(){
    let itemList = ""
    for ( i= 0; i< myLeads.length; i++){
            itemList += `
            <li>
                <a target='_blank' href='${myLeads[i]}' >

                ${myLeads[i]}

                </a>

            </li>
            `
    }
    
    ulEl.innerHTML = itemList

}


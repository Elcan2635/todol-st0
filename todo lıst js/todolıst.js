const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");


/* <i class="fa-regular fa-pen-nib"></i>
 text-decoration: line-through; 
 <i class="fa-solid fa-wand-magic-sparkles"></i>
 */
/* <i class="fa-solid fa-trash"></i> */

let inputvalue = "";








input.addEventListener("change", (e) => {
    inputvalue = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let li = document.createElement("li");
    const span = document.createElement("span");
    const delet = document.createElement("i");
    const success = document.createElement("i");
    const edit = document.createElement("i");
    const spanlist = document.createElement("span")
    edit.className = "fa-solid fa-wand-magic-sparkles"
    success.className = "fa-solid fa-pen-nib"
    delet.className = "fa-solid fa-trash"
    li.append(spanlist, span, edit, success, delet);
    span.innerText = inputvalue;
    input.value = ""
    ul.appendChild(li);

    [...ul.children].map((li, index) => {
        spanlist.innerText = index + 1 + "."
    })
    saveTodo();











})

ul.addEventListener("click", (e) => {
    if (e.target.className === "fa-solid fa-wand-magic-sparkles") {
        if (e.target.parentNode.children.length > 5) {
            e.target.parentNode.lastChild.remove()
            saveTodo()
        } else {
            let newinput = document.createElement("input");
            newinput.className = "newinput"
            e.target.parentNode.appendChild(newinput)
            newinput.addEventListener("change", (e) => {
                e.target.parentNode.children[1].innerText = e.target.value
                newinput.remove()
                saveTodo()
            })
            saveTodo()
        }

    }
    if (e.target.className === "fa-solid fa-pen-nib") {

        if (e.target.parentNode.children[1].style.textDecoration === "") {
            e.target.parentNode.children[1].style.textDecoration = "line-through"
            e.target.parentNode.children[1].style.color = "green"
            saveTodo()
        } else {
            e.target.parentNode.children[1].style.textDecoration = ""
            e.target.parentNode.children[1].style.color = ""
            saveTodo()
        }


    }
    if (e.target.className === "fa-solid fa-trash") {
        e.target.parentNode.remove();
        [...ul.children].map((li, index) => {
            li.firstChild.innerText = index + 1 + "."
            
        });
        saveTodo()
    }
})

const saveTodo = () => {
    localStorage.setItem("todo", ul.innerHTML)
}
const getTodo = () => {
    ul.innerHTML = localStorage.getItem("todo")
}
getTodo()
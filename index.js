const box = document.getElementById('inputbox');
const lis = document.getElementById('list');

function addTask() {
    if (box.value == '') {
        alert("You must write something to add as task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = box.value;
        lis.appendChild(li);
        box.value = '';

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    savedata();
}

lis.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.add("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}
)

function savedata() {
    localStorage.setItem("data", lis.innerHTML);
}

function showdata() {
    lis.innerHTML = localStorage.getItem("data");
}

showdata();
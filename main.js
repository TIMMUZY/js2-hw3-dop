const supEl = document.getElementById('sup');

const transformData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    console.log(data);
    data.map((el) => {
        if (el.id < 100) {
            supEl.innerHTML += `<div class='content'><img class="inp" src=${el.url}/><h2>${el.title}</h2></div>`; 
        }
    });

    const content = document.querySelector('.content');
    const img = document.querySelectorAll(".inp");
    console.log(img);
    for(let i =0;i<img.length;i++){
          img[i].addEventListener("click", () => {   
        if (img[i].style.position) {
            img[i].style.position = "";
            img[i].style.top = "";
            img[i].style.left = "";
            img[i].style.width = "";
            img[i].style.height = "";
        } else {
            img[i].style.position = "absolute";
            img[i].style.position = "fixed";
            img[i].style.top = "100px";
            img[i].style.left = "500px";
            img[i].style.width = "500px";
            img[i].style.height = "500px";
        }
    });
    }
  
};

transformData();

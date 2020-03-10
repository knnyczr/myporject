let main;
 
main = document.getElementById("main");
console.log(works)



works.forEach((element, index) => {
    console.log(element, index)
    let card = `<div class="card" style="width: 18rem;">
                    <img src=${element.heroImage} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.description}</p>
                        <a href="${element.somelink}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
    console.log(card)
    const project = document.createElement('div'); 
    project.innerHTML = card; 
    main.appendChild(project)
})
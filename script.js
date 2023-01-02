const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

function MovieAndRecords() {
    this.title = document.querySelector("#title").value;
    this.genre = document.querySelector("#genre").value;
    this.directorComposer = document.querySelector("#director-composer").value;
    this.launch = document.querySelector("#launch").value;
    this.country = document.querySelector("#country").value;
    this.evaluation = document.querySelector("#eval").value;
    this.date = document.querySelector("#date").value;

    const createRow = (() => {
        let newRow = document.createElement("tr");
        let dataTitle = document.createElement("td");
        let dataGenre = document.createElement("td")
        let dataDirector = document.createElement("td");
        let dataLaunch = document.createElement("td");
        let dataCountry = document.createElement("td");
        let dataEval = document.createElement("td");
        let dataDate = document.createElement("td");
        tableBody.appendChild(newRow);
        newRow.append(dataTitle, dataGenre, dataDirector, dataLaunch, dataCountry,dataEval, dataDate);
        dataTitle.textContent = this.title;
        dataGenre.textContent = this.genre;
        dataDirector.textContent = this.directorComposer;
        dataLaunch.textContent = this.launch;
        dataCountry.textContent = this.country;
        dataEval.textContent = this.evaluation;
        dataDate.textContent = this.date;
    })();
}

window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();
    if (archive != null) {
        for(const item of archive){
            let newRow = document.createElement("tr");
            let dataTitle = document.createElement("td");
            let dataGenre = document.createElement("td")
            let dataDirector = document.createElement("td");
            let dataLaunch = document.createElement("td");
            let dataCountry = document.createElement("td");
            let dataEval = document.createElement("td");
            let dataDate = document.createElement("td");
            tableBody.appendChild(newRow);
            newRow.append(dataTitle, dataGenre, dataDirector, dataLaunch, dataCountry,dataEval, dataDate);
            dataTitle.textContent = item.title;
            dataGenre.textContent = item.genre;
            dataDirector.textContent = item.directorComposer;
            dataLaunch.textContent = item.launch;
            dataCountry.textContent = item.country;
            dataEval.textContent = item.evaluation;
            dataDate.textContent = item.date;
        }
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newMovieRecord = new MovieAndRecords();
    archive.push(newMovieRecord);
            
    localStorage.setItem("ArtList", JSON.stringify(archive));

  
})

let archive = JSON.parse(localStorage.getItem("ArtList")) || [];

// const sum = archive.reduce((total, item) => {
//     return total + Number(item.price);
// }, 0);

// const tfoot  = document.querySelector(".foot-row");
// const sumColumn = document.createElement("td");
// tfoot.appendChild(sumColumn);

// sumColumn.textContent = sum;

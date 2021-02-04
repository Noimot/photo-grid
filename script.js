//https://api.unsplash.com/search/photos?client_id=I9z28nvdfPRa4-fsIooPdrANwjA4IEruipyB5MHaRfc&query=africans&per_page=10
let photosArray = [];
let photoGrid = document.querySelector(".photo-grid");
let search = document.querySelector(".search-photos")
let photoGridContainer = document.querySelector(".photo-grid-container")




window.addEventListener("load", getPhotos("African"))



function getPhotos(query) {
    fetch(`https://api.unsplash.com/search/photos?client_id=I9z28nvdfPRa4-fsIooPdrANwjA4IEruipyB5MHaRfc&query=${query}&per_page=10`)
        .then(response => response.json())
        .then(data => {
            photosArray.push(...data.results)
           console.log(photosArray)
            displayData(photosArray)
        })
}

let displayData = array => {
    let userData = "";
    array.forEach(eachData =>{
        userData += `
        <div>
        <img src= ${eachData.urls.small} alt=${eachData.alt_description}  style="border-radius:10px; object-fit:cover; width:100%">
        <div>
        <h4>${eachData.user.first_name} ${eachData.user.last_name}</h4>
        <p>${eachData.user.location}</p>
        </div>
        </div>
        `

        // let li = document.createElement("li")
        // li.innerHTML =  `
        // <img src= ${eachData.urls.small} alt=${eachData.alt_description}
        // <div>
        // <h4>${eachData.user.first_name, eachData.user.last_name}</h4>
        // <p>${eachData.user.location}</p>
        // </div>
        // `

       // photoGridContainer.appendChild(li);
       // console.log(eachData.urls.regular)
       // console.log(eachData.user.first_name, eachData.user.last_name)
       // console.log(eachData.user.location)
       //console.log(eachData.alt_description)
    })
   photoGridContainer.innerHTML = userData;
}

search.addEventListener("change", getPhotos(s))



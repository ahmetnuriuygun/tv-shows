const inputTvShows = document.querySelector("#search")

myList = []

fetch("./tv-shows.json")
.then((res)=>res.json())
.then((data)=>{
    myList = data;
    console.log(myList);
    updateScreen(myList);
    
})

const updateScreen=(data)=>{

    document.querySelector(".tvShowList").innerHTML = "";


    data.forEach(info => {
        document.querySelector(".tvShowList").innerHTML += 
        `
        <div class="col-md-3">
            <div class="card" >
            <img src=${info.show.image.medium} alt="info-image" class="card-img-top">
            <div class="card-body">
                    <h3 class="card-title">${info.show.name}</h3>
                    <a href=${info.show.url} class="btn btn-primary">Detaylar</a>
            </div>        
            </div>    
        </div>    
        
        
        `

    });
}

inputTvShows.oninput=(harf)=>{
let data2 = myList.filter((info)=>info.show.name.includes(harf.target.value))
console.log(data2);
updateScreen(data2)
}
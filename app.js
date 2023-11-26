const userTab=document.querySelector("[data-userWeather]");
const searchTab=document.querySelector("[data-searchWeather]");
const userContainer=document.querySelector(".weather-container");

const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

// Instantly variables 

let currentTab=userTab;
const API_KEY="69887c851cb16df24cc171bfcee6c2f6";
currentTab.classList.add("current-tab");

//ek kaam pending hai
function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            //phle search tab pr tha ab your tab visible krna hoga
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            //now in your weather tab , weather bhi display krna padega 
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click",() =>{
    switchTab(userTab);
});
searchTab.addEventListener("click",() =>{
    switchTab(searchTab);
});

//check if coordinates are already present in session storage 
function getfromSessionStorage(){
    const localCoordinates=sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //if no local coordinates 
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates=JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat, lon} =coordinates;
    //make grantconatiner invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API call
    try {
        const response=await fetch(
            //APi likhna hai yaha pr -------------
        );
        const data = await resonse.json();

        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);

    } catch (error) {
        loadingScreen.classList.remove("active");
        //HW
        
    }
}

function renderWeatherInfo(weatherInfo){
      //firstly we have to fetch element 

      const cityName = document.querySelector("[data-cityName]");
      const countryName = document.querySelector("[data-countryIcon]");
      const desc = document.querySelector("[data-weatherDesc]");
      const weatherIcon=document.querySelector("[data-weatherIcon]");
      const temp = document.querySelector("[data-temp]");
      const windspeed=document.querySelector("[data-windspeed]");
      const humidity=document.querySelector("[data-humidity]");
      const cloudiness=document.querySelector("[data-clouds]")

      // fetch values from weatherInfo object and put it UI elemets 
    

}
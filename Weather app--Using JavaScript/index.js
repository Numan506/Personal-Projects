
document.querySelector(".sub").addEventListener("click",(e)=>{
    const txt = document.querySelector(".text").value;
   
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+txt+'&appid=a1210498d95078da11f8a75b2bae9113')
    .then(res=>res.json())
    .then(data=>{
       
        const cityName = data.name
        const temperature=data.main.temp
        const temp = temperature-273.15
        const des = data.weather[0].description

        document.querySelector(".cityName").innerHTML="City: "+cityName
        document.querySelector(".temp").innerHTML="Temp: " +temp.toFixed(2)
        document.querySelector(".des").innerHTML="Des: "+des
        document.querySelector(".data").innerHTML=value

    })
    .catch(err=>console.log(err))
})
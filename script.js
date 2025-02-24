let cardRating = document.querySelector(".cardHeader h2");
let cardPosition = document.querySelector(".cardHeader h5");
let cardCountry = document.querySelector(".cardInfo .country");
let cardLegue = document.querySelector(".cardInfo .legue");
let cardClub = document.querySelector(".cardInfo .club");
let playerImg = document.querySelector(".playerImg");
let positionIp = document.querySelector(".positionIp");
let countryIp = document.querySelector(".countryIp");
let legueIp = document.querySelector(".legueIp");
let clubIp = document.querySelector(".clubIp");
let nameIp = document.querySelector(".nameIp");
let playerN = document.querySelector(".playerN");
let checkBtn = document.querySelector("button");
let submitBtn = document.querySelector(".submit");
let hintS = document.querySelector(".hintS");
let errorS = document.querySelector(".errorS");


fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://drop-api.ea.com/rating/fc-24?limit=100"))
    .then(response => response.json())
    .then(data => {
        const playersData = JSON.parse(data.contents);
        const filteredPlayers = playersData.items.filter(player => player.gender.label == "Men's Football");
        const randomPlayer = filteredPlayers[Math.floor(Math.random() * filteredPlayers.length)];
        console.log(randomPlayer);
        console.log(filteredPlayers);
        console.log(playersData.items);
        // filteredPlayers.forEach(player => {
        //     console.log(player.leagueName);
        // });

        checkBtn.addEventListener("click", function () {
            if (positionIp.value == randomPlayer.position.shortLabel) {
                cardPosition.innerHTML = randomPlayer.position.shortLabel;
                hintS.play();
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
            if(countryIp.value == randomPlayer.nationality.label){
                cardCountry.innerHTML = `<img src="${randomPlayer.nationality.imageUrl}" alt="${randomPlayer.nationality.label}" />`;
                hintS.play();
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
            if(legueIp.value == randomPlayer.leagueName){
                if(randomPlayer.leagueName == "Premier League"){
                    cardLegue.innerHTML = `<img src="./i.png" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "LALIGA EA SPORTS"){
                    cardLegue.innerHTML = `<img src="./Laliga-v-600x600.webp" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "Serie A Enilive"){
                    cardLegue.innerHTML = `<img src="./11.jpg" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "Bundesliga"){
                    cardLegue.innerHTML = `<img src="./4231.png" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "Ligue 1"){
                    cardLegue.innerHTML = `<img src="./Ligue_1_Uber_Eats_logo.svg.png" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "MLS"){
                    cardLegue.innerHTML = `<img src="download.jpg" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                } else if(randomPlayer.leagueName == "ROSHN Saudi League"){
                    cardLegue.innerHTML = `<img src="./321.png" alt="${randomPlayer.leagueName}" />`;
                    hintS.play();
                }
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
            if(clubIp.value == randomPlayer.team.label){
                cardClub.innerHTML = `<img src="${randomPlayer.team.imageUrl}" alt="${randomPlayer.team.label}" />`;
                hintS.play();
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
        });
        submitBtn.addEventListener("click", function () {
            if(nameIp.value == randomPlayer.firstName+" "+randomPlayer.lastName || nameIp.value == randomPlayer.firstName || nameIp.value == randomPlayer.lastName || nameIp.value == randomPlayer.commonName){
                hintS.play();
                cardRating.innerHTML = randomPlayer.overallRating;
                playerImg.innerHTML = `<img src="${randomPlayer.avatarUrl}" alt="${randomPlayer.commonName}" />`;
                cardClub.innerHTML = `<img src="${randomPlayer.team.imageUrl}" alt="${randomPlayer.team.label}" />`;
                if(randomPlayer.leagueName == "Premier League"){
                    cardLegue.innerHTML = `<img src="./i.png" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "LALIGA EA SPORTS"){
                    cardLegue.innerHTML = `<img src="./Laliga-v-600x600.webp" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "Serie A Enilive"){
                    cardLegue.innerHTML = `<img src="./11.jpg" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "Bundesliga"){
                    cardLegue.innerHTML = `<img src="./4231.png" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "Ligue 1"){
                    cardLegue.innerHTML = `<img src="./Ligue_1_Uber_Eats_logo.svg.png" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "MLS"){
                    cardLegue.innerHTML = `<img src="download.jpg" alt="${randomPlayer.leagueName}" />`;
                } else if(randomPlayer.leagueName == "ROSHN Saudi League"){
                    cardLegue.innerHTML = `<img src="./321.png" alt="${randomPlayer.leagueName}" />`;
                }
                cardCountry.innerHTML = `<img src="${randomPlayer.nationality.imageUrl}" alt="${randomPlayer}"/>`;
                cardPosition.innerHTML = randomPlayer.position.shortLabel;
                if(randomPlayer.commonName==null){
                    playerN.innerHTML = randomPlayer.firstName+" "+randomPlayer.lastName;
                }else{
                    playerN.innerHTML = randomPlayer.commonName;
                }
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
        });
        
    })
    .catch(error => console.error("Error fetching data:", error));
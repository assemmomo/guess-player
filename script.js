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
let searchResults = document.querySelector(".searchResult");


fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://drop-api.ea.com/rating/fc-24?limit=100"))
    .then(response => response.json())
    .then(data => {
        const playersData = JSON.parse(data.contents);
        const filteredPlayers = playersData.items.filter(player => player.gender.label == "Men's Football");
        let randomPlayer = filteredPlayers[Math.floor(Math.random() * filteredPlayers.length)];
        console.log(randomPlayer);
        console.log(filteredPlayers);
        console.log(playersData.items);

        let qCounter = 600;

        let timeInt = setInterval(function(){
            qCounter--;
            document.querySelector('.qCounter span').innerHTML = qCounter;
            if(qCounter <= 0){
                nameIp.value="";
                clearInterval(timeInt);
                document.querySelector('.endPage').style.bottom = "0";
                document.querySelector('.endPage h1').innerHTML = "Game Over!";   
                errorS.play();
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
            }
            if(qCounter <= 10){
                document.querySelector('.qCounter span').style.color = "red";
            }
            },1000)


        document.querySelector('.startPage button').addEventListener('click', function(){
            document.querySelector('.startPage').style.display = "none";
            qCounter = 60;
            clearInterval(timeInt);
            timeInt = setInterval(function(){
                qCounter--;
                document.querySelector('.qCounter span').innerHTML = qCounter;
                if(qCounter <= 0){
                    clearInterval(timeInt);
                    document.querySelector('.endPage').style.bottom = "0";
                    document.querySelector('.endPage h1').innerHTML = "Game Over!";   
                    errorS.play();
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
                }
                if(qCounter <= 10){
                    document.querySelector('.qCounter span').style.color = "red";
                }
            }, 1000);
            document.querySelector('.qCounter span').innerHTML = qCounter;
            document.querySelector('.qCounter span').style.color = "black";
            document.querySelector('.qCounter').style.display = "flex";
        });

        document.querySelector('.endPage button').addEventListener('click', function(){
            document.querySelector('.endPage').style.bottom = "-100%";
            document.querySelector('.startPage').style.display = "flex";
            qCounter = 60;
            document.querySelector('.qCounter').style.display = "none";
            document.querySelector('.qCounter span').innerHTML = qCounter;
            document.querySelector('.qCounter span').style.color = "black";

            cardRating.innerHTML = "?";
            cardPosition.innerHTML = "?";
            cardCountry.innerHTML = "?";
            cardLegue.innerHTML = "?";
            cardClub.innerHTML = "?";
            playerImg.innerHTML = "";
            playerN.innerHTML = "?";

            randomPlayer = filteredPlayers[Math.floor(Math.random() * filteredPlayers.length)];
            console.log(randomPlayer);
        });

        const playerLegues =new Set(filteredPlayers.map(player => player.leagueName));
        console.log(playerLegues);
        const playerTeams =new Set(filteredPlayers.map(player => player.team.label));
        console.log(playerTeams);
        const playerCountrys =new Set(filteredPlayers.map(player => player.nationality.label));
        console.log(playerCountrys);
        const playerPosition =new Set(filteredPlayers.map(player => player.position.shortLabel));
        console.log(playerPosition);
        const League1Teams =new Set (filteredPlayers.filter(player => player.leagueName == "Ligue 1 McDonald's").map(player => player.team.label));
        console.log(League1Teams);
        const LaligaTeams =new Set (filteredPlayers.filter(player => player.leagueName == "LALIGA EA SPORTS").map(player => player.team.label));
        console.log(LaligaTeams);
        const SerieATeams =new Set ( filteredPlayers.filter(player => player.leagueName == "Serie A Enilive").map(player => player.team.label));
        console.log(SerieATeams);
        const BundesligaTeams =new Set ( filteredPlayers.filter(player => player.leagueName == "Bundesliga").map(player => player.team.label));
        console.log(BundesligaTeams);
        const MLS =new Set ( filteredPlayers.filter(player => player.leagueName == "MLS").map(player => player.team.label));
        console.log(MLS);
        const ROSHNSaudiLeague =new Set ( filteredPlayers.filter(player => player.leagueName == "ROSHN Saudi League").map(player => player.team.label));
        console.log(ROSHNSaudiLeague);
        const PremierLeague =new Set ( filteredPlayers.filter(player => player.leagueName == "Premier League").map(player => player.team.label));
        console.log(PremierLeague);
        console.log(PremierLeague.size);
        // filteredPlayers.forEach(player => {
        //     console.log(player.team.label);
        // });


        legueIp.innerHTML = `<option value="">Select Player Legue</option>`;
        playerLegues.forEach(legue => {
            legueIp.innerHTML += `<option value="${legue}" class="${legue}">${legue}</option>`;
        });
        clubIp.innerHTML = `<option value="">Select Player Club</option>`;
        playerTeams.forEach(team => {
            clubIp.innerHTML += `<option value="${team}" class="${team}">${team}</option>`;
        });
        countryIp.innerHTML = `<option value="">Select Player Country</option>`;
        playerCountrys.forEach(country => {
            countryIp.innerHTML += `<option value="${country}" class="${country}">${country}</option>`;
        });
        positionIp.innerHTML = `<option value="">Select Player Position</option>`;
        playerPosition.forEach(position => {
            positionIp.innerHTML += `<option value="${position}" class="${position}">${position}</option>`;
        });


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
                nameIp.value="";
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
                clearInterval(timeInt);
                document.querySelector('.endPage').style.bottom = "0";
                document.querySelector('.endPage h1').innerHTML = "Congratulations!";   
            } else {
                console.log("You are wrong! Try again!");
                errorS.play();
            }
        });

        legueIp.addEventListener("change", function () {

            if(legueIp.value == "Premier League"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                PremierLeague.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "LALIGA EA SPORTS"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                LaligaTeams.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "Serie A Enilive"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                SerieATeams.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "Bundesliga"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                BundesligaTeams.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "Ligue 1 McDonald's"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                League1Teams.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "MLS"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                MLS.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            } else if(legueIp.value == "ROSHN Saudi League"){
                clubIp.innerHTML = `<option value="">Select Player Club</option>`;
                ROSHNSaudiLeague.forEach(team => {
                    clubIp.innerHTML += `<option value="${team}">${team}</option>`;
                });
            }
        }
        );
        nameIp.addEventListener("input", function () {
            if(nameIp.value != ""){
            searchResults.style.display = "flex";
            searchResults.innerHTML = "";
            const searchTerm = nameIp.value.toLowerCase();
            const matchingPlayers = filteredPlayers.filter(player => 
                player.firstName.toLowerCase().includes(searchTerm) || 
                player.lastName.toLowerCase().includes(searchTerm) || 
                (player.commonName && player.commonName.toLowerCase().includes(searchTerm))
            );
            matchingPlayers.forEach(player => {
                const playerDiv = document.createElement("div");
                playerDiv.textContent = player.commonName || `${player.firstName} ${player.lastName}`;
                searchResults.appendChild(playerDiv);
            });
            searchResults.querySelectorAll("div").forEach(playerDiv => {
                playerDiv.addEventListener("click", function () {
                    nameIp.value = playerDiv.textContent;
                    console.log("sss")
                    searchResults.style.display = "none";
                });
            });
        }else{
            searchResults.style.display = "none";
        }
        });
        nameIp.addEventListener('focus', function () {
            if(nameIp.value != ""){
                searchResults.style.display = "flex";
                searchResults.querySelectorAll("div").forEach(playerDiv => {
                    playerDiv.addEventListener("click", function () {
                        nameIp.value = playerDiv.textContent;
                        console.log("sss")
                        searchResults.style.display = "none";
                    });
                });
            } else {
                searchResults.style.display = "none";
            }
        });
        nameIp.addEventListener('blur', function () {
            setTimeout(() => {
                searchResults.style.display = "none";
            }
            , 100);
        });

    })
    .catch(error => console.error("Error fetching data:", error));
    

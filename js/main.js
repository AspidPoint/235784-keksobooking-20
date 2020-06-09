"use strict";




/*availableRealty[8] = {
  author: {
    avatar: "img/avatars/user8.png"
  },
  offer: {
    title: "Заголовок 8",
    price: 850,
    type: "palace",
    rooms: 4,
    guests: 10,
    checkin: "13:00",
    checkout: "14:00",
    description: "строка с описанием",
  },
  location: {
    x: 860,
    y: 400.
  }
}; */

var availableRealty = [];
var possiblefeatures = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var realtyTypes = ["palace", "flat", "house", "bungalo"];
var possibleTimes = ["12:00", "13:00", "14:00"];
var photosUrl = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var getWorkArea = document.querySelector('.map__pins');
var locationArrowX = 25;
var locationArrowY = 70;


function getRandomInteger(min, max) {
  var numberRandom = min - 0.5 + Math.random() * (max - min + 1);
  return Math.floor(numberRandom);
}

function difinitionOfTimes(massive) {
  return massive[Math.floor(Math.random() * massive.length)];
}

function getSliceFromFeaures(arrayInto) {
  var sliceLen = getRandomInteger(0, arrayInto.length);
  var randomIntos = [];
  for (var i = 0; i <= sliceLen; i++) {
    randomIntos.push(difinitionOfTimes(arrayInto));
  }
  /*массив на определение уникальности */
  var uniqRandomIntos = [];
  for (var i = 0; i < randomIntos.length; i++) {
    if (!uniqRandomIntos.includes(randomIntos[i])) {
      uniqRandomIntos.push(randomIntos[i]);
    }
  }
}

getSliceFromFeaures(possiblefeatures);

function createObject(length) {
    for (var i = 1; i <= length; i++) {
      availableRealty[i] = {
        author: {
          avatar: "img/avatars/user0" + i + '.png'
        },
        offer: {
          title: "Заголовок " + i,
          adress: "",
          price: getRandomInteger(10000, 50000),
          type: realtyTypes[Math.floor(Math.random() * realtyTypes.length)],
          rooms: getRandomInteger(1, 4),
          guests: getRandomInteger(1, 3),
          checkin: difinitionOfTimes(possibleTimes),
          checkout: difinitionOfTimes(possibleTimes),
          features: getSliceFromFeaures(possiblefeatures),
          description: "строка с описанием",
          photos: getSliceFromFeaures(photosUrl),
        },
        location: {
          x: getRandomInteger(100, 800),
          y: getRandomInteger(130, 630)
        }
      };
      /* добавляем сгенерированые координаты в offer.adress */
      availableRealty[i].offer.adress = String(availableRealty[i].location.x) + "; " + String(availableRealty[i].location.y);
      availableRealty[i].location.x -=  locationArrowX;
      availableRealty[i].location.y +=  locationArrowY;
      
      drawnRealty(availableRealty[i]);
    }

}

function drawnRealty (realty) {
  console.log(realty.location);

    var pinButton = document.createElement("button");
    var pinImage = document.createElement("img");

    pinButton.style = "left:" + realty.location.x + "px; " + "top:" + realty.location.y + "px";
    pinButton.classList.add("map__pin");
    pinButton.type = "button";
    pinImage.src = realty.author.avatar;
    pinImage.classList.add("standartImg");

    getWorkArea.append(pinButton);
    pinButton.append(pinImage);
}



createObject(8);

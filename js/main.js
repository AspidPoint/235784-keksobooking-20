"use strict";

var availableRealtys = [];
var possiblefeatures = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var realtyTypes = ["palace", "flat", "house", "bungalo"];
var possibleTimes = ["12:00", "13:00", "14:00"];
var photoUrls = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var WorkArea = document.querySelector(".map__pins");
var LOCATION_ARROW_X = 25;
var LOCATION_ARROW_Y = 70;


function getRandomInteger(min, max) {
  var numberRandom = min - 0.5 + Math.random() * (max - min + 1);
  return Math.floor(numberRandom);
}

function getArrayElement(massive) {
  return massive[Math.floor(Math.random() * massive.length)];
}

function getSliceFromFeaures(arrayInto) {
  var sliceLen = getRandomInteger(0, arrayInto.length);
  var randomIntos = [];
  for (var i = 0; i <= sliceLen; i++) {
    randomIntos.push(getArrayElement(arrayInto));
  }
  /*массив на определение уникальности */
  var uniqRandomIntos = [];
  for (var i = 0; i < randomIntos.length; i++) {
    if (!uniqRandomIntos.includes(randomIntos[i])) {
      uniqRandomIntos.push(randomIntos[i]);
    }
  }
  /* добавить ретёрн */
}

function createObject(length) {
    for (var i = 1; i <= length; i++) {
      var locationX = getRandomInteger(100, 800) - LOCATION_ARROW_X;
      var locationY = getRandomInteger(130, 630) + LOCATION_ARROW_Y;
      availableRealtys[i] = {
        author: {
          avatar: "img/avatars/user0" + i + ".png"
        },
        offer: {
          title: "Заголовок " + i,
          adress: locationX + "; " + locationY ,
          price: getRandomInteger(10000, 50000),
          type: realtyTypes[Math.floor(Math.random() * realtyTypes.length)],
          rooms: getRandomInteger(1, 4),
          guests: getRandomInteger(1, 3),
          checkin: getArrayElement(possibleTimes),
          checkout: getArrayElement(possibleTimes),
          features: getSliceFromFeaures(possiblefeatures),
          description: "строка с описанием",
          photos: getSliceFromFeaures(photoUrls),
        },
        location: {
          x: locationX,
          y: locationY
        }
      };
      drawnRealty(availableRealtys[i]);
    }

}

function drawnRealty (realty) {

    var pinButton = document.createElement("button");
    var pinImage = document.createElement("img");

    pinButton.style = "left:" + realty.location.x + "px; " + "top:" + realty.location.y + "px";
    pinButton.classList.add("map__pin");
    pinButton.type = "button";
    pinImage.src = realty.author.avatar;
    pinImage.classList.add("standartImg");

    WorkArea.append(pinButton);
    pinButton.append(pinImage);
}



createObject(8);


"use strict";




/*massiveObj[8] = {
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

var massiveObj = [];
var featuresArr = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
var typeArr = ["palace", "flat", "house", "bungalo"];
var timeArr = ["12:00", "13:00", "14:00"];
var photoArr = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
var findObject = document.querySelector('.map__pins');


function randomInteger(min, max) {
  var numberRandom = min - 0.5 + Math.random() * (max - min + 1);
  return Math.floor(numberRandom);
}

function createObject(length) {
    for (var i = 1; i <= length; i++) {
      massiveObj[i] = {
        author: {
          avatar: "img/avatars/user0" + i + '.png'
        },
        offer: {
          title: "Заголовок " + i,
          adress: "{{location.x}}, {{location.y}}",
          price: randomInteger(10000, 50000),
          type: typeArr[Math.floor(Math.random() * typeArr.length)],
          rooms: randomInteger(1, 4),
          guests: randomInteger(1, 3),
          checkin: timeArr[Math.floor(Math.random() * timeArr.length)],
          checkout: timeArr[Math.floor(Math.random() * timeArr.length)],
          features: featuresArr[Math.floor(Math.random() * featuresArr.length)],
          description: "строка с описанием",
          photos: photoArr,
        },
        location: {
          x: randomInteger(100, 800),
          y: randomInteger(130, 630)
        }
      };
      var pinButton = document.createElement('button');
      var pinImage = document.createElement('img');

      pinButton.style = "left:" + massiveObj[i].location.x + "px; " + "top:" + massiveObj[i].location.y + "px";
      pinButton.classList.add("map__pin");
      pinButton.type = "button";
      pinImage.src = massiveObj[i].author.avatar;
      pinImage.classList.add('standartImg');

      findObject.append(pinButton);
      pinButton.append(pinImage);
    }
}





createObject(8);
console.log( massiveObj);

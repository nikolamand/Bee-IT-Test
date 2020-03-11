window.onload = () => {
  let carouselData = [
    {
      src: "./src/img/hero/StockSnap_FDERTOPXR.png",
      desc: "Image of people on a beach"
    },
    {

      src: "./src/img/hero/StockSnap_ZXOBOKAJEQ.png",
      desc: "Image of a woman using a laptop"
    },
    {

      src: "./src/img/hero/photo-1446160657592-4782fb76fb99.png",
      desc: "Image two women next to a Golden Gate Bridge"
    }
  ]
  let changeImage = () => {
    let hero = document.getElementById("hero");
    let left = document.getElementById("arrow_left");
    let right = document.getElementById("arrow_right");

    hero.style.backgroundImage = `url(${carouselData[0]['src']})`;
    left.onclick = () => {
      let currentImage = hero.style.backgroundImage.replace('url(', '').replace(')', '').replace(/"/g, "");
      let index = carouselData.findIndex(image => image['src'] == currentImage);
      let nextIndex = index - 1;
      if (nextIndex < 0)
        nextIndex = (carouselData.length - 1);
      hero.style.backgroundImage = `url(${carouselData[nextIndex]['src']})`;
    }
    right.onclick = () => {
      let currentImage = hero.style.backgroundImage.replace('url(', '').replace(')', '').replace(/"/g, "");
      let index = carouselData.findIndex(image => image['src'] == currentImage);
      let nextIndex = index + 1;
      if (nextIndex > (carouselData.length - 1))
        nextIndex = 0;
      hero.style.backgroundImage = `url(${carouselData[nextIndex]['src']})`;
    }
  }
  changeImage()


  let offers = [
    {
      "name": "London",
      "img": "./src/img/offers/london.jpeg",
      "price": "£59"
    },
    {
      "name": "Hamburg",
      "img": "./src/img/offers/hamburg.jpg",
      "price": "£79"
    },
    {
      "name": "Alicante",
      "img": "./src/img/offers/alicante.jpg",
      "price": "£89"
    },
    {
      "name": "Milano",
      "img": "./src/img/offers/milano.jpg",
      "price": "£119"
    }
  ]
  let addOffer = (offer) => {
    let offersElement = document.getElementById("offers");
    let offerWrapper = document.createElement("div");
    offerWrapper.className = "offer_wrapper";

    let offerImage = document.createElement("img");
    offerImage.className = "offer_image";
    offerImage.src = offer['img'];
    offerImage.alt = offer['name'];
    offerWrapper.appendChild(offerImage);


    let textWrapper = document.createElement("div");
    textWrapper.className = "text_wrapper";
    let name = document.createElement("H3");
    name.innerHTML = offer['name'];
    let price = document.createElement('p');
    price.innerHTML = "from " + offer['price'];

    let a = document.createElement('a');
    var link = document.createTextNode("Book now >");
    a.appendChild(link);
    a.href = "#";

    textWrapper.appendChild(name);
    textWrapper.appendChild(price);
    textWrapper.appendChild(a);

    offerWrapper.appendChild(textWrapper);
    offersElement.appendChild(offerWrapper);
  }
  offers.forEach(element => {
    addOffer(element);
  });
  
  var myTabs = document.querySelectorAll("ul.tab-nav > li > a");
  function myTabClicks(tabClickEvent) {
    var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].parentElement.classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.parentElement.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
      if(myContentPanes[i].id != activePaneId)
			  myContentPanes[i].classList.remove("active");
		}
		var activePane = document.getElementById(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].onclick = myTabClicks;
	}


};

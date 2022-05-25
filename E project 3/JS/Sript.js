//navbar js//

    $(document).ready(function(){
        $("#mood").click(function(){
            $("body").toggleClass("dark")
            $("#moon").toggle()
            $("#sun").toggle()
        })
    })


function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//product page js//

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
/* Initiate Magnify Function
with the id of the image, and the strength of the magnifier glass:*/
magnify("myimage", 3);



//product page js//
/*
I want to thank Paul Rudnitskiy for his idea.
If you need full work version you can download it here  https://github.com/BlackStar1991/CardProduct
*/



window.onload = function () {

  //// SLIDER
  var slider = document.getElementsByClassName("sliderBlock_items");
  var slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
  var next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
  var previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];
  var items = document.getElementsByClassName("sliderBlock_positionControls")[0];
  var currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");

  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 5000);  /// Delay time of slides

  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  function previousSlide() {
      goToSlide(currentSlide - 1);
  }


  function goToSlide(n) {
      slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
      items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
      items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
  }


  next.onclick = function () {
      nextSlide();
  };
  previous.onclick = function () {
      previousSlide();
  };


  function goToSlideAfterPushTheMiniBlock() {
      for (var i = 0; i < currentSlideItem.length; i++) {
          currentSlideItem[i].onclick = function (i) {
              var index = Array.prototype.indexOf.call(currentSlideItem, this);
              goToSlide(index);
          }
      }
  }

  goToSlideAfterPushTheMiniBlock();


/////////////////////////////////////////////////////////

///// Specification Field


  var buttonFullSpecification = document.getElementsByClassName("block_specification")[0];
  var buttonSpecification = document.getElementsByClassName("block_specification__specificationShow")[0];
  var buttonInformation = document.getElementsByClassName("block_specification__informationShow")[0];

  var blockCharacteristiic = document.querySelector(".block_descriptionCharacteristic");
  var activeCharacteristic = document.querySelector(".block_descriptionCharacteristic__active");


  buttonFullSpecification.onclick = function () {

      console.log("OK");


      buttonSpecification.classList.toggle("hide");
      buttonInformation.classList.toggle("hide");


      blockCharacteristiic.classList.toggle("block_descriptionCharacteristic__active");


  };


/////  QUANTITY ITEMS

  var up = document.getElementsByClassName('block_quantity__up')[0],
      down = document.getElementsByClassName('block_quantity__down')[0],
      input = document.getElementsByClassName('block_quantity__number')[0];

  function getValue() {
      return parseInt(input.value);
  }

  up.onclick = function (event) {
      input.value = getValue() + 1;
  };
  down.onclick = function (event) {
      if (input.value <= 1) {
          return 1;
      } else {
          input.value = getValue() - 1;
      }

  }


};


//end of product page js//

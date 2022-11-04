// identify buttonID, establish cardID, inject css
//let cardOrder = -1;
// let gridOrder = -1;
let gridContainerCounter = 0;
const onClick = (event) => {
  if (event.target.nodeName === 'BUTTON') {
    // establish Card ID
    const cardID = "card" + event.target.id;
    console.log(cardID);
    // reposition Card and decrement cardOrder
    // document.getElementById(cardID).style.order = cardOrder;
    // cardOrder--;
    // resize Card
    //document.getElementById(cardID).style.height = "700px";
    //document.getElementById(cardID).style.width = "100%";
    
    //Mirko, this is the 1st version of the element creation.
    // let div = document.createElement('div');
    // div.id = 'tempGrid';
    // div.innerHTML = '<p>CreateElement example </p>';
    // document.body.appendChild(div);
    // document.getElementById(cardID).parentElement.appendChild(div);
    // shifting to another approach...
    // const cardInUse = document.querySelector("#gridContainer");
    
    // ("[class^='abc']")
    // const cardInUse = document.getElementById('gridContainer').querySelector("[id^='card']")[0].id;
    // if (document.getElementById('gridContainer').style.gridTemplateColumns = "222px 1fr") {
      //   const cardInUse = document.getElementById('gridContainer').querySelector("div[class~='card']")[0].id;
      //   console.log(cardInUse);
      // }
      // document.getElementById('flexContainer').appendChild(cardInUse);
      
      // create grid
      // const GridContainer = document.createElement('div')
      // GridContainer.id = "GridContainer" + gridContainerCounter;
      // document.getElementById("flexContainer").appendChild(GridContainer);
      // document.body.appendChild(GridContainer);
      //move grid
      // let gridToMove = document.getElementById(GridContainer.id);
      // let targetContainer = document.getElementById(flexContainer);
      // (targetContainer.parentElement).appendChild(gridToMove);
      
      let gridContainerID = "gridContainer" + gridContainerCounter;
      
      document.getElementById(gridContainerID).style.display = "grid"; // prepare grid skeleton
      document.getElementById(gridContainerID).style.gridTemplateColumns = "222px 1fr";
      document.getElementById(gridContainerID).style.gridTemplateRows = "450px 350px";
      document.getElementById(gridContainerID).style.gap = "15px";
      document.getElementById(gridContainerID).appendChild(document.getElementById(cardID)); // add card to grid
      document.getElementById(cardID).style.gridColumnStart = "1";
      document.getElementById(cardID).style.gridRowStart = "1";
      document.getElementById(cardID).style.width = "100%"; // get rid of the bootstrap resizing garbage
      window.scrollTo (0,0); // move to top of page
      document.getElementById(event.target.id).innerText = "Remove"; // replace button text

      const iframeIngredients = document.createElement("iframe"); //create and setup iframe
      iframeIngredients.id = "iframeIngredients" + event.target.id;
      iframeIngredients.src = "https://platform.wbscodingschool.com/courses/full-stack-web-app/12083/";
      document.getElementById(gridContainerID).appendChild(iframeIngredients); //add ingredients iframe to grid
      document.getElementById(iframeIngredients.id).style.display = "flex"; //configure iframe
      document.getElementById(iframeIngredients.id).style.gridColumnStart = "2";
      document.getElementById(iframeIngredients.id).style.gridRowStart = "1";
      document.getElementById(iframeIngredients.id).style.width = "100%";
      document.getElementById(iframeIngredients.id).style.height = "100%";

      const iframeMethod = document.createElement("iframe"); //create and setup iframe
      iframeMethod.id = "iframeMethod" + event.target.id;
      iframeMethod.src = "https://explosm.net/";
      document.getElementById(gridContainerID).appendChild(iframeMethod); //add method iframe to grid
      document.getElementById(iframeMethod.id).style.display = "flex"; //configure iframe
      document.getElementById(iframeMethod.id).style.gridColumn = "1 / span 2";
      document.getElementById(iframeMethod.id).style.gridRowStart = "2";
      document.getElementById(iframeMethod.id).style.width = "100%";
      document.getElementById(iframeMethod.id).style.height = "100%";




      gridContainerCounter ++; 
      
      
      


      // gridOrder --;
      //document.getElementById('gridContainer').appendChild(document.createElement());
      
      
      //add new grid item
      // const flexIngredientsDiv = document.createElement("div");
      // flexIngredientsDiv.id = "flexIngredientsDiv";
      // document.body.appendChild(flexIngredientsDiv);
      // document.getElementById(cardID).appendChild(flexIngredientsDiv);
      
      // const flexIngredients = document.createElement("flexIngredients");
      // flexIngredients.innerText = "Button";
      // flexIngredients.id = "flexIngredients-1";
      // flexIngredientsDiv.appendChild(flexIngredients);

      // reformat card
      // document.getElementById(cardID).parentElement.style.display = "grid";
      // document.getElementById(cardID).style.gridTemplateColumns = "auto 1fr";
      // document.getElementById(cardID).style.gridTemplateRows = "1fr 1fr";
      // document.getElementById(cardID).style.gridColumnStart = "1";
      // document.getElementById(cardID).style.gridRowStart = "1";
                                
  }
}
window.addEventListener('click', onClick);

// function killCard () {
  //     console.log("killcard triggered");
  //     var elem = document.getElementById("killme");
  //     elem.remove();
  // }
function WOnload() {
    // const url 
    // const sort = querySelectorAll("");
    // const filter = querySelectorAll("");
    const PizzaWrapper = document.querySelector(".main_ChoosePizza");

    const UrlRequestMenuJSON = "PizzaMenu.json";
    // const UrlRequestMenuJSON = "../PizzaMenu.json";
    const RequestMenuJSON = new XMLHttpRequest();
    RequestMenuJSON.open('GET', UrlRequestMenuJSON);
    RequestMenuJSON.responseType = 'json';
    RequestMenuJSON.send();

    RequestMenuJSON.onload = function() {
        const PizzaMenu = RequestMenuJSON.response;
        // PizzaRender(PizzaMenu);
        console.log(PizzaMenu);
        console.log(PizzaMenu.length);
    };

    // const MenuJSON = JSON.parse(RequestMenuJSON);


    // console.log(PizzaMenu);


    // pagination
    // filtration
    // sort

    function PizzaRender(jsonObj) {  
        for (let i = 0; i < PizzaMenu.length; i++) {
            const main_ChoosePizzaWrapper = document.createElement('div');
            main_ChoosePizzaWrapper.className = "main_ChoosePizzaWrapper";

            const main_ChoosePizzaImg = document.createElement('a');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_MenuImg = document.createElement('img');
            main_MenuImg.className = "main_MenuImg";

            const main_ChoosePizzaProperties = document.createElement('div');
            main_ChoosePizzaProperties.className = "main_ChoosePizzaProperties";

            const main_ChoosePizzaNameDescription = document.createElement('div');
            main_ChoosePizzaNameDescription.className = "main_ChoosePizzaNameDescription";

            const main_ChoosePizzaName = document.createElement('div');
            main_ChoosePizzaName.className = "main_ChoosePizzaName";

            const main_ChoosePizzaDescription = document.createElement('div');
            main_ChoosePizzaDescription.className = "main_ChoosePizzaDescription";

            const main_ChoosePizzaButtonBlockWrapper = document.createElement('div');
            main_ChoosePizzaButtonBlockWrapper.className = "main_ChoosePizzaButtonBlockWrapper";

            const main_ChoosePizzaButtonBlock2Wrapper = document.createElement('div');
            main_ChoosePizzaButtonBlock2Wrapper.className = "main_ChoosePizzaButtonBlock2Wrapper";

            const main_ChoosePizzaButtonBlock2 = document.createElement('button');
            const main_ChoosePizzaButtonBlock2Active = main_ChoosePizzaButtonBlock2;
            main_ChoosePizzaButtonBlock2Active.className = "main_ChoosePizzaButtonBlock2Active";
            main_ChoosePizzaButtonBlock2.className = "main_ChoosePizzaButtonBlock2";

            const main_ChoosePizzaButtonBlock = document.createElement('button');
            const main_ChoosePizzaButtonBlockActive = main_ChoosePizzaButtonBlock;
            main_ChoosePizzaButtonBlockActive.className = "main_ChoosePizzaButtonBlockActive";
            main_ChoosePizzaButtonBlock.className = "main_ChoosePizzaButtonBlock";

            const main_ChoosePizzaPrice = document.createElement('div');
            main_ChoosePizzaPrice.className = "main_ChoosePizzaPrice";


            main_ChoosePizzaName.textContent = PizzaMenu[i].name;
            description.textContent = PizzaMenu[i].description;



              
            const PizzaMenuType = PizzaMenu[i].type;
            for (let j = 0; j < PizzaMenuType.length; j++) {
                main_ChoosePizzaButtonBlock2.textContent = PizzaMenuType[j].name;
                myList.appendChild(listItem);
            }

            const PizzaMenuSize = PizzaMenuType[0].size;
            for (let j = 0; j < PizzaMenuSize.length; j++) {
                
                main_ChoosePizzaButtonBlock.textContent = PizzaMenuType[j].name;
            }

            const PizzaMenuPrice = PizzaMenuSize[0].price;
            for (let j = 0; j < PizzaMenuPrice.length; j++) {
                
                main_ChoosePizzaPrice.textContent = PizzaMenuType[ii].price;
                    
            }



      
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);
      
            section.appendChild(myArticle);
        }
    }


}
WOnload();
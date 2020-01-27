function WOnload() {
    // const url 
    // const sort = querySelectorAll("");
    // const filter = querySelectorAll("");
    const wrapper = document.querySelector(".main_ChoosePizza");

    const UrlRequestMenuJSON = "../PizzaMenu.json";
    const RequestMenuJSON = new XMLHttpRequest();
    RequestMenuJSON.open('GET', UrlRequestMenuJSON);
    RequestMenuJSON.responseType = 'json';
    RequestMenuJSON.send();

    RequestMenuJSON.onload = function() {
        const PizzaMenu = RequestMenuJSON.response;
        // PizzaRender(PizzaMenu);
        console.log(PizzaMenu);
        console.log(PizzaMenu.length);

    }

    // const MenuJSON = JSON.parse(RequestMenuJSON);


    // console.log(PizzaMenu);

    function PizzaRender(jsonObj) {
        const Pizzas = jsonObj['members'];
            
        for (let i = 0; i < Pizzas.length; i++) {
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
            
            const main_ChoosePizzaButtonBlock = document.createElement('button');
            // const main_ChoosePizzaButtonBlockActive = main_ChoosePizzaButtonBlock;
            main_ChoosePizzaButtonBlock.className = "main_ChoosePizzaButtonBlock";
            // main_ChoosePizzaButtonBlockActive.className = "main_ChoosePizzaButtonBlockActive";

            
            
        
            main_ChoosePizzaName.textContent = Pizzas[i].name;
            myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
            myPara2.textContent = 'Age: ' + heroes[i].age;
            myPara3.textContent = 'Superpowers:';
              
            var superPowers = heroes[i].powers;
            for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
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
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
        PizzaRender(PizzaMenu);
        console.log(PizzaMenu);
        console.log(PizzaMenu.length);

    }

    // const MenuJSON = JSON.parse(RequestMenuJSON);


    // console.log(PizzaMenu);

    function PizzaRender(jsonObj) {
        var Pizzas = jsonObj['members'];
            
        for (var i = 0; i < heroes.length; i++) {
            const main_ChoosePizzaWrapper = document.createElement('div');
            main_ChoosePizzaWrapper.className = "main_ChoosePizzaWrapper";

            const main_ChoosePizzaImg = document.createElement('a');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_MenuImg = document.createElement('img');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_ChoosePizzaProperties = document.createElement('div');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_ChoosePizzaNameDescription = document.createElement('div');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_ChoosePizzaName = document.createElement('div');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_ChoosePizzaDescription = document.createElement('div');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";

            const main_ChoosePizzaButtonBlockWrapper = document.createElement('div');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";
            
            const main_ChoosePizzaButtonBlock = document.createElement('button');
            main_ChoosePizzaImg.className = "main_ChoosePizzaImg";
            
            
        
            myH2.textContent = heroes[i].name;
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
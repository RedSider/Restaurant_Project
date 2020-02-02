window.addEventListener('load', async () => {
    // const Url = new URL(location);


    


                // Pizzas json
    const UrlRequestPizzaMenuJSON = "PizzaMenu.json";
    // const UrlRequestPizzaMenuJSON = "../PizzaMenu.json";
    const RequestPizzaMenuJSON = new XMLHttpRequest();
    RequestPizzaMenuJSON.open('GET', UrlRequestPizzaMenuJSON);
    RequestPizzaMenuJSON.responseType = 'json';
    RequestPizzaMenuJSON.send();

                // Sushi json
    // const UrlRequestPizzaMenuJSON = "PizzaMenu.json";
    // // const UrlRequestPizzaMenuJSON = "../PizzaMenu.json";
    // const RequestPizzaMenuJSON = new XMLHttpRequest();
    // RequestPizzaMenuJSON.open('GET', UrlRequestPizzaMenuJSON);
    // RequestPizzaMenuJSON.responseType = 'json';
    // RequestPizzaMenuJSON.send();



    function MenuFilter(FilterStatus, MenuFiltered) {
        MenuFiltered = MenuFiltered.filter(function(item){
            return item.FilterStatus.includes(FilterStatus);
        });
        return MenuFiltered;
    }

    function MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value) {
        let MenuSorted;
        switch (MenuSort_Value) {
            case "price_down":
                if (FilterStatus == "All") {
                    MenuSorted = MenuSorted_All;
                    MenuSorted = MenuSorted.sort( (a, b) => parseFloat(b.defaultPrice) - parseFloat(a.defaultPrice));
                }
                else{
                    MenuSorted = MenuSorted_Filtered;
                    MenuSorted = MenuSorted.sort( (a, b) => parseFloat(b.defaultPrice) - parseFloat(a.defaultPrice));
                }
                console.log(MenuSorted);
                return MenuSorted;
                // break;
            case "price_up":
                if (FilterStatus == "All") {
                    MenuSorted = MenuSorted_All;
                    MenuSorted = MenuSorted.sort( (a, b) => parseFloat(a.defaultPrice) - parseFloat(b.defaultPrice));
                }
                else{
                    MenuSorted = MenuSorted_Filtered;
                    MenuSorted = MenuSorted.sort( (a, b) => parseFloat(a.defaultPrice) - parseFloat(b.defaultPrice));
                }
                return MenuSorted;
                // break;
        
            default:
                console.log(MenuSort_Value);
                break;
        }
    }    



    RequestPizzaMenuJSON.onload = function() {
        const PizzaMenu = RequestPizzaMenuJSON.response;
        const PizzaWrapper = document.querySelector(".main_ChoosePizza");
        PizzaRender(PizzaMenu);
        console.log(PizzaMenu);


        
        const PizzaFilter_All = document.querySelector("#PizzaFilter_All");
        const PizzaFilter_Vegetarian = document.querySelector("#PizzaFilter_Vegetarian");
        const PizzaFilter_Premium = document.querySelector("#PizzaFilter_Premium");
        let PizzaFilterStatus = "All";
        let PizzaMenuFiltered;
        PizzaFilter_All.onclick = () => {
            //проверка, на статус до этого              
            PizzaFilterStatus = "All";
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaRender(PizzaMenu);
        };   
        PizzaFilter_Vegetarian.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Vegetarian";
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
            PizzaRender(PizzaMenuFiltered);
           
        };
        PizzaFilter_Premium.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Premium";
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
            PizzaRender(PizzaMenuFiltered);
        };
        
        

        const PizzaMenuSort = document.querySelector("#PizzaMenuSort");
        PizzaMenuSort.addEventListener("change", () => {
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            let PizzaMenuSorted_All = PizzaMenu;
            let PizzaMenuSorted_Filtered = PizzaMenuFiltered;
            const PizzaMenuSort_Value = PizzaMenuSort[PizzaMenuSort.selectedIndex].value;
            console.log(PizzaMenuSort);

            PizzaRender(MenuSort(PizzaFilterStatus, PizzaMenuSorted_Filtered, PizzaMenuSorted_All, PizzaMenuSort_Value));
        });
        



        function PizzaRender(PizzaMenuDone) {  
                // pagination arr ... js

            for (let i = 0; i < PizzaMenuDone.length; i++) {
                const main_ChoosePizzaWrapper = document.createElement('div');
                main_ChoosePizzaWrapper.className = "main_ChoosePizzaWrapper";

                const main_MenuImgWrapper = document.createElement('a');
                main_MenuImgWrapper.className = "main_MenuImgWrapper";

                const main_MenuImg = document.createElement('img');
                main_MenuImg.className = "main_MenuImg";
                main_MenuImg.src = PizzaMenuDone[i].picture;

                const main_ChoosePizzaProperties = document.createElement('div');
                main_ChoosePizzaProperties.className = "main_ChoosePizzaProperties";

                const main_ChoosePizzaNameDescription = document.createElement('div');
                main_ChoosePizzaNameDescription.className = "main_ChoosePizzaNameDescription";

                const main_ChoosePizzaName = document.createElement('div');
                main_ChoosePizzaName.className = "main_ChoosePizzaName";

                const main_ChoosePizzaDescription = document.createElement('div');
                main_ChoosePizzaDescription.className = "main_ChoosePizzaDescription";

                const main_ChoosePizzaButtonBlockSizeWrapper = document.createElement('div');
                main_ChoosePizzaButtonBlockSizeWrapper.className = "main_ChoosePizzaButtonBlockSizeWrapper";

                const main_ChoosePizzaButtonBlockTypeWrapper = document.createElement('div');
                main_ChoosePizzaButtonBlockTypeWrapper.className = "main_ChoosePizzaButtonBlockTypeWrapper";

                const main_ChoosePizzaPrice = document.createElement('div');
                main_ChoosePizzaPrice.className = "main_ChoosePizzaPrice";



                main_ChoosePizzaName.textContent = PizzaMenuDone[i].name;
                main_ChoosePizzaDescription.textContent = PizzaMenuDone[i].description;


                PizzaWrapper.appendChild(main_ChoosePizzaWrapper);
                
                main_ChoosePizzaWrapper.appendChild(main_MenuImgWrapper);
                main_MenuImgWrapper.appendChild(main_MenuImg);
                main_ChoosePizzaWrapper.appendChild(main_ChoosePizzaProperties);
                main_ChoosePizzaProperties.appendChild(main_ChoosePizzaNameDescription);
                main_ChoosePizzaNameDescription.appendChild(main_ChoosePizzaName);
                main_ChoosePizzaNameDescription.appendChild(main_ChoosePizzaDescription);
                main_ChoosePizzaProperties.appendChild(main_ChoosePizzaButtonBlockSizeWrapper);
                main_ChoosePizzaProperties.appendChild(main_ChoosePizzaButtonBlockTypeWrapper);
                
                
                
                const PizzaMenuType = PizzaMenuDone[i].type;
                for (let j = 0; j < PizzaMenuType.length; j++) {
                    const main_ChoosePizzaButtonBlockType = document.createElement('button');
                    const main_ChoosePizzaButtonBlockTypeActive = main_ChoosePizzaButtonBlockType;
                    main_ChoosePizzaButtonBlockTypeActive.className = "main_ChoosePizzaButtonBlockTypeActive";
                    main_ChoosePizzaButtonBlockType.className = "main_ChoosePizzaButtonBlockType";
                    main_ChoosePizzaButtonBlockType.textContent = PizzaMenuType[j].name;
                    main_ChoosePizzaButtonBlockTypeWrapper.appendChild(main_ChoosePizzaButtonBlockType);
                }

                const PizzaMenuSize = PizzaMenuType[0].size;
                for (let j = 0; j < PizzaMenuSize.length; j++) {
                    const main_ChoosePizzaButtonBlockSize = document.createElement('button');
                    const main_ChoosePizzaButtonBlockSizeActive = main_ChoosePizzaButtonBlockSize;
                    main_ChoosePizzaButtonBlockSizeActive.className = "main_ChoosePizzaButtonBlockSizeActive";
                    main_ChoosePizzaButtonBlockSize.className = "main_ChoosePizzaButtonBlockSize";
                    main_ChoosePizzaButtonBlockSize.textContent = PizzaMenuSize[j].name;
                    main_ChoosePizzaButtonBlockSizeWrapper.appendChild(main_ChoosePizzaButtonBlockSize);
                }

                const PizzaMenuPrice = PizzaMenuSize[0].price;
                for (let j = 0; j < PizzaMenuPrice.length; j++) {
                    main_ChoosePizzaPrice.textContent = PizzaMenuPrice + " hrn";
                    main_ChoosePizzaProperties.appendChild(main_ChoosePizzaPrice);
                }  
            }
        }
    };
});
window.addEventListener('load', async () => {
    // const Url = new URL(location);

    // const Filter = querySelectorAll("");
    // const filter = querySelectorAll("");

    const PizzaWrapper = document.querySelector(".main_ChoosePizza");
    let PizzaFilterStatus = "All";



    const UrlRequestMenuJSON = "PizzaMenu.json";
    // const UrlRequestMenuJSON = "../PizzaMenu.json";
    const RequestMenuJSON = new XMLHttpRequest();
    RequestMenuJSON.open('GET', UrlRequestMenuJSON);
    RequestMenuJSON.responseType = 'json';
    RequestMenuJSON.send();

    RequestMenuJSON.onload = function() {
        const PizzaMenu = RequestMenuJSON.response;
        PizzaRender(PizzaMenu);
        console.log(PizzaMenu);
        
        // console.log(PizzaMenu.length);


        
        const PizzaFilter_All = document.querySelector("#PizzaFilter_All");
        PizzaFilter_All.onclick = () => {
            //проверка, на статус до этого              
            PizzaFilterStatus = "All";
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaRender(PizzaMenu);
        };
        const PizzaFilter_Vegetarian = document.querySelector("#PizzaFilter_Vegetarian");
        PizzaFilter_Vegetarian.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Vegetarian";
            PizzaMenuFilter();
           
        };
        const PizzaFilter_Premium = document.querySelector("#PizzaFilter_Premium");
        PizzaFilter_Premium.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Premium";
            PizzaMenuFilter();
        };
        let PizzaMenuFiltered;
        function PizzaMenuFilter() {
            PizzaMenuFiltered = PizzaMenu;
            console.log(PizzaMenuFiltered);
            PizzaMenuFiltered = PizzaMenuFiltered.filter(function(item){
                return item.FilterStatus.includes(PizzaFilterStatus);
            });
            console.log(PizzaMenuFiltered);
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaRender(PizzaMenuFiltered);
        }
        // function PizzaMenuFilter() {
        //     let PizzaMenuFiltered = [];
        //     for (let i = 0; i < PizzaMenu.length; i++) {
        //         console.log(PizzaMenu[i].FilterStatus);
        //         let FilterStatus = PizzaMenu[i].FilterStatus;
        //         for (let j = 0; j < FilterStatus.length; j++) {
        //             if (FilterStatus[j] == PizzaFilterStatus) {
        //                 PizzaMenuFiltered.push(PizzaMenu[i]);
        //                 console.log(PizzaMenuFiltered);
        //             }
        //         }
        //     }
        //     PizzaRender(PizzaMenu);
        // }
        
        
        console.log(PizzaMenu[0].type[0].size[0].price);
        const PizzaMenuSort = document.querySelector("#PizzaMenuSort");
        let PizaMenuSorted;
        console.log(PizzaMenuSort);
        PizzaMenuSort.addEventListener("change", () => {
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            switch (PizzaMenuSort[PizzaMenuSort.selectedIndex].value) {
                case "price_down":
                    console.log(PizzaMenuFiltered);
                    if (PizzaFilterStatus == "All") {
                        PizaMenuSorted = PizzaMenu;
                        PizaMenuSorted = PizaMenuSorted.sort( (a, b) => a.type[0].size[0].price < b.type[0].size[0].price ? 1 : -1);
                    }
                    else{
                        PizaMenuSorted = PizzaMenuFiltered;
                        PizaMenuSorted = PizaMenuSorted.sort( (a, b) => a.type[0].size[0].price < b.type[0].size[0].price ? 1 : -1);
                    }
                    PizzaRender(PizaMenuSorted);
                    console.log(PizaMenuSorted);
                    break;

                case "price_up":
                    if (PizzaFilterStatus == "All") {
                        PizaMenuSorted = PizzaMenu;
                        PizaMenuSorted = PizaMenuSorted.sort( (a, b) => a.type[0].size[0].price > b.type[0].size[0].price ? 1 : -1);
                    }
                    else{
                        PizaMenuSorted = PizzaMenuFiltered;
                        PizaMenuSorted = PizaMenuSorted.sort( (a, b) => a.type[0].size[0].price > b.type[0].size[0].price ? 1 : -1);
                    }
                    PizzaRender(PizaMenuSorted);
                    break;
            
                default:
                    console.log(PizzaMenuSort.options);
                    break;
            }
        });
        



        function PizzaRender(PizzaMenuDone) {  
                // sort arr sort js

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
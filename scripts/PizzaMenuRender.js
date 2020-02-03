window.addEventListener('load', async () => {
    // const Url = new URL(location);

                // Pizza json
    const UrlRequestPizzaMenuJSON = "jsonDB_Menu/PizzaMenu.json";
    const RequestPizzaMenuJSON = new XMLHttpRequest();
    RequestPizzaMenuJSON.open('GET', UrlRequestPizzaMenuJSON);
    RequestPizzaMenuJSON.responseType = 'json';
    RequestPizzaMenuJSON.send();

                // Sushi json
    const UrlRequestSushiMenuJSON = "jsonDB_Menu/SushiMenu.json";
    const RequestSushiMenuJSON = new XMLHttpRequest();
    RequestSushiMenuJSON.open('GET', UrlRequestSushiMenuJSON);
    RequestSushiMenuJSON.responseType = 'json';
    RequestSushiMenuJSON.send();
    
                // Snacks&salads json
    const UrlRequestSnacksAndSaladsMenuJSON = "jsonDB_Menu/SushiMenu.json";
    const RequestSnacksAndSaladsMenuJSON = new XMLHttpRequest();
    RequestSnacksAndSaladsMenuJSON.open('GET', UrlRequestSnacksAndSaladsMenuJSON);
    RequestSnacksAndSaladsMenuJSON.responseType = 'json';
    RequestSnacksAndSaladsMenuJSON.send();

                // Soups json
    const UrlRequestSoupsMenuJSON = "jsonDB_Menu/SoupsMenu.json";
    const RequestSoupsMenuJSON = new XMLHttpRequest();
    RequestSoupsMenuJSON.open('GET', UrlRequestSoupsMenuJSON);
    RequestSoupsMenuJSON.responseType = 'json';
    RequestSoupsMenuJSON.send();

                // HotMeals json
    // const UrlRequestHotMealsMenuJSON = "jsonDB_Menu/HotMealsMenu.json";
    // const RequestHotMealsMenuJSON = new XMLHttpRequest();
    // RequestHotMealsMenuJSON.open('GET', UrlRequestHotMealsMenuJSON);
    // RequestHotMealsMenuJSON.responseType = 'json';
    // RequestHotMealsMenuJSON.send();

                // Desserts json
    const UrlRequestDessertsMenuJSON = "jsonDB_Menu/DessertsMenu.json";
    const RequestDessertsMenuJSON = new XMLHttpRequest();
    RequestDessertsMenuJSON.open('GET', UrlRequestDessertsMenuJSON);
    RequestDessertsMenuJSON.responseType = 'json';
    RequestDessertsMenuJSON.send();

                // Beverages json
    const UrlRequestBeveragesMenuJSON = "jsonDB_Menu/BeveragesMenu.json";
    const RequestBeveragesMenuJSON = new XMLHttpRequest();
    RequestBeveragesMenuJSON.open('GET', UrlRequestBeveragesMenuJSON);
    RequestBeveragesMenuJSON.responseType = 'json';
    RequestBeveragesMenuJSON.send();



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

    function MenuRender(MenuDone, innerMenuWrapper, itemMenuName, currentPage, buttonBlock) {
        const PageMenuItems = 6;
        const pages = MenuDone.length / PageMenuItems;
        let currentMenu = [];
        let i = 0;
        if (currentPage != 1) {
            i = ((currentPage - 1) * PageMenuItems) + 1;
        }

        for (let j = 0; j < 6; j++) {
            if (MenuDone[i] != undefined) {    
                currentMenu.push(MenuDone[i]);
                i++;
            }
        }

        for (let i = 0; i < currentMenu.length; i++) {
            const CreateItemWrapper = document.createElement('div');
            CreateItemWrapper.className = "item"+itemMenuName+"Wrapper";
            CreateItemWrapper.className += " itemWrapper";

            const CreateItemImgWrapper = document.createElement('a');
            CreateItemImgWrapper.className = "item"+itemMenuName+"ImgWrapper";
            CreateItemImgWrapper.className += " itemImgWrapper";

            const CreateItemImg = document.createElement('img');
            CreateItemImg.className = "item"+itemMenuName+"Img";
            CreateItemImg.className += " itemImg";
            CreateItemImg.src = MenuDone[i].picture;

            const CreateItemProperties = document.createElement('div');
            CreateItemProperties.className = "item"+itemMenuName+"Properties";
            CreateItemProperties.className += " itemProperties";

            const CreateItemDescriptionWrapper = document.createElement('div');
            CreateItemDescriptionWrapper.className = "item"+itemMenuName+"DescriptionWrapper";
            CreateItemDescriptionWrapper.className += " itemDescriptionWrapper";

            const CreateItemName = document.createElement('div');
            CreateItemName.className = "item"+itemMenuName+"Name";
            CreateItemName.className += " itemName";
            CreateItemName.textContent = MenuDone[i].name;

            const CreateItemDescription = document.createElement('div');
            CreateItemDescription.className = "item"+itemMenuName+"Description";
            CreateItemDescription.className += " itemDescription";
            CreateItemDescription.textContent = MenuDone[i].description;

            const CreateItemPrice = document.createElement('div');
            CreateItemPrice.className = "item"+itemMenuName+"Price";
            CreateItemPrice.className += " itemPrice";
            CreateItemPrice.textContent = MenuDone[i].defaultPrice + " hrn";

            innerMenuWrapper.appendChild(CreateItemWrapper);
                
            CreateItemWrapper.appendChild(CreateItemImgWrapper);
            CreateItemImgWrapper.appendChild(CreateItemImg);
            CreateItemWrapper.appendChild(CreateItemProperties);
            CreateItemProperties.appendChild(CreateItemDescriptionWrapper);
            CreateItemDescriptionWrapper.appendChild(CreateItemName);
            CreateItemDescriptionWrapper.appendChild(CreateItemDescription);
            

            const CreateItemButtonBlockType = document.createElement('div');
            const CreateItemButtonBlockSize = document.createElement('div');
            if (buttonBlock == 1) {
                const itemButtonType = currentMenu[i].type;
                const itemButtonSize = itemButtonType[0].size;
                CreateItemButtonBlockType.className = "item"+itemMenuName+"ButtonBlockType";
                CreateItemButtonBlockType.className += " itemButtonBlockType";
                CreateItemButtonBlockSize.className = "item"+itemMenuName+"ButtonBlockSize";
                CreateItemButtonBlockSize.className += " itemButtonBlockSize";
                const CreateItemButtonTypeActive = document.createElement('button');
                const CreateItemButtonSizeActive = document.createElement('button');
                CreateItemButtonTypeActive.className = "item"+itemMenuName+"ButtonTypeActive";
                CreateItemButtonTypeActive.className += " item"+itemMenuName+"ButtonType";
                CreateItemButtonSizeActive.className = "item"+itemMenuName+"ButtonSizeActive";
                CreateItemButtonSizeActive.className += " item"+itemMenuName+"ButtonSize";
                CreateItemButtonTypeActive.textContent = itemButtonType[0].name;
                CreateItemButtonSizeActive.textContent = itemButtonSize[0].name;
                CreateItemButtonBlockType.appendChild(CreateItemButtonTypeActive);
                CreateItemButtonBlockSize.appendChild(CreateItemButtonSizeActive);
                for (let j = 1; j < itemButtonType.length; j++) {
                    const CreateItemButtonType = document.createElement('button');
                    CreateItemButtonType.className = "item"+itemMenuName+"ButtonType";                
                    CreateItemButtonType.textContent = itemButtonType[j].name;               
                    CreateItemButtonBlockType.appendChild(CreateItemButtonType);
                }
                for (let j = 1; j < itemButtonSize.length; j++) {
                    const CreateItemButtonSize = document.createElement('button');
                    CreateItemButtonSize.className = "item"+itemMenuName+"ButtonSize";
                    CreateItemButtonSize.textContent = itemButtonSize[j].name;
                    CreateItemButtonBlockSize.appendChild(CreateItemButtonSize);
                }
                 
            } else {
                const CreateItemButtonOneSizeActive = document.createElement('div');
                CreateItemButtonOneSizeActive.className = "item"+itemMenuName+"ButtonBlockOneSizeActive";
                CreateItemButtonOneSizeActive.className += " itemButtonOneSizeActive";
                CreateItemButtonOneSizeActive.textContent = currentMenu[i].size;
                CreateItemButtonBlockSize.appendChild(CreateItemButtonOneSizeActive);
            }
            CreateItemProperties.appendChild(CreateItemButtonBlockSize);
            CreateItemProperties.appendChild(CreateItemButtonBlockType);
            CreateItemProperties.appendChild(CreateItemPrice);
        } 
        
        if (pages > 1) {
            RenderMenuPagination(currentPage, pages, innerMenuWrapper);
        }
        // console.log(currentMenu);
        return currentMenu;
    }

    function RenderMenuPagination(currentPage, pages, MenuWrapper) {
        const MenuPageWrapper = document.createElement('div');
        MenuPageWrapper.className = "MenuPageWrapper";
        for (let i = 1; i <= pages; i++) {
            const MenuPage = document.createElement('div');
            MenuPage.className = "MenuPage" + i;
            MenuPage.textContent = i;
            MenuPageWrapper.appendChild(MenuPage);
            
        }
        currentPage.className += "ActivePage";
        MenuWrapper.appendChild(MenuPageWrapper);
    }



    RequestPizzaMenuJSON.onload = function() {
        const PizzaMenu = RequestPizzaMenuJSON.response;
        const PizzaWrapper = document.querySelector("#PizzaMenuWrapper");
        const itemMenuName = "Pizza";
        const buttonBlock = 1;
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
            MenuRender(PizzaMenu, PizzaWrapper, itemMenuName, 1, buttonBlock);
        };   
        PizzaFilter_Vegetarian.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Vegetarian";
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(PizzaMenuFiltered, PizzaWrapper, itemMenuName, 1, buttonBlock);
        };
        PizzaFilter_Premium.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Premium";
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(PizzaMenuFiltered, PizzaWrapper, itemMenuName, 1, buttonBlock);
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

            MenuRender(MenuSort(PizzaFilterStatus, PizzaMenuSorted_Filtered, PizzaMenuSorted_All, PizzaMenuSort_Value), PizzaWrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(PizzaMenu, PizzaWrapper, itemMenuName, 1, buttonBlock);
    };

    RequestSushiMenuJSON.onload = function() {
        const Menu = RequestSushiMenuJSON.response;
        const Wrapper = document.querySelector("#SushiMenuWrapper");
        const itemMenuName = "Sushi";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#SushiFilter_All");
        const Filter_rolls = document.querySelector("#SushiFilter_sets");
        const Filter_sets = document.querySelector("#SushiFilter_rolls");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_rolls.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "rolls";
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_sets.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "sets";
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#SushiMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;
            console.log(MenuSortBtn);

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestSushiMenuJSON.onload = function() {
        const Menu = RequestSushiMenuJSON.response;
        const Wrapper = document.querySelector("#SushiMenuWrapper");
        const itemMenuName = "Sushi";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#SushiFilter_All");
        const Filter_rolls = document.querySelector("#SushiFilter_sets");
        const Filter_sets = document.querySelector("#SushiFilter_rolls");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_rolls.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "rolls";
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_sets.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "sets";
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#SushiMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;
            console.log(MenuSortBtn);

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }
});
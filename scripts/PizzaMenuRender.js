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
    const UrlRequestSnacksAndSaladsMenuJSON = "jsonDB_Menu/SnaksMenu.json";
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
    const UrlRequestHotMealsMenuJSON = "jsonDB_Menu/HotMenu.json";
    const RequestHotMealsMenuJSON = new XMLHttpRequest();
    RequestHotMealsMenuJSON.open('GET', UrlRequestHotMealsMenuJSON);
    RequestHotMealsMenuJSON.responseType = 'json';
    RequestHotMealsMenuJSON.send();

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
        pages = Math.ceil(MenuDone.length / PageMenuItems);
        let currentMenu = [];
        let i = 0;
        if (currentPage > 1) {
            i = (currentPage - 1) * PageMenuItems;
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
            CreateItemImg.src = currentMenu[i].picture;

            const CreateItemProperties = document.createElement('div');
            CreateItemProperties.className = "item"+itemMenuName+"Properties";
            CreateItemProperties.className += " itemProperties";

            const CreateItemDescriptionWrapper = document.createElement('div');
            CreateItemDescriptionWrapper.className = "item"+itemMenuName+"DescriptionWrapper";
            CreateItemDescriptionWrapper.className += " itemDescriptionWrapper";

            const CreateItemName = document.createElement('div');
            CreateItemName.className = "item"+itemMenuName+"Name";
            CreateItemName.className += " itemName";
            CreateItemName.textContent = currentMenu[i].name;

            const CreateItemDescription = document.createElement('div');
            CreateItemDescription.className = "item"+itemMenuName+"Description";
            CreateItemDescription.className += " itemDescription";
            CreateItemDescription.textContent = currentMenu[i].description;

            const CreateItemPrice = document.createElement('div');
            CreateItemPrice.className = "item"+itemMenuName+"Price";
            CreateItemPrice.className += " itemPrice";
            CreateItemPrice.textContent = currentMenu[i].defaultPrice + " hrn";

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
            RenderMenuPagination(currentPage, pages, innerMenuWrapper, itemMenuName, MenuDone, innerMenuWrapper, buttonBlock);
        }
        // return PageItems;
    }

    function RenderMenuPagination(currentPage, pages, MenuWrapper, itemMenuName, MenuDone, innerMenuWrapper, buttonBlock) {
        const MenuPageWrapper = document.createElement('div');
        const MenuPageBlockWrapper = document.createElement('div');
        let PageItems = [];
        MenuPageWrapper.className = "MenuPageWrapper";
        MenuPageBlockWrapper.className = "MenuPageBlockWrapper";
        for (let i = 1; i <= pages; i++) {
            const MenuPageBlock = document.createElement('div');
            const MenuPage = document.createElement('p');
            MenuPageBlock.className = "MenuPageBlock";
            MenuPageBlock.className += " " + itemMenuName;
            MenuPage.className = "MenuPage";
            MenuPage.className += " MenuPage" + i;
            MenuPageBlock.id = itemMenuName + "MenuPage" + i;
            MenuPage.textContent = i;
            if (currentPage == i) {
                MenuPageBlock.className += " ActivePage";
            }
            MenuPageBlockWrapper.appendChild(MenuPageBlock);
            MenuPageBlock.appendChild(MenuPage);
            PageItems.push(MenuPage.id);
        }
        MenuWrapper.appendChild(MenuPageWrapper);
        MenuPageWrapper.appendChild(MenuPageBlockWrapper);
        MenuPageBlock_addEventListener(currentPage, pages, MenuWrapper, itemMenuName, MenuDone, innerMenuWrapper, buttonBlock);
    }

    function MenuPageBlock_addEventListener(currentPage, pages, MenuWrapper, itemMenuName, MenuDone, innerMenuWrapper, buttonBlock) {
        for (let i = 1; i <= pages; i++) {
            const Listner = document.querySelector("#"+itemMenuName+"MenuPage"+i);
            Listner.addEventListener("click", () => {
                currentPage = i;
                while (MenuWrapper.firstChild) {
                    MenuWrapper.removeChild(MenuWrapper.firstChild);
                }
                MenuRender(MenuDone, innerMenuWrapper, itemMenuName, currentPage, buttonBlock);
            });
        } 
    };

    function Filter_btnActive(FilterName, ActiveFilter) {
        ActiveFilter.classList.remove("Filter_btnActive");
        ActiveFilter = FilterName; 
        ActiveFilter.classList.add("Filter_btnActive");
        return ActiveFilter;
    }


    RequestPizzaMenuJSON.onload = function() {
        const PizzaMenu = RequestPizzaMenuJSON.response;
        const PizzaWrapper = document.querySelector("#PizzaMenuWrapper");
        const itemMenuName = "Pizza";
        const buttonBlock = 1;
        const PizzaFilter_All = document.querySelector("#PizzaFilter_All");
        const PizzaFilter_Vegetarian = document.querySelector("#PizzaFilter_Vegetarian");
        const PizzaFilter_Premium = document.querySelector("#PizzaFilter_Premium");
        let ActiveFilter = PizzaFilter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let PizzaFilterStatus = "All";
        let PizzaMenuFiltered;
        PizzaFilter_All.onclick = () => {
            //проверка, на статус до этого              
            PizzaFilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(PizzaFilter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            MenuRender(PizzaMenu, PizzaWrapper, itemMenuName, 1, buttonBlock);
        };   
        PizzaFilter_Vegetarian.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Vegetarian";
            let ActiveFilterNew = Filter_btnActive(PizzaFilter_Vegetarian, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
            MenuRender(PizzaMenuFiltered, PizzaWrapper, itemMenuName, 1, buttonBlock);
        };
        PizzaFilter_Premium.onclick = () => {
            //проверка, на статус до этого
            PizzaFilterStatus = "Premium";
            let ActiveFilterNew = Filter_btnActive(PizzaFilter_Premium, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            PizzaMenuFiltered = PizzaMenu;
            while (PizzaWrapper.firstChild) {
                PizzaWrapper.removeChild(PizzaWrapper.firstChild);
            }
            PizzaMenuFiltered = MenuFilter(PizzaFilterStatus, PizzaMenuFiltered);
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
        const Filter_sets = document.querySelector("#SushiFilter_sets");
        const Filter_rolls = document.querySelector("#SushiFilter_rolls");
        let ActiveFilter = Filter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_rolls.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "rolls";
            let ActiveFilterNew = Filter_btnActive(Filter_rolls, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_sets.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "sets";
            let ActiveFilterNew = Filter_btnActive(Filter_sets, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
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

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestSnacksAndSaladsMenuJSON.onload = function() {
        const Menu = RequestSnacksAndSaladsMenuJSON.response;
        const Wrapper = document.querySelector("#SnacksAndSaladsMenuWrapper");
        const itemMenuName = "SnacksAndSalads";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#SnacksAndSaladsFilter_All");
        const Filter_Snacks = document.querySelector("#SnacksAndSaladsFilter_Snacks");
        const Filter_Salads = document.querySelector("#SnacksAndSaladsFilter_Salads");
        let ActiveFilter = Filter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_Snacks.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "snack";
            let ActiveFilterNew = Filter_btnActive(Filter_Snacks, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_Salads.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "Filter_Salads";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#SnacksAndSaladsMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestSoupsMenuJSON.onload = function() {
        const Menu = RequestSoupsMenuJSON.response;
        const Wrapper = document.querySelector("#SoupsMenuWrapper");
        const itemMenuName = "Soups";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#SoupsFilter_All");
        const Filter_SpecialOffer = document.querySelector("#SoupsFilter_specialOffer");
        let ActiveFilter = Filter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_SpecialOffer.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "SpecialOffer";
            let ActiveFilterNew = Filter_btnActive(Filter_SpecialOffer, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#SoupsMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestHotMealsMenuJSON.onload = function() {
        const Menu = RequestHotMealsMenuJSON.response;
        const Wrapper = document.querySelector("#HotMealsMenuWrapper");
        const itemMenuName = "HotMeals";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#HotMealsFilter_All");
        const Filter_Vegetarian = document.querySelector("#HotMealsFilter_Vegetarian");
        const Filter_SpecialOffer = document.querySelector("#HotMealsFilter_specialOfer");
        let ActiveFilter = Filter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_Vegetarian.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "Vegetarian";
            let ActiveFilterNew = Filter_btnActive(Filter_Vegetarian, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_SpecialOffer.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "SpecialOffer";
            let ActiveFilterNew = Filter_btnActive(Filter_SpecialOffer, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#HotMealsMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestDessertsMenuJSON.onload = function() {
        const Menu = RequestDessertsMenuJSON.response;
        const Wrapper = document.querySelector("#DessertsMenuWrapper");
        const itemMenuName = "Sushi";
        const buttonBlock = 2;
        let FilterStatus = "All";
        let MenuFiltered;
        const MenuSortBtn = document.querySelector("#DessertsMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

    RequestBeveragesMenuJSON.onload = function() {
        const Menu = RequestBeveragesMenuJSON.response;
        const Wrapper = document.querySelector("#BeveragesMenuWrapper");
        const itemMenuName = "Beverages";
        const buttonBlock = 2;
        const Filter_All = document.querySelector("#BeveragesFilter_All");
        const Filter_NoAlco = document.querySelector("#BeveragesFilter_NoAlco");
        const Filter_Alco = document.querySelector("#BeveragesFilter_Alco");
        let ActiveFilter = Filter_All;
        ActiveFilter.classList.add("Filter_btnActive");
        let FilterStatus = "All";
        let MenuFiltered;
        Filter_All.onclick = () => {
            //проверка, на статус до этого              
            FilterStatus = "All";
            let ActiveFilterNew = Filter_btnActive(Filter_All, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
        };   
        Filter_NoAlco.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "NoAlco";
            let ActiveFilterNew = Filter_btnActive(Filter_NoAlco, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        Filter_Alco.onclick = () => {
            //проверка, на статус до этого
            FilterStatus = "Alco";
            let ActiveFilterNew = Filter_btnActive(Filter_Alco, ActiveFilter);
            ActiveFilter = ActiveFilterNew;
            MenuFiltered = Menu;
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            MenuFiltered = MenuFilter(FilterStatus, MenuFiltered);
            // PizzaRender(PizzaMenuFiltered);
            MenuRender(MenuFiltered, Wrapper, itemMenuName, 1, buttonBlock);
        };
        const MenuSortBtn = document.querySelector("#BeveragesMenuSort");
        MenuSortBtn.addEventListener("change", () => {
            while (Wrapper.firstChild) {
                Wrapper.removeChild(Wrapper.firstChild);
            }
            let MenuSorted_All = Menu;
            let MenuSorted_Filtered = MenuFiltered;
            const MenuSort_Value = MenuSortBtn[MenuSortBtn.selectedIndex].value;

            MenuRender(MenuSort(FilterStatus, MenuSorted_Filtered, MenuSorted_All, MenuSort_Value), Wrapper, itemMenuName, 1, buttonBlock);
        });
        MenuRender(Menu, Wrapper, itemMenuName, 1, buttonBlock);
    }

});
/*jshint esversion: 6 */

/**
 * renders the filter styles on the product collection pages
 *
 */
function getStyles(type) {
    const $styles = document.querySelector(".styles");
    var styleCounts = [];
    products.forEach((item) => {
      if(item.style.length > 1) {
        item.style.forEach((s) => {
          
            var data = styleCounts.find((e) => e.style === s);
            if(data) {
              data.count++;
            } else {
              var emptyStyle = { style: s, count: 1};
                styleCounts.push(emptyStyle);
            }
        });
      } else {
        var data = styleCounts.find((e) => e.style === item.style[0]);
        if(data) {
          data.count++;
        } else {
          var emptyStyle = { style: item.style[0], count: 1};
            styleCounts.push(emptyStyle);
        }
      }
    });
    styleCounts.forEach(item => {
      addFilter(item.style, type);
    });
    $styles.innerHTML = styleCounts.map((item) => `
          <li>
            <label class="checkbox-inline">
              <input name="input-group-radio" value="${item.style}" type="checkbox" class="checkbox-custom" onclick="${(type==="list")?"handleFiltersChangedList(event)" : "handleFiltersChangedGrid(event)"};" checked><span class="checkbox-custom-dummy"></span>${item.style}
            </label><span class="list-shop-filter-number">(${item.count})</span>
          </li>
          `).join("");
}
/**
 * renders the Product Grid Page collection
 *
 * @param {*} page
 * @param {*} filters
 */
function renderGridProducts(page, filters) {
    const $products = document.querySelector(".products");
    const start_id = (page * 9)-8;
    const end_id = (page * 9);
    const filteredProducts = (filters && filters.size > 0) ? products.filter(p => p.style.some(r => filters.has(r))) : products;

    const pageProducts = filteredProducts.slice((page*9)-9,page*9);
    $products.innerHTML = pageProducts.map((item) => `
      <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">
            <!-- Product-->
            <article class="product">
              <div class="product-body">
                <div class="product-figure"><img src="${item.image_small}" alt="">
                </div>
                <h5 class="product-title"><a href="single-product-${item.id}.html">${item.name}</a></h5>
                <div class="product-price-wrap">
                  ${(item.onSale == true)? `<div class=\"product-price product-price-old\">$${item.price_previous}</div>` : ""}
                  <div class="product-price">$${item.price_current}</div>
                </div>
              </div>
              
              ${(item.onSale == true) ? `<span class=\"product-badge product-badge-sale\">Sale</span>` : "" }
              <div class="product-button-wrap">
                <div class="product-button"><a class="button button-primary-2 button-zakaria fl-bigmug-line-search74" href="single-product-${item.id}.html"></a></div>
                <div class="product-button"><span class="button button-primary-2 button-zakaria fl-bigmug-line-shopping202" onclick="cartLS.add({id: ${item.id}, name: '${item.name}', price: ${item.price_current}, image: '${item.image_small}'})"></span></div>
              </div>
            </article>
          </div>
        `).join("");
}
/**
 * renders the Home PAge Product carousel
 *
 * @param {*} page
 */
function renderHomeProducts() {
    const $products = document.querySelector(".home-products");
    // $products.innerHTML = products.map((item) => `
    //         <div class="owl-item cloned ${(item.id < 4) ? "active" : ""}" style="width: 370px; margin-right: 30px;">
    //             <article class="box-info-modern wow slideInUp" data-wow-delay=".1s" style="visibility: hidden; animation-delay: 0.1s; animation-name: none;">
    //                 <a class="box-info-modern-figure" href="single-product-${item.id}.html"><img src="${item.image_small}" alt="" width="340" height="243"></a>
    //                 <h4 class="box-info-modern-title"><a href="single-product-${item.id}.html">${item.name} <br><i style="font-size: large;"></i></a></h4>
    //                 <div class="box-info-modern-text">${item.desc_short}</div>
    //                 <a class="box-info-modern-link" href="single-product-${item.id}.html">Read more</a>
    //             </article>
    //         </div>
    //     `).join("");
    $products.innerHTML = products.map((item) => `
                <article class="box-info-modern wow slideInUp" data-wow-delay=".1s" style="visibility: hidden; animation-delay: 0.1s; animation-name: none;">
                    <a class="box-info-modern-figure" href="single-product-${item.id}.html"><img src="${item.image_small}" alt="" width="340" height="243"></a>
                    <h4 class="box-info-modern-title"><a href="single-product-${item.id}.html">${item.name} <br><i style="font-size: large;"></i></a></h4>
                    <div class="box-info-modern-text">${item.desc_short}</div>
                    <a class="box-info-modern-link" href="single-product-${item.id}.html">Read more</a>
                </article>
        `).join("");
}
/**
 * renders the Product List Page products
 *
 * @param {*} page number
 * @param {*} filters selected style filters array
 */
function renderListProducts(page, filters) {
    const $products = document.querySelector(".products");
    const start_id = (page * 3)-2;
    const end_id = (page * 3);
    const filteredProducts = (filters && filters.size > 0) ? products.filter(p => p.style.some(r => filters.has(r))) : products;

    const pageProducts = filteredProducts.slice((page*3)-3,page*3);
    $products.innerHTML = pageProducts.map((item) => `
            <div class=\"col-12\">
                <!-- Product-->
                <article class=\"product-modern text-center text-sm-left\">
                    <div class=\"unit unit-spacing-0 flex-column flex-sm-row\">
                        <div class=\"unit-left\">
                            <a class=\"product-modern-figure\" href=\"single-product-${item.id}.html\">
                            <img src=\"${item.image_large}\" alt=\"\" width=\"328\" height=\"330\" style=\"height: 330;width: 430;\">
                            </a>
                        </div>
                        <div class=\"unit-body\">
                            <div class=\"product-modern-body\">
                                <h4 class=\"product-modern-title\"><a href=\"single-product-${item.id}.html\">${item.name}</a></h4>
                                <div class=\"product-price-wrap\">
                                    ${(item.onSale == true)? `<div class=\"product-price product-price-old\">$${item.price_previous}</div>` : ""}
                                    <div class=\"product-price\">$${item.price_current}</div>
                                </div>
                                <p class=\"product-modern-text\">${item.desc_short}</p>
                                <a class=\"button button-primary button-zakaria\" onclick=\"cartLS.add({id: ${item.id}, name: '${item.name}', price: ${item.price_current}, image: '${item.image_small}'})\" style=\"color:white;\">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    ${(item.onSale == true)? "<span class=\"product-badge product-badge-sale\">Sale</span>": "" }
                </article>
            </div>
        `).join("");
}
/**
 * renders the mini-shopping cart
 *
 * @param {*} items cart item list
 */
function renderMiniCart(items) {
    const $cartItems = document.querySelector(".mini-cart-items");
    const $minitotal = document.querySelector(".mini-total");
    const $count = document.querySelector(".cart-count");
    const $minicount = document.querySelector(".cart-count-2");
    var quantity = 0;

    $cartItems.innerHTML = items.map((item) => `
        <div class="cart-inline-item">
          <div class="unit unit-spacing-sm align-items-center">
            <div class="unit-left"><a class="cart-inline-figure" href="single-product-${item.id}.html"><img src="${item.image}" alt="" width="100" height="90" style="width:100px; height:90px;background-color:white"></a></div>
            <div class="unit-body">
              <h6 class="cart-inline-name"><a href="single-product-${item.id}.html">${item.name}</a></h6>
              <div>
                <div class="group-xs group-middle">
                  <div class="table-cart-stepper">
                    <div class="stepper "><input class="form-input stepper-input" type="number" data-zeros="true" value="${item.quantity}" min="1" max="1000"><span class="stepper-arrow up" onClick="cartLS.quantity(${item.id},1)"></span><span class="stepper-arrow down" onClick="cartLS.quantity(${item.id},-1)"></span></div>
                  </div>
                  <h6 class="cart-inline-title">$${item.price * item.quantity}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>`).join("");
        
    $minitotal.innerHTML = " $" + cartLS.total();
    cartLS.list().forEach(item => {
        quantity += item.quantity;

    });
    $count.innerHTML = " " + quantity;
    $minicount.innerHTML = " " + quantity;
}    
/**
 * renders the Product Grid Page Paginator
 *
 * @param {*} activePage
 */
function renderGridPaginator(activePage) {
    const $paging = document.querySelector(".pagination");
    const $matchingCount = document.querySelector(".matching-count");
    const $showItems = document.querySelector(".shown-items");

    const filteredProducts = (filterSet && filterSet.size > 0) ? products.filter(p => p.style.some(r => filterSet.has(r))) : products;
    const pageCount = Math.ceil(filteredProducts.length / 9);
    var pager = (activePage <= 1) ? `<li class="page-item page-item-control disabled"><a class="page-link" onclick="renderPaginator(${activePage - 1})" aria-label="Previous"><span class="icon" aria-hidden="true"></span></a></li>` : `<li class="page-item page-item-control"><a class="page-link" onclick="renderPaginator(${activePage - 1})" aria-label="Previous"><span class="icon" aria-hidden="true"></span></a></li>`;
    for(var i = 0; i < pageCount; i++) {
        pager += ((activePage == i+1) ? `<li class="page-item active"><span class="page-link">${activePage}</span></li>}` : `<li class="page-item"><span class="page-link" onclick="renderPaginator(${i+1})">${i+1}</span></li>`);
    }
    pager += (activePage < pageCount) ? `<li class="page-item page-item-control"><a class="page-link" onclick="renderPaginator(${activePage + 1});" aria-label="Next"><span class="icon" aria-hidden="true"></span></a></li>` : `<li class="page-item page-item-control disabled"><a class="page-link" onclick="renderPaginator(${activePage + 1})" aria-label="Next"><span class="icon" aria-hidden="true"></span></a></li>`;
    $paging.innerHTML = pager;
    $matchingCount.innerHTML = filteredProducts.length;
    var startItem = ((activePage*9)-8).toString();
    var endItem = (filteredProducts.length > (activePage*9)) ? (activePage*9).toString() : filteredProducts.length.toString();
    $showItems.innerHTML = startItem + "-" + endItem;
    renderGridProducts(activePage, filterSet);
}
/**
 * renders pagination for the product-list page
 *
 * @param {*} activePage current active pagination page
 */
function renderListPaginator(activePage) {
    const $paging = document.querySelector(".pagination");
    const $matchingCount = document.querySelector(".matching-count");
    const $showItems = document.querySelector(".shown-items");

    const filteredProducts = (filterSet && filterSet.size > 0) ? products.filter(p => p.style.some(r => filterSet.has(r))) : products;
    const pageCount = Math.ceil(filteredProducts.length / 3);
    var pager = (activePage <= 1) ? `<li class="page-item page-item-control disabled"><a class="page-link" onclick="renderListPaginator(${activePage - 1})" aria-label="Previous"><span class="icon" aria-hidden="true"></span></a></li>` : `<li class="page-item page-item-control"><a class="page-link" onclick="renderListPaginator(${activePage - 1})" aria-label="Previous"><span class="icon" aria-hidden="true"></span></a></li>`;
    for(var i = 0; i < pageCount; i++) {
        pager += ((activePage == i+1) ? `<li class="page-item active"><span class="page-link">${activePage}</span></li>}` : `<li class="page-item"><span class="page-link" onclick="renderListPaginator(${i+1})">${i+1}</span></li>`);
    }
    pager += (activePage < pageCount) ? `<li class="page-item page-item-control"><a class="page-link" onclick="renderListPaginator(${activePage + 1});" aria-label="Next"><span class="icon" aria-hidden="true"></span></a></li>` : `<li class="page-item page-item-control disabled"><a class="page-link" onclick="renderListPaginator(${activePage + 1})" aria-label="Next"><span class="icon" aria-hidden="true"></span></a></li>`;
    $paging.innerHTML = pager;
    $matchingCount.innerHTML = filteredProducts.length;
    var startItem = ((activePage*3)-2).toString();
    var endItem = (filteredProducts.length > (activePage*3)) ? (activePage*3).toString() : filteredProducts.length.toString();
    $showItems.innerHTML = startItem + "-" + endItem;
    renderListProducts(activePage, filterSet);
}
/**
 * renders popular products on product collection pages
 *
 */
function renderPopularItems() {
    const $popular = document.querySelector(".popular");
    const filteredPopular = products.filter(p => p.popular === true);
    $popular.innerHTML = filteredPopular.map((item) => `
                <div class="col-4 col-sm-6 col-md-12">
                    <!-- Product Minimal-->
                    <article class="product-minimal">
                    <div class="unit unit-spacing-sm flex-column flex-md-row align-items-center" style="box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.08);">
                        <div class="unit-left" style="margin-top: 8px;"><a class="product-minimal-figure" href="single-product-${item.id}.html"><img src="${item.image_small}" alt="" width="106" height="104" style="width:106px;height:104px;background-color:white;"></a></div>
                        <div class="unit-body">
                        <p class="product-minimal-title"><a href="single-product-${item.id}.html">${item.name}</a></p>
                        <p class="product-minimal-price">$${item.price_current}</p>
                        </div>
                    </div>
                    </article>
                </div>
    `).join("");
}
/**
 * adds a style filter to the product collection page
 *
 * @param {*} f - style
 */
function addFilter(f,type) {
    filterSet.add(f);
    (type === "list") ? renderListPaginator(1) : renderGridPaginator(1);
}
/**
 * removes all style filters on product collection pages
 *
 */
function clearFilter(type) {
    filterSet.clear();
    (type === "list") ? renderListPaginator(1) : renderGridPaginator(1);
}
/**
 * removes a single style filter on a product collection page
 *
 * @param {*} f - filter style to remove
 */
function removeFilter(f, type) {
    filterSet.delete(f);
    (type === "list") ? renderListPaginator(1) : renderGridPaginator(1);
}
/**
 * handles filter changing events from the list product html
 *
 * @param {*} e
 */
function handleFiltersChangedList(e) {
    if(e.target.checked) {
        addFilter(e.target.value, "list");
    } else {
        removeFilter(e.target.value, "list");
    }
}
/**
 * handles filter changing events from the grid product html
 *
 * @param {*} e
 */
function handleFiltersChangedGrid(e) {
    if(e.target.checked) {
        addFilter(e.target.value, "grid");
    } else {
        removeFilter(e.target.value, "grid");
    }
}
var filterSet = new Set();

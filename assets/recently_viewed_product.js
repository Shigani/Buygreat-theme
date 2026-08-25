const recentViewdProduct = document.querySelector(".recently_viewed_proudct");
const recentViewedProductHandle = recentViewdProduct.dataset.productHandle;
var LOCAL_STORAGE_RECENTVIEWPRODUCT_KEY = "shopify-recent-view";
var LOCAL_STORAGE_DELIMITER = ",";
var BUTTON_ACTIVE_CLASS = "active";

var selectors = {
  grid: "[grid-recentViewProduct]",
};

document.addEventListener("DOMContentLoaded", function () {
  var productHandle = recentViewedProductHandle || false;
  if (!productHandle)
    return console.error(
      "[recentViewPorduct] Missing `data-product-handle` attribute. Failed to update the recentViewPorduct."
    );
  updaterecentViewPorduct(productHandle);

  var Recentgrid = document.querySelector(selectors.grid) || false;
  if (Recentgrid) {
    recentViewsetupGrid(Recentgrid);
  }
});

var recentViewsetupGrid = function (Recentgrid) {
  var recentViewPorduct = getrecentViewPorduct();
  if (recentViewPorduct.length > 1) {
    recentViewdProduct.classList.remove("no-js-inline");
  }

  var requestsRecentViewed = recentViewPorduct
    .slice(0)
    .reverse()
    .filter(function (handle) {
      return handle && handle !== recentViewedProductHandle;
    })
    .map(function (handle) {
      var productTileTemplateUrl = "/products/" + handle + "?view=recent-view-card";
      return fetch(productTileTemplateUrl).then(function (res) {
        if(res.status == 200){
        	return res.text();
        }
      });
    });

  Promise.all(requestsRecentViewed).then(function (responses) {
    var recentViewPorductProductCards = responses.join("");
    Recentgrid.innerHTML = recentViewPorductProductCards;

    if (typeof theme.collectionSlider === "function") {
      theme.collectionSlider(recentViewdProduct);
    }
  });
};

var getrecentViewPorduct = function () {
  var recentViewPorduct =
    localStorage.getItem(LOCAL_STORAGE_RECENTVIEWPRODUCT_KEY) || false;
  if (recentViewPorduct) {
    return recentViewPorduct
      .split(LOCAL_STORAGE_DELIMITER)
      .filter(function (handle, index, handles) {
        return handle && handles.indexOf(handle) === index;
      });
  }
  return [];
};

var setrecentViewPorduct = function (array) {
  var recentViewPorduct = array.join(LOCAL_STORAGE_DELIMITER);
  if (array.length)
    localStorage.setItem(
      LOCAL_STORAGE_RECENTVIEWPRODUCT_KEY,
      recentViewPorduct
    );
  return recentViewPorduct;
};

var updaterecentViewPorduct = function (handle) {
  var recentViewPorduct = getrecentViewPorduct();
  var indexInrecentViewPorduct = recentViewPorduct.indexOf(handle);
  if (indexInrecentViewPorduct !== -1) {
    recentViewPorduct.splice(indexInrecentViewPorduct, 1);
  }
  recentViewPorduct.push(handle);
  return setrecentViewPorduct(recentViewPorduct);
};

var recentViewPorductContains = function (handle) {
  var recentViewPorduct = getrecentViewPorduct();
  return recentViewPorduct.indexOf(handle) !== -1;
};

var resetrecentViewPorduct = function () {
  return setrecentViewPorduct([]);
};


// URL for Restaurant data

export const res_url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3703106&lng=85.3336513&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

export const swiggy_assets = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

export const dist_url = (resId) => 
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3703106&lng=85.3336513&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
  
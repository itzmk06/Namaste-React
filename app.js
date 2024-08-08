import React from "react";
import ReactDom from "react-dom/client"
import 'remixicon/fonts/remixicon.css'

const Logo=()=>{
  return <div className="logo">
    <img className="logo" src="https://cdn-icons-png.flaticon.com/128/9836/9836978.png"></img>
    <h1 className="logo-head">Zesty </h1>
  </div>
};

const NavItem=()=>{
  return <div>
    <ul className="nav-item">
      <li>Home</li>
      <li>About us</li>
      <li>Cart</li>
      <li>Help</li>
      <li>Sign in</li>
    </ul>
  </div>
};

const Header=()=>{
  return <div className="header">
      <Logo/>
      <NavItem/>
  </div>
};

const Search=()=>{
  return <div className="search-bar">
    <div className="search1">
      <i className="ri-search-line s-item-1"></i>
      <input className="s-input" type="text" placeholder="Type a command or search"/>
    </div>
    <div className="search2">
      <i className="ri-windows-fill s-item-2"></i>
      <h5>+K</h5>
    </div>
  </div>
}

const ResCard=({resData})=>{
  const name=resData.info.name;
  const imgId=resData.info.cloudinaryImageId;
  const cost=resData.info.costForTwo;
  const cuisines=resData.info.cuisines.slice(0,3);
  const rating=resData.info.avgRating;
  const time=resData.info.sla.deliveryTime;
  const locality=resData.info.locality;
  return <div className="res-card">
    <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imgId}></img>
    <div className="res-card-content">
      <h3 className="res-title">{name}</h3>
        <li>{cost}</li>
      <div className="res-star">
        <i className="ri-star-fill"></i>
        <li>{rating}</li>
        <li>~ {time} min</li>
      </div>
        <li>{cuisines.join(", ")}</li>
        <li>{locality}</li>
    </div>
  </div>
}

const resData=  {
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      "layout": {
        "columns": 4
      },
      "id": "restaurant_grid_listing",
      "gridElements": {
        "infoWithStyle": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          "restaurants": [
            {
              "info": {
                "id": "393840",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Chikka Lakshmaiah Layout",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Chinese",
                  "Asian",
                  "Tibetan",
                  "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "61955",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 64,
                  "lastMileTravel": 5.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "60-65 mins",
                  "lastMileTravelString": "5.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-09 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹179"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "465844",
                "name": "Five Star Chicken",
                "cloudinaryImageId": "n0c55jdcvi83pun9vxjd",
                "locality": "Shantinagar",
                "areaName": "Wilson Garden",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Snacks",
                  "Fast Food",
                  "Street Food"
                ],
                "avgRating": 4.1,
                "parentId": "376",
                "avgRatingString": "4.1",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-08 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/five-star-chicken-shantinagar-wilson-garden-bangalore-465844",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "3241",
                "name": "Meghana Foods",
                "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
                "locality": "Residency Road",
                "areaName": "Residency Road",
                "costForTwo": "₹500 for two",
                "cuisines": [
                  "Biryani",
                  "Andhra",
                  "South Indian",
                  "Chinese",
                  "Seafood"
                ],
                "avgRating": 4.6,
                "parentId": "635",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 22,
                  "lastMileTravel": 4.2,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "4.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-08 23:59:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Biryani.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "10K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/meghana-foods-residency-road-bangalore-3241",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "464509",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_464509.jpg",
                "locality": "Frazer Town",
                "areaName": "Frazer Town",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental"
                ],
                "avgRating": 4.5,
                "parentId": "371281",
                "avgRatingString": "4.5",
                "totalRatingsString": "5K+",
                "sla": {
                  "deliveryTime": 31,
                  "lastMileTravel": 5.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "5.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-09 03:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹129"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "500+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-frazer-town-bangalore-464509",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "788304",
                "name": "Wow! China",
                "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
                "locality": "Near Shanti Nagar Bus Stop",
                "areaName": "Shantinagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Tibetan",
                  "Chinese",
                  "Asian",
                  "Snacks",
                  "Continental",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 3.9,
                "parentId": "226836",
                "avgRatingString": "3.9",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 24,
                  "lastMileTravel": 2.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "2.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-08 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-china-near-shanti-nagar-bus-stop-shantinagar-bangalore-788304",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "770772",
                "name": "Olio - The Wood Fired Pizzeria",
                "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
                "locality": "Ali Askar Road",
                "areaName": "Cunningham Road",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Pizzas",
                  "Pastas",
                  "Fast Food",
                  "Snacks",
                  "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "11633",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 34,
                  "lastMileTravel": 4.2,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "4.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-09 05:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                    }
                  ],
                  "textExtendedBadges": [
                    {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Gourmet",
                            "imageId": "newg.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "",
                            "fontColor": "#7E808C",
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available"
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹249",
                  "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/olio-the-wood-fired-pizzeria-ali-askar-road-cunningham-road-bangalore-770772",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "352791",
                "name": "Grameen Kulfi",
                "cloudinaryImageId": "gjcslopkyvnsc1gjjguq",
                "locality": "8th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹120 for two",
                "cuisines": [
                  "Ice Cream",
                  "Desserts"
                ],
                "avgRating": 4.8,
                "veg": true,
                "parentId": "12175",
                "avgRatingString": "4.8",
                "totalRatingsString": "500+",
                "sla": {
                  "deliveryTime": 34,
                  "lastMileTravel": 4.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "4.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-08 23:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "60% OFF",
                  "subHeader": "UPTO ₹120"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "--"
                  }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/grameen-kulfi-8th-block-koramangala-bangalore-352791",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "275",
                "name": "Mani's Dum Biryani",
                "cloudinaryImageId": "xlr4ngepa5gxkugrsdbs",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Andhra",
                  "Biryani"
                ],
                "avgRating": 4.6,
                "parentId": "623",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 38,
                  "lastMileTravel": 5.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "5.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-08-09 00:45:00",
                  "opened": true
                },
                "badges": {
                  "textExtendedBadges": [
                    {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "",
                            "fontColor": "#7E808C",
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available"
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹149"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                },
                "externalRatings": {
                  "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "1K+"
                  },
                  "source": "GOOGLE",
                  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
              },
              "analytics": {
                "context": "seo-data-b8cccb8d-6e05-4a09-a490-15c8a82ea532"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-koramangala-bangalore-275",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }
          ],
          "theme": "SeoRestaurantListingGridWidget"
        }
      }
    }
  }
};
const restaurantData=resData.card.card.gridElements.infoWithStyle.restaurants;


const ResContainer=()=>{
  return <div className="res-container">
    <h1 className="res-head-1">Restaurant with online food delivery in Mysore</h1>
    {restaurantData.map((res)=>{
      return <ResCard resData={res} key={res.id}/>
    })};
  </div>
}


const Body=()=>{
  return <div className="body">
      <Search/>
      <ResContainer/>
  </div>
}




const AppLayout=()=>{
  return <>
    <Header/>
    <Body/>
  </>
};

const App=()=>{
  return <AppLayout/>
};

const root=ReactDom.createRoot(document.querySelector("#main"));
root.render(<App/>);

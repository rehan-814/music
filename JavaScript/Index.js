// Home Underline Effect Logic 
// Nav bar Anchor Tags Varaibles 
const nav_home_anchor = document.getElementById('Home_link');
const nav_recent_anchor = document.getElementById('recent_music_link');
const nav_singers_anchor = document.getElementById('singers_link');
const nav_contact_us_anchor = document.getElementById('contact_us');
const nav_premium_anchor = document.getElementById('premium');
// Arrays Used To Remove Others Underline 
const Remove_for_Home = [nav_recent_anchor, nav_singers_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_recent = [nav_home_anchor, nav_singers_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_singers = [nav_home_anchor, nav_recent_anchor, nav_contact_us_anchor, nav_premium_anchor];
const Remove_for_contact = [nav_home_anchor, nav_recent_anchor, nav_singers_anchor, nav_premium_anchor];
const Remove_for_premium = [nav_home_anchor, nav_recent_anchor, nav_singers_anchor, nav_contact_us_anchor];
// Default Fucntion Starts Here
nav_home_anchor.classList.add('Nav_home_underline');
for (element of Remove_for_Home) {
    element.classList.remove('Nav_home_underline');
    element.classList.add('Nav_anchors_hover_bg');
}
// Default Function Ends Here 
Home_anchor_underline = () => {
    for (element of Remove_for_Home) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_home_anchor.classList.add('Nav_home_underline');
    nav_home_anchor.classList.remove('Nav_anchors_hover_bg');
}
Recent_anchor_underline = () => {
    for (element of Remove_for_recent) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_recent_anchor.classList.add('Nav_home_underline');
    nav_recent_anchor.classList.remove('Nav_anchors_hover_bg');
}
Singers_anchor_underline = () => {
    for (element of Remove_for_singers) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_singers_anchor.classList.add('Nav_home_underline');
    nav_singers_anchor.classList.remove('Nav_anchors_hover_bg');
}
Contact_anchor_underline = () => {
    for (element of Remove_for_contact) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_contact_us_anchor.classList.add('Nav_home_underline');
    nav_contact_us_anchor.classList.remove('Nav_anchors_hover_bg');
}
Premium_anchor_underline = () => {
    for (element of Remove_for_premium) {
        element.classList.remove('Nav_home_underline');
        element.classList.add('Nav_anchors_hover_bg');
    }
    nav_premium_anchor.classList.add('Nav_home_underline');
    nav_premium_anchor.classList.remove('Nav_anchors_hover_bg');
}
// Ends 


// Recent Underline Effect Logic 
recent_anchor_underline = () => {

    recent_link.classList.add('Recent_hover')
}
recent_anchor_underline_remove = () => {
    let recent_link = document.getElementById('recent_music_link');
    recent_link.classList.remove('Recent_hover')

}
// Ends 


// singers Underline Effect Logic 
singers_anchor_underline = () => {
    let singers_link = document.getElementById('singers_link');
    singers_link.classList.add('singers_hover')
}
singers_anchor_underline_remove = () => {
    let singers_link = document.getElementById('singers_link');
    singers_link.classList.remove('singers_hover')

}
// Ends 


// Contact Us  Underline Effect Logic 
contact_us_anchor_underline = () => {
    let contact_us = document.getElementById('contact_us');
    contact_us.classList.add('contact_us_hover')
}
contact_us_anchor_underline_remove = () => {
    let contact_us_hover_link = document.getElementById('contact_us');
    contact_us_hover_link.classList.remove('contact_us_hover')

}
// Ends 
// Premium Music Underline Effect 

premium_anchor_underline = () => {
    let contact_us = document.getElementById('premium');
    contact_us.classList.add('premium_hover')
}
premium_underline_remove = () => {
    let contact_us_hover_link = document.getElementById('premium');
    contact_us_hover_link.classList.remove('premium_hover');

}

// Ends 




// Click to hide Search bar Click To Show again 

Hide_search = () => {
    let Searchbar = document.getElementById('searchbar')
    if (Searchbar.style.opacity != '1') {
        Searchbar.style.opacity = '1';
        Searchbar.style.transition = '.1s ease';
        Searchbar.style.transitionProperty = 'opacity';
    }

    else {
        Searchbar.style.opacity = '0';
        Searchbar.style.transition = '.1s ease';
        Searchbar.style.transitionProperty = 'opacity';

    }

}

SearchToolTip = () => {

    let SearchIcon = document.getElementById('SearchButton');
    SearchIcon.classList.add('Search_tool_tip')

}
RemoveSearchToolTip = () => {
    let SearchIcon = document.getElementById('SearchButton');
    SearchIcon.classList.remove('Search_tool_tip');
}


/*===================================================================================================
                        To Show More Main Categories Categories | "See More" Button Logic Here
===================================================================================================*/
//    Making Condition
document.getElementById("See_more_cate").innerHTML = "See More";

Show_more_categories = () => {
    let Show_more_btn = document.getElementById("See_more_cate");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    let Seeless_arrow = document.getElementById("See_less_arrow");
    let cate1 = document.getElementById("Ex_Category1");
    let cate2 = document.getElementById("Ex_Category2");
    let cate3 = document.getElementById("Ex_Category3");
    let cate4 = document.getElementById("Ex_Category4");
    let cate5 = document.getElementById("Ex_Category5");
    let cate6 = document.getElementById("Ex_Category6");
    let Six_cate_array = [cate1, cate2, cate3, cate4, cate5, cate6];

    if (Show_more_btn.innerHTML == "See More") {
        for (element of Six_cate_array) {
            element.style.display = "flex";
            element.style.opacity = "1";
            Side_bg.style.height = "1280px";
            Show_more_btn.innerHTML = "See Less";
            Seeless_arrow.style.transform = "rotate(270deg)";
            Seeless_arrow.style.marginTop = "7px";
            Seeless_arrow.style.marginLeft = "7px";
        }
    } else {
        for (element of Six_cate_array) {
            element.style.display = "none";
            element.style.opacity = "0";
            Side_bg.style.height = "1000px";
            Show_more_btn.innerHTML = "See More";
            Seeless_arrow.style.transform = "rotate(90deg)";
            Seeless_arrow.style.marginTop = "0px";
        }
    }
}

// Hiding The Side Bar
document.getElementById("Catagori_Details_box").style.left = "-101%";
// Ends
// Same Things Every Where 
const All_categories_in_one_box = document.getElementById('Cate_gories_all_container');
const See_more_btn = document.getElementById("See_more_cate");
const Side_bg = document.getElementById("Side_bar_back_ground");
All_categories_in_one_box.style.transition = 'opacity .4s ease';
/*=========================================================
 Hide Catagori Details By Clicking On the Arrow Button 
=========================================================*/
Hide_cata_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    cata_box.style.transition = ".3s ease";
    cata_box.style.left = "-101%";
    Side_nav_btn.style.display = "flex";
    top_part.style.transition = '.2s ease'
    top_part.style.opacity = '1';
    top_part.style.visibility = 'visible';

    All_categories_in_one_box.classList.remove('Hide_All_categories_on_details');
    setTimeout(() => {
        cata_cont.style.zIndex = "-1";
    }, 700);
    if (See_more_btn.innerHTML == 'See Less') {
        Side_bg.style.height = '1280px';
    }
    else if (See_more_btn.innerHTML == 'See More') {
        Side_bg.style.height = '1000px';
    }
};

// Variable Of Options
let optionOne = document.getElementById("cat_option1");
let optiontwo = document.getElementById("cat_option2");
let optionthree = document.getElementById("cat_option3");
let optionfour = document.getElementById("cat_option4");
let optionfive = document.getElementById("cat_option5");
let optionsix = document.getElementById("cat_option6");
let optionseven = document.getElementById("cat_option7");
let optioneight = document.getElementById("cat_option8");
let optionnine = document.getElementById("cat_option9");
let optionten = document.getElementById("cat_option10");
/*================================================================================
                            Show Computer Category More Options
==================================================================================*/

const Categories_common_code = () => {
    Side_bg.style.height = '900px';
    setTimeout(() => {
        All_categories_in_one_box.classList.add('Hide_All_categories_on_details');
    }, 0);
}
show_computers_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Processors"; // 1
    optiontwo.innerHTML = "Hard Drives"; // 2
    optionthree.innerHTML = "Casings"; // 3
    optionfour.innerHTML = "Keyboard & Mouse"; // 4
    optionfive.innerHTML = "Leds & Lcds"; //5
    optionsix.innerHTML = "Power Cables"; // 6
    optionseven.innerHTML = "Speakers"; // 7
    optioneight.innerHTML = "Headphones"; // 8
    optionnine.innerHTML = "Revolving Chairs"; // 9
    optionten.innerHTML = "Graphic Cards"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "1";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};

/*================================================================================
                            Show Grocery Category More Options
==================================================================================*/
show_grocery_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Soaps & Washing"; // 1
    optiontwo.innerHTML = "Vegetables"; // 2
    optionthree.innerHTML = "Cooking Oils"; // 3
    optionfour.innerHTML = "Spoons & Dishes"; // 4
    optionfive.innerHTML = "Jugs & Glasses"; //5
    optionsix.innerHTML = "Water Bottles"; // 6
    optionseven.innerHTML = "Juicer & Blender"; // 7
    optioneight.innerHTML = "Pots"; // 8
    optionnine.innerHTML = "Meat"; // 9
    optionten.innerHTML = "Rice & Beans"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};

/*================================================================================
                            Show Animals Category More Options
==================================================================================*/
show_animal_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Hens"; // 1
    optiontwo.innerHTML = "Bulls"; // 2
    optionthree.innerHTML = "Cows"; // 3
    optionfour.innerHTML = "Gots"; // 4
    optionfive.innerHTML = "Sheeps"; //5
    optionsix.innerHTML = "Camels"; // 6
    optionseven.innerHTML = "Birds"; // 7
    optioneight.innerHTML = "Fishes"; // 8
    optionnine.innerHTML = "Snakes"; // 9
    optionten.innerHTML = "Dogs & Cats"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Furniture Category More Options
==================================================================================*/
show_furniture_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Dining Table"; // 1
    optiontwo.innerHTML = "Wardrobe"; // 2
    optionthree.innerHTML = "Bed"; // 3
    optionfour.innerHTML = "Chairs"; // 4
    optionfive.innerHTML = "Study Table"; //5
    optionsix.innerHTML = "Tea Trolly"; // 6
    optionseven.innerHTML = "Sofa"; // 7
    optioneight.innerHTML = "Dressing Table"; // 8
    optionnine.innerHTML = "Cabinets"; // 9
    optionten.innerHTML = "Shoecase"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Software Category More Options
==================================================================================*/
show_Softwares_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Adobe Illustrator"; // 1
    optiontwo.innerHTML = "Adobe Photoshop"; // 2
    optionthree.innerHTML = "Premier Pro"; // 3
    optionfour.innerHTML = "Canva"; // 4
    optionfive.innerHTML = "After effects"; //5
    optionsix.innerHTML = "Microsoft Office"; // 6
    optionseven.innerHTML = "Wondershare Filmora"; // 7
    optioneight.innerHTML = "Android Studio"; // 8
    optionnine.innerHTML = "Obs Studio"; // 9
    optionten.innerHTML = "Lightroom"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '1'
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';;

        Categories_common_code();
}};
/*================================================================================
                            Show Toys Category More Options
==================================================================================*/
show_Toys_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Helicopter"; // 1
    optiontwo.innerHTML = "Cars"; // 2
    optionthree.innerHTML = "Alphabets Keyboard"; // 3
    optionfour.innerHTML = "Trains"; // 4
    optionfive.innerHTML = "Talking Cat"; //5
    optionsix.innerHTML = "Cooking Kit"; // 6
    optionseven.innerHTML = "Dolls"; // 7
    optioneight.innerHTML = "Guns & Military"; // 8
    optionnine.innerHTML = "Animals & Forest"; // 9
    optionten.innerHTML = "Painting & Sketching"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Home Appliances Category More Options
==================================================================================*/
show_Home_appliances_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    // Options Values For Category Details
    optionOne.innerHTML = "Washing Machines"; // 1
    optiontwo.innerHTML = "Microwave Ovens"; // 2
    optionthree.innerHTML = "Refregerator"; // 3
    optionfour.innerHTML = "Fridge"; // 4
    optionfive.innerHTML = "Juicer"; //5
    optionsix.innerHTML = "Stove"; // 6
    optionseven.innerHTML = "Led"; // 7
    optioneight.innerHTML = "Room Cooler"; // 8
    optionnine.innerHTML = "Water Dispensor"; // 9
    optionten.innerHTML = "Vacuum Cleaner"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Home Decoration Category More Options
==================================================================================*/
show_Home_Decoration_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Paintings"; // 1
    optiontwo.innerHTML = "Lamps & Lights"; // 2
    optionthree.innerHTML = "Wallpapers"; // 3
    optionfour.innerHTML = "Plants & Flowers"; // 4
    optionfive.innerHTML = "God Names & Ayat"; //5
    optionsix.innerHTML = "Super Heros & Toys"; // 6
    optionseven.innerHTML = "Swords"; // 7
    optioneight.innerHTML = "Birthday"; // 8
    optionnine.innerHTML = "Wedding"; // 9
    optionten.innerHTML = "Mirrors"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Gents Garments Category More Options
==================================================================================*/
show_Gents_Garments_catagori_details = () => {

    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Shirwani"; // 4
    optionfive.innerHTML = "Kurta & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Coats"; // 7
    optioneight.innerHTML = "Belt & Tie"; // 8
    optionnine.innerHTML = "Vas Coat"; // 9
    optionten.innerHTML = "3 Piece Suit"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Ladies Garments Category More Options
==================================================================================*/
show_Ladies_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Lehnga"; // 4
    optionfive.innerHTML = "Kurti & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Maxi"; // 7
    optioneight.innerHTML = "Frock"; // 8
    optionnine.innerHTML = "Shalls"; // 9
    optionten.innerHTML = "Burkha"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};
/*================================================================================
                            Show Property Category More Options
==================================================================================*/
show_Property_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "5 Marla Houses"; // 1
    optiontwo.innerHTML = "10 Marla Houses"; // 2
    optionthree.innerHTML = "Shops"; // 3
    optionfour.innerHTML = "Medical Stores"; // 4
    optionfive.innerHTML = "Houses For Rent"; //5
    optionsix.innerHTML = "Plots"; // 6
    optionseven.innerHTML = "Shops For Rent"; // 7
    optioneight.innerHTML = "Shops In Malls"; // 8
    optionnine.innerHTML = "Hotels"; // 9
    optionten.innerHTML = "Restaurent For Sale"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';

        Categories_common_code();
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");

    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".3s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
        top_part.style.opacity = '0'
        top_part.style.visibility = 'hidden';
        Categories_common_code();
    }
};

/*================================================================================
                Show & Hide The Side Menu By clicking Three Lines Side button
==================================================================================*/
document.getElementById("Side_menu_background").style.left = "-401vw";
ShowHide = () => {
    let Side_menu = document.getElementById("Side_menu_background");
    let cross_nav_btn = document.getElementById("Cross_Nav_btn");
    let Side_bar_overlay = document.getElementById("Side_bar_overlay");
    let no_Scroll_body = document.getElementById('body');
    // Three Details Box Variable 
    let Details_container = document.getElementById("Dots_Details_container");
    if (Side_menu.style.left == "-401vw") {
        setTimeout(() => {
            Side_menu.style.left = "0%";
        }, 1);
        Side_menu.style.display = "block";
        Side_menu.style.transition = ".4s ease-in-out";
        cross_nav_btn.style.opacity = "1";

        Side_bar_overlay.classList.add('Side_menu_active_overlay');
        no_Scroll_body.style.overflowY = 'hidden';
    } else {
        setTimeout(() => {
         
            Side_menu.style.display = "none";
        }, 400);
        Side_menu.style.transition = ".6s ease-in-out";
        Side_menu.style.left = "-401vw";
       
        // Close The Three Dots Details Box (if it is opened) when closing the side menu 
        Details_container.style.transition = '.4s ease-in-out'
        Details_container.style.opacity = '0';
        Details_container.style.transform = 'scale(.7)';
        Side_bar_overlay.classList.remove('Side_menu_active_overlay');
        no_Scroll_body.style.overflowY = 'visible';
        setTimeout(() => {
            Details_container.style.display = 'none';
            Details_container.style.top = '20px';
        }, 200);
    }
};



// Three Dots Functionality here 
document.getElementById("Dots_Details_container").style.opacity = '0'
Show_dots_details = () => {
    let Details_container = document.getElementById("Dots_Details_container");

    if (Details_container.style.opacity == '0') {
        Details_container.style.display = 'flex';
        Details_container.style.top = '70px';
        setTimeout(() => {
            Details_container.style.transition = '.4s ease-in-out'
            Details_container.style.opacity = '1';
            Details_container.style.transform = 'scale(1.2)';
        }, 100);
    }
    else {
        Details_container.style.transition = '.4s ease-in-out'
        Details_container.style.opacity = '0';
        Details_container.style.transform = 'scale(.3)';
        setTimeout(() => {
            Details_container.style.top = '20px';
            Details_container.style.display = 'none';
        }, 200);
    }
}

// ends 
// Audio Player JavaScript 
// Variables 
let Song_name = document.getElementsByClassName('Song_name')[0];
let slider = document.getElementById('Song_input_range');
let pause_btn = document.getElementById('Pause_btn');
let play_btn = document.getElementById('Play_btn');
let play_pause_div = document.getElementById('play_pause_div');
let Song_Total_duration = document.getElementById('Total_duration');
let Song_Current_duration = document.getElementById('Current_duration');
let song_hover_time = document.getElementById('slider_hover_time');
// Volume
let current_volume = document.getElementById('current_volume');
let Volume_input = document.getElementById('volume_input');
// Creating Audio Element With the help of JavaScript 
let Nasheed = new Audio();
let Liyakun = new Audio();
let Dewana_song = new Audio();
let Pasoori_song = new Audio();
let Salah_uddin = new Audio();
let Toh_phir = new Audio();
let Santra = new Audio();
let Wal_khattu = new Audio();
let Cvrtoon = new Audio();
let letmedown = new Audio();
// Giving Source to them
Nasheed.src = 'Songs/Nasheed_love-and-life.mp3';
Liyakun.src = 'Songs/Liyakun.mp3';
Dewana_song.src = 'Songs/Dewana.mp3';
Pasoori_song.src = 'Songs/Pasoori.mp3';
Salah_uddin.src = 'Songs/Salah-ud-in.mp3';
Toh_phir.src = 'Songs/Toh_phir.mp3';
Santra.src = 'Songs/Santra.mp3';
Wal_khattu.src = 'Songs/wal_khattu.mp3';
Cvrtoon.src = 'Songs/CVRTOON.mp3';
letmedown.src = './Songs/letmedown.mp3';
// Creating Array of these songs to play in sequence 
const All_songs = [Nasheed, Liyakun, Dewana_song, Pasoori_song, Salah_uddin, Toh_phir, Santra, Wal_khattu,Cvrtoon,letmedown];
const total_duration = ['2<b>:</b>23','3<b>:</b>28','4<b>:</b>14', '3<b>:</b>46', '3<b>:</b>54', '4<b>:</b>30', '0<b>:</b>36', '5<b>:</b>12', '4<b>:</b>18','3<b>:</b>01']
const Song_names = ['Nasheed - Love and life','Liyakun - shamay','Dewana kr rha hai','Pasoori','Salah-ud-din Ayyubi sound','Toh phir aao mugh ko stao','Cvrtoon Fired','Wal khattu husaini','CVRTOON - İzmir Marşi','Let me down slowly'];
// Next and Previous Song Logic here 
let i = 0;
Next_song = () => {
    i++;
    if(i==All_songs.length){
       i=i-1;
    }
    All_songs[i].play();// Playin the next song by increasing i's value 
    slider.max = All_songs[i].duration;// Max value of slider will be max seconds of song
    All_songs[i].currentTime = 0;//starting from begining
    Song_Total_duration.innerHTML = total_duration[i];// Total time will be according to song index
    Song_name.innerHTML= Song_names[i];// Song will be according to song index
    Volume_change();
    --i;
    All_songs[i].pause();// Stoping the previous song be decreasing i's value
    All_songs[i].currentTime = 0;//starting from begining
    slider.value = 0;//reset the slider value
    i++;
    let pre = i;
    Previous_song = () => {
        pre--;
        All_songs[pre].play();//Playing the previous Song
        slider.max = All_songs[pre].duration;// Max value of slider will be max seconds of song
        All_songs[pre].currentTime = 0;//starting from begining
        Song_Total_duration.innerHTML = total_duration[pre];
        Song_name.innerHTML= Song_names[pre];
        Volume_change();
        ++pre;
        All_songs[pre].pause();// Stoping the song
        All_songs[pre].currentTime = 0;//starting from begining
        slider.value = 0;//reset the slider value
        pre--;
        i = pre;// i will equal to the previous song otherwise it will skip one song
        pause_btn.style.display = 'flex';
        play_btn.style.display = 'none';
    }
    pause_btn.style.display = 'flex';
    play_btn.style.display = 'none';
    Run_current_time();
    Song_time_changing();
}
// Ends 
// This Function will change song seconds according to slider's value 
Song_time_changing = () => {
    for (element of All_songs) {
        element.currentTime = slider.value;
    }
    Run_current_time();
    Volume_change();
}
// Ends

// Song play/pause Function/Logic
pause_btn.style.display = 'none';//Making Condition true 
Play_Pause_song = () => {
    if (pause_btn.style.display == 'none') {  //if Song is Stoped
        pause_btn.style.display = 'flex';
        play_btn.style.display = 'none';
        All_songs[i].play();
        Run_current_time();
        Volume_change();
    }
    else {   //if Song is Playing
        pause_btn.style.display = 'none';
        play_btn.style.display = 'flex';
        All_songs[i].pause();
    }
}
// Ends 

// This function will Move webkit-slider-thumb when song is playing according 
keep_runing_thumb = () => {//to the songs current time
    if (pause_btn.style.display == 'flex') {
        slider.value++;
    }
    setInterval(() => {
        if (pause_btn.style.display == 'flex') {
            slider.value++;
        }
    }, 1000)
}
keep_runing_thumb();
// Ends 
let AutoPlay = false;// Declaring AutoPlay Condition
let Repeat_button = document.getElementsByClassName('Repeat_button_div')[0];
// AutoPlay function 
Repeat_button.addEventListener('click', ChangeAutoPlay = ()=>{
    if(AutoPlay==true){
        AutoPlay=false;
        Repeat_button.style.backgroundColor = 'transparent';
    }
    else if(AutoPlay==false){
        AutoPlay=true;
        Repeat_button.style.backgroundColor = 'rgba(0,0,0,.2)';
    }
});
// Repeat Button hover effect 
Repeat_button.addEventListener('mouseover',()=>{
    if(AutoPlay==false){
        Repeat_button.style.backgroundColor='rgba(5, 5, 5, 0.335)';
    }
});
Repeat_button.addEventListener('mouseout',()=>{
    if(AutoPlay==false){
    Repeat_button.style.backgroundColor='transparent';
    }
});
// This Function will show current time of song in minutes and seconds
Run_current_time = () => {
    if(pause_btn.style.display=='flex'){// Cheack if song is playing
        setInterval(() => {
          
            let current_minutes = Math.floor(All_songs[i].currentTime / 60);
            let current_seconds = Math.floor(All_songs[i].currentTime % 60);
            let current_time = current_minutes+'<b>:</b>'+current_seconds;
            if(current_seconds<10){// show a zero before seconds if less than Ten 
                current_time = current_minutes+"<b>:</b>0"+current_seconds;
                Song_Current_duration.innerHTML=current_time;
            }
            Song_Current_duration.innerHTML=current_time;// if seconds are greater than ten than this will execute
          
            if(AutoPlay==false){
                Reset_the_song();
            }
            if(AutoPlay==true){
                Autoplay_the_song();
            }
        }, 1);
}
};

// This Function Will reset the song if it is played 
Reset_the_song =()=>{
    if(All_songs[i].currentTime==All_songs[i].duration){
        play_btn.style.display='flex';
        pause_btn.style.display='none';
        All_songs[i].currentTime=0;
        All_songs[i].pause();
        slider.value=0;
    }
}
Autoplay_the_song =()=>{
    if(All_songs[i].currentTime==All_songs[i].duration){
        All_songs[i].currentTime=0;
        All_songs[i].play();
        slider.value=0;
    }
}

        // Tool Tips of playing buttons 
Play_tool_tip = () =>{
    if(pause_btn.style.display=='none'){
        play_pause_div.classList.add('Play_tool_tip');
        play_pause_div.classList.remove('Pause_tool_tip');
    }
    else{
        play_pause_div.classList.remove('Play_tool_tip');
        play_pause_div.classList.add('Pause_tool_tip');
    }
}
Remove_Play_tool_tip = () =>{
    if(pause_btn.style.display=='none'){
        play_pause_div.classList.remove('Play_tool_tip');
    }
    else{
        play_pause_div.classList.remove('Play_tool_tip');
        play_pause_div.classList.remove('Pause_tool_tip');
    }
}
play_pause_div.addEventListener('mouseover',Play_tool_tip);// Add tool tip
play_pause_div.addEventListener('mouseout',Remove_Play_tool_tip);//Remove tool tip

            // Volume Button 

Volume_input.addEventListener('input',()=>{
        let vol_current = Volume_input.value/1.18/10-100+"%"
        current_volume.style.left=vol_current;
});
// Controlling Volume from the input tag 
Volume_input.addEventListener('change',Volume_change = ()=>{
    All_songs[i].volume=Volume_input.value/1000;
});
Volume_input.addEventListener('mousemove',Volume_change = ()=>{
    All_songs[i].volume=Volume_input.value/1000;
});
Volume_change();
// Hide Navigation Bar when srolling down 
let hide_after_scroll = 0;
window.addEventListener('scroll',()=>{
    let Navigation_cont = document.getElementsByClassName('nav_container')[0];
    let scrolling_window = window.pageYOffset;
    if(scrolling_window<hide_after_scroll){
        Navigation_cont.style.top='0px';
        Navigation_cont.style.transition='top .3s ease';
        
    }else{
        Navigation_cont.style.transition='top .3s ease';
        Navigation_cont.style.top='-80px';
    }
    hide_after_scroll=scrolling_window;
});

// when click on this button 
let mini_view_btn = document.getElementById('mini_view');
// These elements will be hide 
let audio_vol_sect = document.getElementsByClassName('Audio_player_volume_Section')[0];
let artist_div = document.getElementsByClassName('Audio_player_artist_div')[0];
let Song_img = document.getElementsByClassName('Audio_player_song_icon_div')[0];
let Shuffle_button = document.getElementsByClassName('shuffle_button_div')[0];
let song_duration_sect = document.getElementsByClassName('Song_Duration_section')[0];
let Playing_sect = document.getElementsByClassName('Audio_player_playing_section')[0];
let Song_name_div = document.getElementsByClassName('song_plus_name')[0];
let hide_in_mini = [audio_vol_sect,artist_div,Song_img,Repeat_button,Shuffle_button,song_duration_sect];
// changing css 
let audio_box = document.getElementsByClassName('Audio_player_box')[0];

let hide_audio_box_btn = document.getElementById('hide_sm_audio');
// Change audio box to small 
mini_view_btn.addEventListener('click',()=>{
        for (element of hide_in_mini){
            element.style.display='none';
       }
       Song_name_div.style.width='100%';
       hide_audio_box_btn.style.display='flex';
       Playing_sect.width='100%';
       audio_box.style.borderRadius='5px';
       audio_box.style.flexDirection='column';
       audio_cont.classList.add('Audio_player_cont_small');
});
// Change audio box to Big 
Song_name_div.addEventListener('click',()=>{
        for (element of hide_in_mini){
            element.style.display='';
       }
       hide_audio_box_btn.style.display='none';
       Playing_sect.width='570px';
       audio_box.style.flexDirection='row';
       audio_box.style.borderRadius='0px';
       audio_cont.classList.remove('Audio_player_cont_small');
});
// Ends 
// Hide Small Audio Box with arrow button
let small_audio_box_is_hide = false;
hide_audio_box_btn.addEventListener('click',()=>{
    audio_cont.style.transition=' right .3s ease';
    if(small_audio_box_is_hide==false){
        audio_cont.style.right="-290px";
        small_audio_box_is_hide = true;
        hide_audio_box_btn.style.transform="rotate(180deg)";
    }
    else{
        audio_cont.style.right="0px";
        small_audio_box_is_hide = false;
        hide_audio_box_btn.style.transform="rotate(0deg)";
    }
    
});
// Initially Audio container will be hidden when we click on listen button then it will show
let audio_cont = document.getElementsByClassName('Audio_Player_container')[0];
audio_cont.style.display='none';
audio_cont.style.opacity='0';
// Show Audio Container with Listen Button 
let listen_now_btn = document.getElementById('listen_now_btn');
listen_now_btn.addEventListener('click',()=>{
    audio_cont.style.transition='opacity .3s ease';
    audio_cont.style.opacity='1';
   setTimeout(() => {
    audio_cont.style.display='flex';
    }, 1);
});
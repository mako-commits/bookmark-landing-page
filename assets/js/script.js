/*==================== TABS ====================*/

const tabItems = document.querySelectorAll('.tabs--item');
const tabContentItems = document.querySelectorAll('.tab--content');


//selct tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border')

    //grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}__content`);
    //add show class
    tabContentItem.classList.add('show');
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));



// email
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

// function validate() {
//     const $result = $("#result");
//     const email = $("#email").val();
//     $result.text("");

//     if (validateEmail(email)) {
//         $result.text("Thanks! for contacting us");
//         $result.css("color", "green");
//     } else {
//         $result.text("Whoops,make sure it's an email");
//         $result.css("color", "red");
//     }
//     return false;
// }

// $("#validate").on("click", validate);
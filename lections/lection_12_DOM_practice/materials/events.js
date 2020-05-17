/*
    Тезисы:
        xx-yy-zz - Popup practice + Bubbling, Capturing 
        xx-yy-zz - Image full view practice
        xx-yy-zz - Array methods
        xx-yy-zz - OOP intro

*/

/*

    Popup - элемент по середине экрана, который всплывает поверх всей страницы. Есть кнопки - Применить, Отменить, Закрыть popup.

    Image full - Галлерея при нажатии на картинку - открывается на весь экран. С кнопками переключения на след и пред. картинку.

*/

//  Popup
var popupControl = {
    show() {
        document.querySelector('.popup-bg').classList.add('show');
    },
    // closeAction() {
    //     document.querySelector('.popup-bg').classList.remove('show');
    // },
    close(event) {
        // ...
        var closingElems = document.querySelectorAll('.popup-bg, .close-btn');
        for(var i = 0; i < closingElems.length; i++) {
            if (event.target == closingElems[i]){
                event.stopPropagation();
                document.querySelector('.popup-bg').classList.remove('show');
            }
        }
    },
    confirm(event) {
        event.stopPropagation(); 
        document.querySelector('.popup-bg').classList.remove('show');
    },
    cancel(event) {
        event.stopPropagation(); 
        document.querySelector('.popup-bg').classList.remove('show');
    } 
};

// Gallery

var gallery = {
    currentElement: null,
    openFullView(source) {
        this.openAction();
        document.querySelector('.full-image').src = source;
    },
    openAction() {
        this.getTarget().classList.add('open');
    },
    closeAction(){
        this.getTarget().classList.remove('open');
    },
    getTarget(){
        return document.querySelector('.full-view');
    },
    prev() {
        if (!this.currentElement.previousElementSibling) {
            return;
        }
        var src = this.currentElement.previousElementSibling.querySelector('img').src;
        this.openFullView(src);
        gallery.setCurrentElement(this.currentElement.previousElementSibling);
    },
    next(){
        if (!this.currentElement.nextElementSibling) {
            return;
        }
        var src = this.currentElement.nextElementSibling.querySelector('img').src;
        this.openFullView(src);
        gallery.setCurrentElement(this.currentElement.nextElementSibling);
    },
    setCurrentElement(elem){    
        this.currentElement = elem;
    }
}

window.onload = function () {
    // Popup
    document.querySelector('.action').addEventListener('click', popupControl.show);
    document.querySelector('.close-btn').addEventListener('click', popupControl.close);
    document.querySelector('.popup-bg').addEventListener('click', popupControl.close);
    document.querySelector('.popup-confirm').addEventListener('click', popupControl.confirm);
    document.querySelector('.popup-cancel').addEventListener('click', popupControl.cancel);



    // Gallery
    var galleryItems = document.querySelectorAll('.gallery .gallery-item');
    for(var i = 0; i < galleryItems.length; i++){
        galleryItems[i].addEventListener('click', function(){
            gallery.openFullView(this.querySelector('img').src);
            gallery.setCurrentElement(this);
        })
    }

    document.querySelector('.close-full').addEventListener('click', function(){
        gallery.closeAction();
    });

    document.querySelector('.full-view').addEventListener('click', function(event){
        if(event.target != this) {
            return;
        }
        gallery.closeAction();
    });

    document.querySelector('.arrow-left').addEventListener('click', function(event){
        gallery.prev();
    })

    document.querySelector('.arrow-right').addEventListener('click', function(event){
        gallery.next();
    })
}

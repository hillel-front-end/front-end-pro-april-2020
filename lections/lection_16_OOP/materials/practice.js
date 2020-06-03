class Elem {
    constructor(selector) {
        this.elem = document.querySelector(selector);
    }

    html(content) {
        console.log(this.elem.innerHTML);
        this.elem.innerHTML = content;
        // this.elem.insertAdjacentHTML('beforeend', content)

        return this;
    }

    append(content){
        Elem.insertHtmlDecorator({
            elem: this.elem, 
            mode: 'beforeend', 
            content: content
        });

        return this;
    }

    prepend(content){
        Elem.insertHtmlDecorator({
            elem: this.elem, 
            mode: 'afterbegin', 
            content
        });

        return this;
    }
    
    attr(attrName, attrValue) {
        this.elem.setAttribute(attrName, attrValue);

        return this;
    }

    static insertHtmlDecorator(options) {
        if (!options.elem) return;
        options.elem.insertAdjacentHTML(options.mode, options.content)
    }
}



window.addEventListener('load', function(){
    var elem = new Elem('.block');
    var block = new Elem('.cont');
    console.log(elem);

    elem.html('exampel text hello <br> After'); //запишет в текст элемента '!'
    elem.append('Added !'); //запишет в конец элемента '!'
    elem.prepend('Added before!_'); //запишет в начало элемента '!'
    elem.attr('test', 'www'); //запишет в атрибут class значение www

    // chaining
    elem
        .html('hello')
        .append('!')
        .append('one more')
        .prepend('clear')
        .append('last');
    // elem.attr('class', 'www').attr('title', 'hello');
})


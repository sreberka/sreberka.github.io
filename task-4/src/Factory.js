class Factory {
    constructor() {

    }

    createElement(tag, inner, className, place) {
        this.elementTag = document.createElement(tag);
        this.elementTag.innerHTML = inner;
        this.elementTag.classList.add(className);
        place.appendChild(this.elementTag);
    }

    setAttribute(attrName, attrValue) {
        this.elementTag.setAttribute(attrName, attrValue);
    }
}

export default Factory;

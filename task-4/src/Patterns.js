class Factory {
    constructor(tag, inner, className, place) {
        this.tag = tag;
        this.inner = inner;
        this.className = className;
        this.place = place;
    }

    createElement() {
        this.elementTag = document.createElement(this.tag);
        this.elementTag.innerHTML = this.inner;
        this.elementTag.classList.add(this.className);
        this.place.appendChild(this.elementTag);
    }

    setAttribute(attrName, attrValue) {
        this.elementTag.setAttribute(attrName, attrValue);
    }
}

export default Factory;

function CreatePencil(name,color,price){
    this.name = name;
    this.color = color;
    this.price = price;
}

CreatePencil.prototype.write = function(text){
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
    console.log(h1);
}
let pencil1 = new CreatePencil("Nataraj", "Blue", 10);
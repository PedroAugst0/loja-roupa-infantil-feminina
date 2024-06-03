document.getElementById('add-clothing-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const size = event.target.elements['size'].value;
    const description = event.target.elements['description'].value;
    const price = parseFloat(event.target.elements['price'].value);
    const image = event.target.elements['image'].files[0];

    const clothingItem = document.createElement('div');
    clothingItem.innerHTML = `
        <p>Tamanho: ${size}</p>
        <p>Descrição: ${description}</p>
        <p>Valor: R$ ${price.toFixed(2)}</p>
    `;

    if (image) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(image);
        img.style.maxWidth = '100px';
        img.style.maxHeight = '100px';
        img.style.marginTop = '10px';
        clothingItem.appendChild(img);
    }

    document.getElementById('clothing-list').appendChild(clothingItem);
    event.target.reset();
});
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0CLt3zaE879RaPX7Qcby-LJQCZjn8hO4",
    authDomain: "shoe-project-179f0.firebaseapp.com",
    databaseURL: "https://shoe-project-179f0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shoe-project-179f0",
    storageBucket: "shoe-project-179f0.firebasestorage.app",
    messagingSenderId: "790390500559",
    appId: "1:790390500559:web:af0fcae1e6027044865bba"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const shoes = [
    {
      id: 1,
      name: "ლურჯი სპორტული კედები",
      image: "https://i.imgur.com/pdp6hvV.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
    {
      id: 2,
      name: "წითელი სარბენი ფეხსაცმელი",
      image: "https://i.imgur.com/FqVmEFi.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
    {
      id: 3,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
      {
      id: 4,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 5,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 6,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 7,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 8,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 9,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 10,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 11,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 12,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 13,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 14,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 15,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 16,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 17,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 18,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 19,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 20,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 21,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },
{
      id: 22,
      name: "შავი ოფიციალური ფეხსაცმელი",
      image: "https://i.imgur.com/gnYMv05.jpeg",
      sizes: [40, 41, 42, 43, 44]
    },

  ];
  
  function createShoeElement(shoe) {
    const productContainer = document.createElement('div');
    productContainer.className = 'product-container';
    productContainer.id = `shoe-${shoe.id}`;
    
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';
    
    const productImage = document.createElement('div');
    productImage.className = 'product-image';
    const img = document.createElement('img');
    img.src = shoe.image;
    img.alt = shoe.name;
    productImage.appendChild(img);
    
    productDetails.appendChild(productImage);
    
    const sizeSelection = document.createElement('div');
    sizeSelection.className = 'size-selection';
    
    const sizeHeading = document.createElement('h3');
    sizeHeading.textContent = 'ხელმისაწვდომი ზომები';
    
    const sizeOptions = document.createElement('div');
    sizeOptions.className = 'size-options';
    
    shoe.sizes.forEach(size => {
      const button = document.createElement('button');
      button.className = 'size-btn';
      button.setAttribute('data-shoe-id', shoe.id);
      button.setAttribute('data-size', size);
      button.textContent = size;
      sizeOptions.appendChild(button);
    });
    
    const sizeInfo = document.createElement('p');
    sizeInfo.className = 'size-info';
    sizeInfo.textContent = 'დააჭირეთ ზომის ხელმისაწვდომობის გადასართავად (წითელი = მარაგში არ არის)';
    
    sizeSelection.appendChild(sizeHeading);
    sizeSelection.appendChild(sizeOptions);
    sizeSelection.appendChild(sizeInfo);
    
    productContainer.appendChild(productDetails);
    productContainer.appendChild(sizeSelection);
    
    return productContainer;
  }
  
  function loadStockStatus(shoeId, size, callback) {
    const key = `shoe_${shoeId}_size_${size}`;
    const dbRef = firebase.database().ref('stock-status/' + key);
    
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      callback(data && data.isOutOfStock);
    });
  }
  
  function saveStockStatus(shoeId, size, isOutOfStock) {
    const key = `shoe_${shoeId}_size_${size}`;
    const dbRef = firebase.database().ref('stock-status/' + key);
    return dbRef.set({
      isOutOfStock: isOutOfStock
    });
  }
  
  function listenToStockUpdates() {
    const dbRef = firebase.database().ref('stock-status');
    
    dbRef.on('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        
        const [_, shoeId, __, size] = key.split('_');
        const button = document.querySelector(`button[data-shoe-id="${shoeId}"][data-size="${size}"]`);
        
        if (button) {
          button.classList.toggle('out-of-stock', data.isOutOfStock);
        }
      });
    });
  }
  
  function initPage() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    shoes.forEach(shoe => {
      const shoeElement = createShoeElement(shoe);
      productsContainer.appendChild(shoeElement);
    });
    
    document.querySelectorAll('.size-btn').forEach(button => {
      const shoeId = button.dataset.shoeId;
      const size = button.dataset.size;
      
      loadStockStatus(shoeId, size, (isOutOfStock) => {
        button.classList.toggle('out-of-stock', isOutOfStock);
      });
      
      button.addEventListener('click', function() {
        const isOutOfStock = !this.classList.contains('out-of-stock');
        this.classList.toggle('out-of-stock', isOutOfStock);
        
        saveStockStatus(shoeId, size, isOutOfStock)
          .catch((error) => {
            console.error("Error saving status:", error);
          });
      });
    });
    
    listenToStockUpdates();
  }
  
  document.addEventListener('DOMContentLoaded', initPage);

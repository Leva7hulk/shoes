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
    // Original 3 shoes
    {
        id: 1,
        name: "ლურჯი სპორტული კედები",
        image: "https://i.imgur.com/pdp6hvV.jpeg",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 2,
        name: "წითელი სარბენი ფეხსაცმელი",
        image: "shoe-image-2.jpg",
        sizes: [39, 40, 41, 42, 45]
    },
    {
        id: 3,
        name: "შავი ოფიციალური ფეხსაცმელი",
        image: "shoe-image-3.jpg", 
        sizes: [41, 42, 43, 44, 45]
    },

    // New shoes 4-25
    {
        id: 4,
        name: "მწვანე კაზუალური ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=1",
        sizes: [38, 39, 40, 41, 42]
    },
    {
        id: 5,
        name: "ვარდისფერი სპორტული სნიკერსი",
        image: "https://picsum.photos/200/300?random=2",
        sizes: [36, 37, 38, 39, 40]
    },
    {
        id: 6,
        name: "ნაცრისფერი უნისექსი ბოტასი",
        image: "https://picsum.photos/200/300?random=3",
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 7,
        name: "ოქროსფერი ელეგანტური სანდლები",
        image: "https://picsum.photos/200/300?random=4",
        sizes: [37, 38, 39, 40, 41]
    },
    {
        id: 8,
        name: "თეთრი ბასკეტბოლის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=5",
        sizes: [42, 43, 44, 45, 46]
    },
    {
        id: 9,
        name: "ყავისფერი ტურისტული ბოტინი",
        image: "https://picsum.photos/200/300?random=6",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 10,
        name: "მუქი ლურჯი სკეიტბორდის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=7",
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 11,
        name: "ბროწეულისფერი რანერები",
        image: "https://picsum.photos/200/300?random=8",
        sizes: [36, 37, 38, 39, 40]
    },
    {
        id: 12,
        name: "მოლურჯო ზამთრის ბოტასი",
        image: "https://picsum.photos/200/300?random=9",
        sizes: [41, 42, 43, 44, 45]
    },
    {
        id: 13,
        name: "შოკოლადისფერი დერიბი",
        image: "https://picsum.photos/200/300?random=10",
        sizes: [38, 39, 40, 41, 42]
    },
    {
        id: 14,
        name: "ვერცხლისფერი ფიტნესის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=11",
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 15,
        name: "ლილასფერი აერობიკის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=12",
        sizes: [37, 38, 39, 40, 41]
    },
    {
        id: 16,
        name: "კამუფფერი სამხედრო სტილის ბოტინი",
        image: "https://picsum.photos/200/300?random=13",
        sizes: [42, 43, 44, 45, 46]
    },
    {
        id: 17,
        name: "ნარინჯისფერი მთათამაშხა ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=14",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 18,
        name: "მოვარდისფრო ფუტბოლის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=15",
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 19,
        name: "ზეთისხილისფერი კლასიკური ლოფერები",
        image: "https://picsum.photos/200/300?random=16",
        sizes: [36, 37, 38, 39, 40]
    },
    {
        id: 20,
        name: "მუქი მწვანე ტრეკინგის ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=17",
        sizes: [41, 42, 43, 44, 45]
    },
    {
        id: 21,
        name: "ღია ლურჯი ფიტნესის სნიკერსი",
        image: "https://picsum.photos/200/300?random=18",
        sizes: [38, 39, 40, 41, 42]
    },
    {
        id: 22,
        name: "შავი თეთრი პატერნიანი კედები",
        image: "https://picsum.photos/200/300?random=19",
        sizes: [39, 40, 41, 42, 43]
    },
    {
        id: 23,
        name: "ოქროსფერი საღამოს ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=20",
        sizes: [37, 38, 39, 40, 41]
    },
    {
        id: 24,
        name: "ტყვიისფერი საველე ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=21",
        sizes: [42, 43, 44, 45, 46]
    },
    {
        id: 25,
        name: "მულტიფერი ბავშვების ფეხსაცმელი",
        image: "https://picsum.photos/200/300?random=22",
        sizes: [28, 29, 30, 31, 32]
    }
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

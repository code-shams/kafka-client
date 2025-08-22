export let coffees = [
    {
        id: "1",
        name: "Ethiopian Yirgacheffe",
        description: "Bright and floral with notes of lemon and bergamot",
        price: 18.99,
        origin: "Ethiopia",
        roastLevel: "Light",
        image: "https://i.ibb.co.com/Kxsw2kzF/1.png",
    },
    {
        id: "2",
        name: "Colombian Supremo",
        description: "Well-balanced with chocolate and caramel undertones",
        price: 16.99,
        origin: "Colombia",
        roastLevel: "Medium",
        image: "https://i.ibb.co.com/xKRdnkFT/2.png",
    },
    {
        id: "3",
        name: "Guatemala Antigua",
        description: "Full-bodied with smoky, spicy complexity",
        price: 17.99,
        origin: "Guatemala",
        roastLevel: "Dark",
        image: "https://i.ibb.co.com/kzXs6cc/3.png",
    },
    {
        id: "4",
        name: "Kenya AA",
        description: "Rich and vibrant with bright acidity and berry notes",
        price: 19.49,
        origin: "Kenya",
        roastLevel: "Medium-Light",
        image: "https://i.ibb.co.com/Qjpj7B7z/4.png",
    },
    {
        id: "5",
        name: "Sumatra Mandheling",
        description: "Earthy and herbal with low acidity and full body",
        price: 18.49,
        origin: "Indonesia",
        roastLevel: "Dark",
        image: "https://i.ibb.co.com/ZpYFwb2M/5.png",
    },
    {
        id: "6",
        name: "Brazil Santos",
        description: "Smooth, nutty, and chocolatey with a mild finish",
        price: 15.99,
        origin: "Brazil",
        roastLevel: "Medium",
        image: "https://i.ibb.co.com/nMwxPzjL/6.png",
    },
    {
        id: "7",
        name: "Costa Rica Tarrazú",
        description: "Clean, bright, and balanced with citrus notes",
        price: 17.49,
        origin: "Costa Rica",
        roastLevel: "Light-Medium",
        image: "https://i.ibb.co.com/kzXs6cc/3.png",
    },
    {
        id: "8",
        name: "Honduras Marcala",
        description: "Sweet and balanced with caramel and honey notes",
        price: 16.49,
        origin: "Honduras",
        roastLevel: "Medium",
        image: "https://i.ibb.co.com/nMwxPzjL/6.png",
    },
    {
        id: "9",
        name: "Tanzania Peaberry",
        description: "Bright, fruity, and wine-like with a medium body",
        price: 19.99,
        origin: "Tanzania",
        roastLevel: "Medium",
        image: "https://i.ibb.co.com/Kxsw2kzF/1.png",
    },
];

// Function to add a new coffee (called from our API)
export function addCoffee(coffeeData) {
    const newCoffee = {
        ...coffeeData,
        id: (coffees.length + 1).toString(), // Simple ID generation
        image:
            coffeeData.image ||
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
    };
    coffees.push(newCoffee);
    return newCoffee;
}

// Function to find a coffee by ID
export function getCoffeeById(id) {
    return coffees.find((coffee) => coffee.id === id);
}

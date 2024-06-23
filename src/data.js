import Afrojack from './shoes-img/afrojack.jpg';
import Asian from './shoes-img/asian.jpg';
import Avant from './shoes-img/avant.jpg';
import Campus from './shoes-img/capmpus.jpg';
import Doctor from './shoes-img/doctor.jpg';
import Xtep from './shoes-img/xtep.jpg';

const cardDetails = [
    {
        id: 1,
        shoeImg: Afrojack,
        brand: "Afrojack",
        price: "₹2000",
        delivery: {
            offer: "Free shipping on orders over $200",
            return: "30-day return policy"
        },
        productDetails: {
            materialType: "Leather",
            heelType: "Flat",
            soleMaterial: "Rubber",
            style: "Sneakers",
            countryOrigin: "Vietnam"
        },
        description: "High-quality leather sneakers with excellent durability and comfort. Perfect for casual wear."
    },
    {
        id: 2,
        shoeImg: Asian,
        brand: "Asian",
        price: "₹1050",
        delivery: {
            offer: "Free shipping on all orders",
            return: "15-day return policy"
        },
        productDetails: {
            materialType: "Synthetic",
            heelType: "Low",
            soleMaterial: "EVA",
            style: "Running shoes",
            countryOrigin: "Indonesia"
        },
        description: "Lightweight running shoes designed for maximum performance and comfort. Ideal for daily workouts."
    },
    {
        id: 3,
        shoeImg: Avant,
        brand: "Avant",
        price: "₹1500",
        delivery: {
            offer: "10% off on first purchase",
            return: "No return policy"
        },
        productDetails: {
            materialType: "Mesh",
            heelType: "Medium",
            soleMaterial: "TPU",
            style: "Trainers",
            countryOrigin: "China"
        },
        description: "Breathable mesh trainers suitable for various sports activities. Provides great support and flexibility."
    },
    {
        id: 4,
        shoeImg: Campus,
        brand: "Campus",
        price: "₹1000",
        delivery: {
            offer: "Buy one get one 50% off",
            return: "30-day return policy"
        },
        productDetails: {
            materialType: "Canvas",
            heelType: "High",
            soleMaterial: "Rubber",
            style: "High-top sneakers",
            countryOrigin: "India"
        },
        description: "Stylish high-top sneakers made from durable canvas. Perfect for streetwear and casual outfits."
    },
    {
        id: 5,
        shoeImg: Doctor,
        brand: "Doctor",
        price: "₹950",
        delivery: {
            offer: "20% off on orders over $150",
            return: "30-day return policy"
        },
        productDetails: {
            materialType: "Textile",
            heelType: "Low",
            soleMaterial: "Rubber",
            style: "Training shoes",
            countryOrigin: "Vietnam"
        },
        description: "Versatile training shoes designed for various workouts. Durable and lightweight with excellent grip."
    },
    {
        id: 6,
        shoeImg: Xtep,
        brand: "Xtep",
        price: "₹600",
        delivery: {
            offer: "Free express shipping",
            return: "45-day return policy"
        },
        productDetails: {
            materialType: "Suede",
            heelType: "Medium",
            soleMaterial: "Rubber",
            style: "Lifestyle sneakers",
            countryOrigin: "USA"
        },
        description: "Comfortable and stylish lifestyle sneakers made from premium suede. Ideal for everyday wear."
    }
];

export default cardDetails;

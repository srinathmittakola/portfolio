// src/data/projectsData.js
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

export const projects = [
  {
    id: 1,
    title: "GemView",
    description:
      "An Android application developed to capture, manage, and organize product images and videos. Integrated with a professional device setup for product photography, using Firebase Firestore and Firebase Storage for secure media storage and efficient SKU-wise management.",
    image1: project1,
    image2:project1,

    features: [
      "Image and video capture using device camera",
      "SKU-wise media organization",
      "Firebase Storage integration",
      "Firestore database for metadata",
      "Secure user-based access",
      "Offline caching for fast loading"
    ],

    techStack: [
      "Android (Kotlin)",
      "Firebase Firestore",
      "Firebase Storage",
      "CameraView",
      "Glide"
    ]
  },

  {
    id: 2,
    title: "MyWeather",
    description:
      "An Android weather application that displays real-time weather conditions along with hourly and 15-day forecasts based on the user’s location. Integrated a third-party Weather API and designed a clean, user-friendly interface for easy data visualization.",
 image1: project1,
    image2:project1,
    features: [
      "Real-time weather updates based on location",
      "Hourly weather forecast",
      "15-day weather forecast",
      "Dynamic UI updates based on weather data",
      "Location handling with GPS and fallback options"
    ],

    techStack: [
      "Android (Kotlin)",
      "Weather API",
      "RecyclerView",
      "Location Services",
      "MVVM Architecture"
    ]
  },

  {
    id: 3,
    title: "Converter",
    description:
      "A lightweight Android unit converter application that supports multiple measurement conversions such as length and temperature. Designed with a simple UI and real-time conversion logic to ensure accuracy and ease of use.",
 image1: project1,
    image2:project1,
    features: [
      "Supports multiple unit conversions",
      "Real-time conversion logic",
      "Simple and intuitive UI",
      "Error handling for invalid inputs",
      "Lightweight and fast performance"
    ],

    techStack: [
      "Android (Java/Kotlin)",
      "XML Layouts",
      "View Binding",
      "Material Design Components"
    ]
  },

  {
    id: 4,
    title: "ShowX",
    description:
      "A full-stack web application featuring an Admin Panel for managing products, customers, and orders, and a User Panel for browsing and purchasing shoes from multiple brands. Implemented CRUD operations and structured data handling for smooth user interaction.",
 image1: project1,
    image2:project1,
    features: [
      "Admin panel for product and order management",
      "User panel for browsing and purchasing products",
      "CRUD operations for products and users",
      "Authentication and role-based access",
      "Structured database handling"
    ],

    techStack: [
      "Laravel",
      "MySQL",
      "HTML, CSS, JavaScript",
      "REST APIs",
      "MVC Architecture"
    ]
  }
];

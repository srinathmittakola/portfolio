// src/data/projectsData.js
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

export const projects = [
  {
    id: 1,
    title: "MyWeather",
    description:
      "A simple weather application designed to display current weather conditions and upcoming forecasts clearly and efficiently.",
    image: project1,

  },
  {
    id: 2,
    title: "ShowX",
    description:
      "A web application with two panels: Admin Panel for CRUD operations on shoes and managing customers/orders, and User Panel for browsing and purchasing from 7 brands of shoes.",
    image: project2,

  },
  {
    id: 3,
    title: "Converter",
    description:
      "A universal converter application that handles various measurements and comparable digits, instantly displaying all possible conversions for a given input value.",
    image: project1,

  },
  {
    id: 4,
    title: "GemView",
    description:
      "An Android application for capturing and managing object media. Integrated with a specialized device for professional-grade product photography, storing media in Firebase Cloud and enabling direct uploads to e-commerce platforms.",
    image: project2,

  }
];

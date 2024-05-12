import { Router } from "express";
import { RegistroCategories } from "../controller/categories.js";

const categories = Router();

categories.post('/Registrocategories', RegistroCategories);

export default categories;

import express from "express";
import * as coffeeController from "../controllers/coffee_controller";

export const router = express.Router();

router.get("/coffeelover", coffeeController.getCoffelover);

router.get("/coffee", coffeeController.getCoffee);

import express from "express";
import * as coffeeController from "../controllers/coffee_controller";
import * as teaController from "../controllers/tea_controllers";

export const router = express.Router();

router.get("/coffeelover", coffeeController.getCoffelover);

router.get("/coffee", coffeeController.getCoffee);

router.get("/tea", teaController.getTea);

import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const { coffeeName } = req.query;
  const coffee = coffeeService.getCoffee(coffeeName as string);
  res.json(coffee).status(200);
};

export const getCoffelover = async (req: Request, res: Response) => {
  const coffeeLoverText = coffeeService.getCoffeeloverText();
  res.send(coffeeLoverText);
};

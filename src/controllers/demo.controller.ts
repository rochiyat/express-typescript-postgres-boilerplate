import { Request, Response } from 'express';
import { demoService } from '../services/demo.service';
import { returnSuccess, returnNonSuccess } from '../utils/helper.util';

export const getDemoData = async (req: Request, res: Response) => {
  try {
    const data = await demoService.getDataDemo();
    returnSuccess(req, res, 200, 'Success', data);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
};

export const getDemoDataById = async (req: Request, res: Response) => {
  try {
    const data = await demoService.getDataDemoById(req.params.id);
    returnSuccess(req, res, 200, 'Success', data);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
};

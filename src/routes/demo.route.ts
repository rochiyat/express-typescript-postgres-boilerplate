import { Router } from 'express';
import * as demoController from '../controllers/demo.controller';

const router = Router();

router.get('/', demoController.getDemoData);
router.get('/:id', demoController.getDemoDataById);

export default router;

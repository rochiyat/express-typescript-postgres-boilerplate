import { Router } from 'express';
import demoRoute from './demo.route';
import userRoute from './user.route';

const router = Router();

router.use('/demo', demoRoute);
router.use('/users', userRoute);

export default router;

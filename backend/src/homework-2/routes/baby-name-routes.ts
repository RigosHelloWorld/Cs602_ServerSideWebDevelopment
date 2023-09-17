import express, { Router } from 'express';
import * as babyNameController from '../controllers/baby-name-controller';
import { ROUTES } from '../../utils/server-constants';

const babyNameRouter: Router = express.Router();

babyNameRouter.get(ROUTES.BABY_NAME_DISCOVER_ROUTE, babyNameController.fetchNewBabyNames);
babyNameRouter.post(ROUTES.BABY_NAME_SAVE_ROUTE, babyNameController.saveBabyName);
babyNameRouter.get(ROUTES.BABY_NAME_LIST_ROUTE, babyNameController.getSavedCollectionOfBabyNames);
babyNameRouter.post(ROUTES.BABY_NAME_DELETE_ROUTE, babyNameController.deleteBabyName);

export { babyNameRouter };

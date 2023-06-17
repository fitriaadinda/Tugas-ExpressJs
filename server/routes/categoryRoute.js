import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.post('/',indexCtrl.categoryCtrl.create)

export default router
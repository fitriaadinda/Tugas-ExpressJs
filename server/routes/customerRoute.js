import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.customerCtrl.findAll)
router.get('/order_detail',indexCtrl.customerCtrl.findAllDetailOrder)
router.post('/',indexCtrl.customerCtrl.create)

export default router
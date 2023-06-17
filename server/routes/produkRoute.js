import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/:id',indexCtrl.produkCtrl.findOne)
router.post('/',indexCtrl.produkCtrl.create)

export default router
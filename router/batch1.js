import express from "express";
import * as batchController from "../controller/batch1.js";

const router = express.Router();

router.post("/create", batchController.controlCreateBatch1);
router.get("/select", batchController.controlSelectBatch1);
router.put("/update", batchController.controlUpdateBatch1);
router.delete("/delete", batchController.controlDeleteBatch1);

export default router;

import { Router } from 'express';
const router = Router();
import { students } from './methods.js';

router.get("/students", students.get);
router.post("/students", students.post);
router.get("/students/:id", students.getOne);
router.put("/students/:id", students.put);
router.delete("/students/:id", students.delete);

export default router;
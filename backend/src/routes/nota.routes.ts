import { Router } from "express";
import {crearNota, obtenerNotas} from "../controllers/nota.controller";

const router = Router();

router.get("/", obtenerNotas);
router.post("/", crearNota);

export default router;
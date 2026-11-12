import { Request, Response } from 'express';
import { Nota } from '../models/Nota';

export const crearNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const nuevaNota = new Nota(req.body);
        const savedNota = await nuevaNota.save();
        res.status(201).json(savedNota);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Error desconocido al crear la nota';
        res.status(400).json({ error: message });
    }
};

export const obtenerNotas = async (req: Request, res: Response): Promise<void> => {
    try {
        const notas = await Nota.find({});
        res.status(200).json(notas);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Error desconocido al obtener las notas';
        res.status(500).json({ error: message });
    }
};
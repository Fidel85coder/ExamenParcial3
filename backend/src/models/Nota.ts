import { Schema, model, Document, Model } from 'mongoose';

export interface INota extends Document {
    titulo: string;
    contenido: string;
}

const NotaSchema = new Schema<INota>(
    {
        titulo: { type: String, required: true },
        contenido: { type: String, required: true },
    }
);

export const Nota: Model<INota> = model<INota>("Nota", NotaSchema);

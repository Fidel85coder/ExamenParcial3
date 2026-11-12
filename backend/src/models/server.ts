import express, { Application } from "express";
import cors from "cors";
import {connectDB} from "../config/connectDB";
import noteRoutes from "../routes/nota.routes";

export class Server {
    private app: Application;
    private readonly port: string;

    private apiPaths = {
        notes: "/api/notas"
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";

        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private routes(): void {
        this.app.use(this.apiPaths.notes, noteRoutes)
    }

    public async listen(): Promise<void> {
        try {
            await connectDB();

            this.app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
            });
        } catch (error) {
            console.error("Failed to start server:", error);
        }
    }
}
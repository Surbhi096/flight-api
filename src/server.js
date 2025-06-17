import express from "express";
import routes from "./routes/index.js";
import { PORT } from "./config/config.js";

const boostrap = () => {
    const app = express()
    app.use(routes);
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
        console.log(`Swagger docs at http://localhost:${PORT}/api-docs`)
    });
}

export default boostrap();
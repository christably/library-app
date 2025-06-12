const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const responseMiddleware = require('./middlewares/responseMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const { swaggerUi, swaggerDocument } = require("./swagger");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/books', bookRoutes);

app.use(responseMiddleware);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`📚 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
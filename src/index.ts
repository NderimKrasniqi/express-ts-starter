import app from './app';
import connectToDatabase from './db';

const PORT = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
          .underline.bold,
      ),
    );
  })
  .catch((error: Error) => {
    console.error('Database connection failed'.red.underline.bold, error);
    process.exit(1);
  });

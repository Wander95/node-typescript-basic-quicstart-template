import app from './server';

// tslint:disable-next-line: typedef
async function main() {
  const PORT = app.get('port');

  app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
  });
}

main();
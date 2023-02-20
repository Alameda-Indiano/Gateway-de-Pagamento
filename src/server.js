import AppController from "./AppController.js";

AppController.listen(process.env.PORT || 8080, () => {
    console.log(`npm run dev: API rodando na porta ${8080}`);
});
# Laboratorio 1 · Mini-API MVC con CRUD

**Desarrollo Web Avanzado (A0R04) · ESPE · Unidad 1: Persistencia de datos y ORM**
   | Dato | Valor |
   |---|---|
   | Grupo | G05 |
   | Emprendimiento | Dulce Hogar (repostería casera) |
   | Integrantes | 1. Jonathan Guayta <br> 2. Joselyn Morocho <br> 3. Matias Rojas |
   | NRC | 36878 |
   | Fecha | 19/10/2026 |
   | Repositorio | https://github.com/isamarmorocho/G05_Lab1_DulceHogar |
## Cómo ejecutar

```bash
npm install
cp .env.example .env      # en Windows: copy .env.example .env
npm run dev               # http://localhost:3000
```

Importa en Postman `postman/GXX_Lab1.postman_collection.json` y ejecuta **Run collection**.

## Estructura MVC en capas

```
src/
├─ app.js            ← arma la app: express.json, middlewares y prefijo /api
├─ server.js         ← solo levanta el servidor (lee .env)
├─ routes/
│  ├─ index.js       ← archivo principal: monta cada recurso (/api/<entidad>)
│  └─ <entidad>.routes.js  ← verbo + URL → acción del controlador
├─ controllers/      ← lee req, llama al servicio, decide código + JSON
├─ services/         ← reglas de negocio, validaciones y acceso a datos
├─ models/           ← campos de la entidad y archivo JSON (Lab 2: schema.prisma)
├─ middlewares/      ← logger, notFound, errorHandler
└─ utils/httpError.js
data/                ← archivo JSON con los registros
```

Flujo de una petición: **ruta → controlador → servicio → modelo** y de vuelta. El proyecto usa CommonJS (`require` / `module.exports`).

## Endpoints de la entidad

| Verbo | Ruta | Acción | Éxito | Errores |
|---|---|---|---|---|
| GET | /api/... | Listar | 200 | — |
| GET | /api/.../:id | Ver uno | 200 | 400, 404 |
| POST | /api/... | Crear | 201 | 400 |
| PUT | /api/.../:id | Actualizar | 200 | 400, 404 |
| DELETE | /api/.../:id | Eliminar | 204 | 404 |

## Validaciones del servicio

1.
2.

## Aporte de cada integrante

## Aporte de cada integrante

| Integrante | Qué hizo (archivos / pasos) |
|---|---|
| Joselyn Morocho  | Creó el repositorio de GitHub, renombró la entidad de product a postre, definió el modelo y los datos de ejemplo en `postres.json`, programó el servicio con las validaciones y las operaciones create, update y remove, completó la cabecera de `app.js` y la tabla de datos del inicio del README (grupo, emprendimiento, integrantes, NRC, fecha y enlace del repositorio). Archivos: `models/postre.model.js`, `services/postre.service.js`, `data/postres.json`, `routes/index.js`, `app.js`. |
| Jonathan Guayta | Pendiente |
| Matias Rojas  | Pendiente |





## Declaración de uso de IA

- Herramienta(s) usada(s): ___ (o «No se usó IA»)
- Para qué la usamos (consultar, depurar, explicar un error…):
- Qué verificamos o corregimos nosotros:

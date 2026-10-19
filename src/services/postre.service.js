const Postre = require("../models/postre.model");
const HttpError = require("../utils/httpError");

// SERVICIO: reglas de negocio y acceso a datos a través del modelo.
// Lanza HttpError (400, 404) cuando una regla no se cumple. En el Lab 2 este archivo
// usará Prisma; el controlador y las rutas no cambian.

// Devuelve un mensaje de error o null si los datos son válidos.
// partial = true en PUT: valida solo los campos que llegan.
const validate = (data, { partial = false } = {}) => {
  // Validación 1: nombre obligatorio, texto de al menos 3 caracteres
  if (!partial || data.nombre !== undefined) {
    if (typeof data.nombre !== "string" || data.nombre.trim().length < 3)
      return "nombre es obligatorio y debe tener al menos 3 caracteres";
  }
  // Validación 2: precio numérico mayor o igual a 0
  if (!partial || data.precio !== undefined) {
    if (typeof data.precio !== "number" || Number.isNaN(data.precio) || data.precio < 0)
      return "precio debe ser un número mayor o igual a 0";
  }
  // Validación 3 (extra): stock entero mayor o igual a 0 si viene
  if (data.stock !== undefined) {
    if (!Number.isInteger(data.stock) || data.stock < 0)
      return "stock debe ser un entero mayor o igual a 0";
  }
  return null;
};

const list = () => Postre.readAll();

const getById = async (id) => {
  const item = (await Postre.readAll()).find((p) => p.id === id);
  if (!item) throw new HttpError(404, "Postre no encontrado");
  return item;
};

const create = async (data) => {
  const error = validate(data);
  if (error) throw new HttpError(400, error);

  const items = await Postre.readAll();
  const id = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
  const item = { id, ...Postre.pick(data) };
  items.push(item);
  await Postre.writeAll(items);
  return item;
};

const update = async (id, data) => {
  const error = validate(data, { partial: true });
  if (error) throw new HttpError(400, error);

  const items = await Postre.readAll();
  const index = items.findIndex((p) => p.id === id);
  if (index === -1) throw new HttpError(404, "Postre no encontrado");

  items[index] = { ...items[index], ...Postre.pick(data) };
  await Postre.writeAll(items);
  return items[index];
};

const remove = async (id) => {
  const items = await Postre.readAll();
  const index = items.findIndex((p) => p.id === id);
  if (index === -1) throw new HttpError(404, "Postre no encontrado");

  items.splice(index, 1);
  await Postre.writeAll(items);
};

module.exports = { list, getById, create, update, remove };
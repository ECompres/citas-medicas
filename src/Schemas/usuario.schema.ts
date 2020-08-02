import { Schema } from "mongoose";

export const usuarioSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Fecha_Nacimiento: { type: Date, required: true },
    Direccion: { type: String, required: true },
    Numero_Telefono: { type: String, required: true },
    Id_area: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Id_tanda: { type: String, required: true },
    Id_tipo_usuario: { type: String, required: true },
    Fecha_Creacion: {
        type: Date,
        default: Date.now
    }

})
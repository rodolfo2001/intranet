import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM colaborador");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo ha salido mal",
    });
  }
};
export const getEmpleado = async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM colaborador WHERE rut_colaborador = ?",
    [req.params.rut]
  );
  res.json(rows[0]);
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Algo ha salido mal",
    });
  }
};

export const postEmpleados = async (req, res) => {
  try {
    const {
      rut_colaborador,
      nombre_colaborador,
      apellido_colaborador,
      telefono_colaborador,
      correo_electronico,
      contraseña,
    } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO colaborador (rut_colaborador, nombre_colaborador, apellido_colaborador, telefono_colaborador, correo_electronico, contraseña) VALUES (?, ?, ?, ?, ?, ?)",
      [
        rut_colaborador,
        nombre_colaborador,
        apellido_colaborador,
        telefono_colaborador,
        correo_electronico,
        contraseña,
      ]
    );
    console.log('datos: ',rut_colaborador, nombre_colaborador, apellido_colaborador, telefono_colaborador, correo_electronico, contraseña);
    res.send({
      nombre_colaborador,
      apellido_colaborador,
      telefono_colaborador,
      correo_electronico,
      contraseña,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Algo ha salido mal en el postEmpleados",
    });
  }
};

export const patchEmpleados = async (req, res) => {
    console.log('en el patch');
  try {
    const { rut } = req.params;
    const {
      nombre_colaborador,
      apellido_colaborador,
      telefono_colaborador,
      correo_electronico,
      contraseña,
    } = req.body;

    const [result] = await pool.query(
      "UPDATE colaborador SET nombre_colaborador = IFNULL(?, nombre_colaborador), apellido_colaborador = IFNULL(?, apellido_colaborador), telefono_colaborador = ifnull(?, telefono_colaborador) , correo_electronico = IFNULL(?, correo_electronico), contraseña = IFNULL(?, contraseña) WHERE rut_colaborador = ?",
      [
        nombre_colaborador,
        apellido_colaborador,
        telefono_colaborador,
        correo_electronico,
        contraseña,
        rut,
      ]
    );

    console.log("EN EL PATCH", result);

    if (result.affectedRows === 0)
      return res.json({
        message: "Colaborador no encontrado",
      });
    const [rows] = await pool.query(
      "SELECT*FROM colaborador WHERE rut_colaborador = ?",
      [rut]
    );
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo ha salido mal",
    });
  }
};

export const deleteEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM colaborador WHERE rut_colaborador = ?",
      [req.params.rut]
    );
    if (result.affectedRows <= 0) return res.send("Empleado no existe");
    res.send("Empleado eliminado");
  } catch (error) {
    return res.status(500).json({
      message: "Algo ha salido mal",
    });
  }
};

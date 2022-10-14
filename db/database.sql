CREATE DATABASE IF NOT  EXISTS intranet;

USE intranet;

CREATE TABLE colaborador;
( 
    rut_colaborador VARCHAR (10),
    nombre_colaborador CHAR (100),
    apellido_colaborador CHAR (100),
    telefono_colaborador INT (9),
    correo_electronico VARCHAR (50),
    contraseña VARCHAR (50),
    id_afp INT (5),
    id_salud INT (5),
    id_carga INT (5),
    codigo_documentos VARCHAR (10),
    id_cargo INT (5),
    PRIMARY KEY (rut_colaborador)
);
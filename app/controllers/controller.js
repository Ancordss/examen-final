const db = require('../config/db.config.js');
const Proyecto = db.Proyecto;

// Crear un nuevo proyecto
exports.create = async (req, res) => {
    const proyecto = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        completada: req.body.completada || false,
        fecha_creacion: new Date(),
        fecha_vencimiento: req.body.fecha_vencimiento,
        prioridad: req.body.prioridad || 'media',
        asignado_a: req.body.asignado_a,
        categoria: req.body.categoria,
        costo_proyecto: req.body.costo_proyecto,
        pagado: req.body.pagado || false
    };

    try {
        const result = await Proyecto.create(proyecto);
        res.status(201).json({
            message: "Proyecto creado exitosamente con id = " + result.id,
            proyecto: result,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el proyecto",
            error: error.message
        });
    }
};

// Obtener todos los proyectos
exports.retrieveAll = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.status(200).json({
            message: "Proyectos obtenidos exitosamente",
            proyectos: proyectos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los proyectos",
            error: error.message
        });
    }
};

// Obtener un proyecto por su ID
exports.getById = async (req, res) => {
    const proyectoId = req.params.id;

    try {
        const proyecto = await Proyecto.findByPk(proyectoId);
        if (!proyecto) {
            return res.status(404).json({
                message: "Proyecto no encontrado con id = " + proyectoId,
                error: "404"
            });
        }
        res.status(200).json({
            message: "Proyecto obtenido exitosamente",
            proyecto: proyecto
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el proyecto",
            error: error.message
        });
    }
};

// Actualizar un proyecto por su ID
exports.updateById = async (req, res) => {
    const proyectoId = req.params.id;

    try {
        const proyecto = await Proyecto.findByPk(proyectoId);
        if (!proyecto) {
            return res.status(404).json({
                message: "Proyecto no encontrado para actualizar con id = " + proyectoId,
                error: "404"
            });
        }

        const updatedObject = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            completada: req.body.completada,
            fecha_vencimiento: req.body.fecha_vencimiento,
            prioridad: req.body.prioridad,
            asignado_a: req.body.asignado_a,
            categoria: req.body.categoria,
            costo_proyecto: req.body.costo_proyecto,
            pagado: req.body.pagado
        };

        await Proyecto.update(updatedObject, { where: { id: proyectoId } });

        res.status(200).json({
            message: "Proyecto actualizado exitosamente con id = " + proyectoId,
            proyecto: updatedObject
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el proyecto",
            error: error.message
        });
    }
};

// Eliminar un proyecto por su ID
exports.deleteById = async (req, res) => {
    const proyectoId = req.params.id;

    try {
        const proyecto = await Proyecto.findByPk(proyectoId);
        if (!proyecto) {
            return res.status(404).json({
                message: "Proyecto no encontrado con id = " + proyectoId,
                error: "404"
            });
        }

        await proyecto.destroy();
        res.status(200).json({
            message: "Proyecto eliminado exitosamente con id = " + proyectoId,
            proyecto: proyecto
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el proyecto",
            error: error.message
        });
    }
};

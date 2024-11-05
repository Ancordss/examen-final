// models/proyecto.js
module.exports = (sequelize, Sequelize) => {
	const Proyecto = sequelize.define('proyecto', {
	  id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	  },
	  titulo: {
		type: Sequelize.STRING,
		allowNull: false // Obligatorio
	  },
	  descripcion: {
		type: Sequelize.TEXT, // Información detallada
		allowNull: true // Opcional
	  },
	  completada: {
		type: Sequelize.BOOLEAN,
		defaultValue: false // Por defecto false
	  },
	  fecha_creacion: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW // Asigna la fecha actual por defecto
	  },
	  fecha_vencimiento: {
		type: Sequelize.DATE,
		allowNull: true // Opcional
	  },
	  prioridad: {
		type: Sequelize.ENUM('baja', 'media', 'alta'),
		defaultValue: 'media' // Por defecto media
	  },
	  asignado_a: {
		type: Sequelize.STRING,
		allowNull: true // Opcional
	  },
	  categoria: {
		type: Sequelize.STRING,
		allowNull: true // Opcional
	  },
	  costo_proyecto: {
		type: Sequelize.FLOAT,
		allowNull: true // Opcional
	  },
	  pagado: {
		type: Sequelize.BOOLEAN,
		defaultValue: false // Por defecto false, indica si está pagado o no
	  }
	});
  
	return Proyecto;
  };
  
export interface Category {
	slug: string;
	label: string;
	image: string;
	description: string;
}

export const categories: Category[] = [
	{
		slug: 'salas',
		label: 'Salas',
		image: '/images/projects/salas.jpg',
		description:
			'Desde innovadoras soluciones de almacenamiento hasta piezas únicas que capturan la esencia del cliente, nuestros proyectos de salas reflejan la fusión perfecta entre forma y función.',
	},
	{
		slug: 'cocinas',
		label: 'Cocinas',
		image: '/images/projects/cocinas.jpg',
		description:
			'Nuestras cocinas integran soluciones innovadoras. Cada proyecto es una expresión única de estética y practicidad, transformando espacios culinarios en áreas de inspiración y comodidad para todos.',
	},
	{
		slug: 'comedores',
		label: 'Comedores',
		image: '/images/projects/comedores.jpg',
		description:
			'Desde la elección de muebles hasta la disposición del espacio, nuestros proyectos incorporan elementos que invitan a la relajación y la convivencia.',
	},
	{
		slug: 'dormitorios',
		label: 'Dormitorios',
		image: '/images/projects/dormitorios.jpg',
		description:
			'Cada proyecto refleja cuidadosamente los gustos individuales, con detalles como cabeceras personalizadas, iluminación LED, y toques decorativos que transforman cada espacio en un oasis personalizado.',
	},
	{
		slug: 'dormitorios-infantiles',
		label: 'Dormitorios infantiles',
		image: '/images/projects/dormitorios-infantiles.jpg',
		description:
			'Desde coloridos murales hasta muebles funcionales y detalles lúdicos, cada proyecto refleja la creatividad, la diversión y la alegría de los más pequeños.',
	},
	{
		slug: 'banos',
		label: 'Baños',
		image: '/images/projects/banos.jpg',
		description:
			'Desde modernas vanidades hasta innovadoras soluciones de almacenamiento, la elección cuidadosa de azulejos, iluminación y accesorios ha creado baños que son verdaderas obras maestras.',
	},
	{
		slug: 'estudios',
		label: 'Estudios',
		image: '/images/projects/estudios.jpg',
		description:
			'Cada diseño ha sido meticulosamente elaborado para ofrecer un ambiente inspirador y funcional, transformando estudios en entornos que inspiran el aprendizaje y la productividad.',
	},
	{
		slug: 'recibidores',
		label: 'Recibidores',
		image: '/images/projects/recibidores.jpg',
		description:
			'Hemos incorporado elementos como espejos decorativos, muebles de almacenamiento elegantes y una cuidadosa selección de iluminación para dar la bienvenida con estilo.',
	},
	{
		slug: 'lavanderias',
		label: 'Lavanderías',
		image: '/images/projects/lavanderias.jpg',
		description:
			'En cada proyecto, nos hemos dedicado a optimizar el espacio para una experiencia eficiente y agradable. Brindando soluciones de almacenamiento, hemos maximizado la funcionalidad sin comprometer el estilo.',
	},
];

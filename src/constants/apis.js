const root = 'http://localhost:5000/api/';
const todo = 'todo/';
const Apis = {
	todo: {
		create: root + todo + 'create',
		getAll: root + todo,
	},
};

export default Apis;

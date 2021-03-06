const Parse = require('../parse/parse');
const RoomHandler = require('./room-handler');

module.exports = function (io, socket) {
	const GAME_LIST_NAME = 'RoomList';
	const LINK_NAME = 'RoomLink';

	const roomListJoin = () => {
		// Data

		socket.join(GAME_LIST_NAME);
		socket.emit('roomListUpdate');
	};

	const roomListLeave = () => {
		// Data

		socket.leave(GAME_LIST_NAME);
	};

	const roomListRequest = () => {
		// Data
		const user = socket.user;

		if (user) {
			const username = user.get('username');
			const handler = new RoomHandler('-');

			handler.getRoomList().then(list => {
				socket.emit('roomListResponse', list);
			})
		}
	};

	socket
		.on('roomListJoin', roomListJoin)
		.on('roomListLeave', roomListLeave)
		.on('roomListRequest', roomListRequest)
};

import io, { Socket } from 'socket.io-client';

type ChatDataType = { user: string; text: string };

class RealTimeChannel {
	private socket: Socket | null;

	constructor() {
		this.socket = null;
	}

	public init(url: string): void {
		this.socket = io(url);
	}

	public connect(eventName, handler): void {
		//must handle multiple listeners like message_read, message_sent: Currently handling one
		this.socket.on(eventName, handler);
	}

	public sendMessage(data: ChatDataType): void {
		if (this.socket && this.socket.connected) {
			this.socket.emit('outgoing_message', data);
		} else {
			console.error('Socket.IO is not connected');
		}
	}

	public disconnect(eventName, handler): void {
		if (this.socket) {
			this.socket.off(eventName, handler);
		}
	}
}

export default RealTimeChannel;

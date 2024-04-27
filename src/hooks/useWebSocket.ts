import { useEffect } from 'react';
import RealTimeChannel from '../services/RealTimeChannel';

const realTimeChannel = new RealTimeChannel();
realTimeChannel.init('ws://localhost:3001');

const useWebSocket = (eventName, onHandler) => {
	useEffect(() => {
		realTimeChannel.connect(eventName, onHandler);

		return () => {
			realTimeChannel.disconnect(eventName, onHandler);
		};
	}, [realTimeChannel, onHandler]);

	return realTimeChannel;
};

export default useWebSocket;

// @ts-nocheck
export class MessageScheduler {
	constructor(sendMessageRequestStore, realTimeChannel) {
		//initialize indexedDB and websockets
		this.taskQueue = [];
	}

	start() {
		// initiates the process by starting a timer to periodically fetch pending send message requests from the database and process them.
	}

	stop() {
		//stops and clears all timeouts and intervals
	}

	async processSendMessageRequests() {
		//method retrieves pending send message requests from the database and enqueues tasks based on their status.
	}

	enqueueTasks() {
		// enqueue tasks to send messages and retry failed messages, respectively.
	}

	async updateSendMessageRequestStatus() {
		//updates the status of send message requests in the database.
	}

	async executeTasks() {
		// executes tasks in the task queue sequentially.
	}
}

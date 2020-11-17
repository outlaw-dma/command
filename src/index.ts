
import { Command } from '@oclif/command';

export class SomeCommand extends Command { 
	async run() {
		console.log('Console output from SomeCommand!');
	};
};


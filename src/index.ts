import * as fs from 'fs';
import { Command, flags } from '@oclif/command';

export class LS extends Command {

	static flags = {
		version: flags.version(),
		help: flags.help()
	}
	async run() {
		const {flags} = this.parse(LS)
		let files = fs.readdirSync(flags.dir)
		for (let f of files) {}
		
		console.log('Console output from SomeCommand!');
	};
};


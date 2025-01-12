const convertHrtime = require('convert-hrtime-cjs');

function timeSpan() {
	const start = process.hrtime.bigint();
	const end = type => convertHrtime(process.hrtime.bigint() - start)[type];

	const returnValue = () => end('milliseconds');
	returnValue.rounded = () => Math.round(end('milliseconds'));
	returnValue.seconds = () => end('seconds');
	returnValue.nanoseconds = () => end('nanoseconds');

	return returnValue;
}

module.exports = timeSpan;

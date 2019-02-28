import path from 'path'
export const localRequire = (name: string) => require(path.resolve('node_modules', name))
export class Timer {
	_startTime: number
	_stopTime: number
	start() {
		this._startTime = Date.now()
	}
	stop() {
		this._stopTime = Date.now()
		return (this._startTime - this._stopTime)
	}
}
export interface IActor {
	position: {x: number, y: number};
	update: (delta?: number) => void;
	keyboard_event?: (key: string) => void;
	getPos?: () => {x: number, y: number};
	draw: (ctx: CanvasRenderingContext2D, delta?: number) => void;
}

export class Actor implements IActor {
	position: {x: number, y: number};
	constructor(position: {x: number, y: number}) {
		this.position = position;
	}
	update(delta: number) {};
	draw(ctx: CanvasRenderingContext2D, delta?: number) {};
	keyboard_event(key: string) {};
}
import { IActor } from "./actors/actor";
import { Angel } from "./actors/angels";
import { Doctor } from "./actors/doctor";
import { Map } from "./actors/map";
import { FPSViewer } from "./actors/FPSViewer";

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 40, y: 40}, "black");
    let map = new Map({x: 0, y: 0});
    let fps = new FPSViewer ({x: 10, y: 20});

    let actors: Array<IActor> = [
        map,
        fps,
        doctor,
        new Angel({x: 120, y: 360}, "gray"),
        new Angel({x: 480, y: 240}, "brown"),
        new Angel({x: 200, y: 880}, "aqua"),
        new Angel({x: 800, y: 240}, "yellow"),
        new Angel({x: 560, y: 800}, "purple"),
        new Angel({x: 880, y: 680}, "white"),
    ];

    const trapped = () => {
        for (let i = 0; i < actors.length; i++) {
            if (actors[i] instanceof Angel) {
                if ((actors[i].getPos().x == doctor.getPos().x) && (actors[i].getPos().y == doctor.getPos().y)) {
                    return true;
                }
            }
        }
        return false;
    }

    let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;
        lastFrame = time;
		actors.forEach((e) => e.update(delta));
		ctx.clearRect(0, 0, 1020, 1024);
		actors.forEach((e) => {
			ctx.save();
			e.draw(ctx, delta);
			ctx.restore();
		});
        if (trapped()) {
            doctor = new Doctor({x: 40, y: 40}, "black");
            actors[2] = doctor;
        }
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => {
			if (actor.keyboard_event) {
				actor.keyboard_event(e.key);
			}
		});
    })
}
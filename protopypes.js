Car.prototype.moveRight = function () {
			
			this.speed = Math.floor(Math.random() * 15);

			this.x += this.speed;

			this.carElement.css({
				left: this.x,
				top: this.y
			})
		}
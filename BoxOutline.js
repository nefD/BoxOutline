ig.module(
	'game.BoxOutline.BoxOutline'
)
.requires(
	'impact.entity'
)
.defines(function() {
	ig.Entity.prototype.drawBox = false;
	ig.Entity.prototype.drawBoxColor = '#f00';
	ig.Entity.prototype.drawBoxSize = 1.0;
	ig.Entity.prototype._drawBox = ig.Entity.prototype.draw;
	ig.Entity.prototype.draw = function() {
		this._drawBox();
		if ( this.drawBox ) {
			var ctx = ig.system.context;
			ctx.save();
			ctx.strokeStyle = this.drawBoxColor;
			ctx.lineWidth = this.drawBoxSize;
			ctx.beginPath();
			ctx.rect( 
				ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x),
				ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y),
				this.size.x * ig.system.scale,
				this.size.y * ig.system.scale);
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
	};
});

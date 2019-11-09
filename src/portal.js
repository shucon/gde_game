import { Sprite } from "kontra";

export const createPortal = () => {
  return Sprite({
    width: 200,
    height: 200,
    colorValue: 0,
    colorUp: true,

    render() {
      this.context.globalAlpha = 0.7;
      this.context.fillStyle =
        "rgb(255,150," + this.colorValue.toString() + ")";
      this.context.fillRect(this.x, this.y, this.width, this.height);
      this._oscillateColor();
      this.context.globalAlpha = 1;
    },

    collidesWith(object) {
      const xMargin = this.width * (3 / 8);
      const yMargin = this.height * (3 / 8);
      return (
        this.x < object.x + object.width - xMargin &&
        this.x + this.width - xMargin > object.x &&
        this.y < object.y + object.height - yMargin &&
        this.y + this.height - yMargin > object.y
      );
    },

    _oscillateColor() {
      if (this.colorUp) {
        if (this.colorValue < 255) {
          this.colorValue++;
        } else {
          this.colorUp = false;
        }
      } else {
        if (this.colorValue > 0) {
          this.colorValue--;
        } else {
          this.colorUp = true;
        }
      }
    }
  });
};

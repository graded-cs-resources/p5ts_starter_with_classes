/**
 * The class Ball defines *Ball objects*. Ball objects have a size, position, speed, and color.
 */

// the word 'export' simply makes it available outside the file.
// the word `class` tells TypeScript we are defining a class of objects

export class Ball {

    /** x-position of the ball's center */
    private x: number;
    /** y-position of the ball's center */
    private y: number;
    /** ball's diameter in pixels */
    private size: number;
    /** color of the ball. */
    private col: string;
    /** speed in x direction of the ball. */
    private speedX: number;
    /** speed in y direction of the ball. positive is DOWN. */
    private speedY: number;


    /**
     * Construct a new ball
     * @param x initial x-value
     * @param y  initial y-value
     * @param size initial size
     * @param col OPTIONAL initial color. Default is red.
     * @param speedX OPTIONAL initial speed x-direction. Default is random.
     * @param speedY OPTIONAL initial speed y-direction. Default is random.
     */
    constructor(
        x: number,
        y: number,
        size: number,
        col: string = "red",
        speedX: number = Math.random() * 10 - 5,
        speedY: number = Math.random() * 10 - 5,
    ) {
        // We want to set the properties of the SPECIFIC OBJECT we are building. This is a common pattern.
        // the standalone `x` on the right side returns to the x from this function - the one called in.
        // `this.x` refers to the value of x we declared above - the PROPERTY - of this particular ball.
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    /** This method  below moves the ball. If the ball is on the edge, it reverses
 * the speed property so the ball will bounce.
 */
    public move(): void {
        this.y = this.y + this.speedY;
        this.x = this.x + this.speedX;
        if (this.onXEdge()) {
            this.speedX = -this.speedX;
        }
        if (this.onYEdge()) {
            this.speedY = -this.speedY;
        }
    }

    /** Draws the ball in the proper place, in the proper color. */
    public draw(): void {
        stroke(0); // sets the border color to black
        fill(this.col); // sets the fill color to our ball's color
        if (this.onXEdge() || this.onYEdge()) {
            fill("white"); // make the ball flash if we hit the edge.
        }
        ellipse(this.x, this.y, this.size); // p5 command to draw a circle
    }

    /** This PRIVATE method determines if a ball is on the edge of the screen vertically.
     *  You do not need to understand it right now, other than that it returns a boolean.
     *  You CAN'T access this method outside of this class!
     */
    private onYEdge(): boolean {
        if (this.y <= this.size / 2 || this.y >= height - this.size / 2) {
            return true;
        } else {
            return false;
        }
    }
    /** Private. Determines if a ball is on the edge of the screen horizontally */
    private onXEdge(): boolean {
        if (this.x <= this.size / 2 || this.x >= width - this.size / 2) {
            return true;
        } else {
            return false;
        }
    }
}

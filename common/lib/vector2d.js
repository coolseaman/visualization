export class Vector2D extends Array {
    constructor(x = 1, y = 0) {
        super(x, y);
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get length() {
        return Math.hypot(this.x, this.y);
    }

    get dir() {
        return Math.atan2(this.y, this.x);
    }

    // 拷贝向量
    copy() {
        return new Vector2D(this.x, this.y);
    }

    // 向量的加法
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    // 向量的减法
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    // 实数与向量的积
    scale(a) {
        this.x *= a;
        this.y *= a;
        return this;
    }

    // 判断两个向量是否相交
    cross(v) {
        return this.x *v.y - v.x * this.y;
    }

    // 向量的数量积
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    // 向量的单位向量
    normalize() {
        return this.scale(1 / this.length);
    }

    // 向量旋转
    rotate(rad) {
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const [x, y] = this;

        this.x = x * c + y * -s;
        this.y = x * s + y * c;

        return this;
    }
    
}
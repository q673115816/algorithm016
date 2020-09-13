class Deque {
    constructor(...args) {
        this.deque = [...args]
        this.len = args.length
    }

    addFirst(prop) {
        this.addlen()
        this.deque.shift(prop)
    }

    removeFirst() {
        this.sublen()
        return this.deque.unshift()
    }

    addLast(prop) {
        this.addlen()
        this.deque.push(prop)
    }

    removeLast() {
        this.sublen()
        return this.deque.pop()
    }

    addlen() {
        this.len++
    }

    sublen() {
        this.len > 0 && this.len--
    }

    peek() {
        return this.deque[this.len]
    }

    size() {
        return this.len
    }
}

let testdeque = new Deque()

testdeque.addLast('a')
testdeque.addLast('b')
testdeque.addLast('c')
console.log(testdeque);

let str = testdeque.peek()

console.log(str);
console.log(testdeque);

while(testdeque.size() > 0) {
    console.log(testdeque.removeLast());
}
console.log(testdeque);
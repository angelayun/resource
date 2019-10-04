function log(message) {
    console.log(' '.repeat(new Error().stack.match(/\n/g).length - 2) + message)

}

function foo() {
    log('foo');
    return bar() + bar();
}

function bar() {
    log('bar');
    return baz() + baz();
}

function baz() {
    log('baz');
    return 17;
}
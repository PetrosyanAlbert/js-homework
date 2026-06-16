class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.thenCallback = undefined;
        this.catchCallback = undefined;

        const resolve = (v) => {
            if (this.state !== "pending") return;
            this.state = "fulfilled";
            this.value = v;

            if (this.thenCallback) {
                queueMicrotask(() => {
                    this.thenCallback(this.value);
                });
            }
        };

        const reject = (reason) => {
            if (this.state !== "pending") return;
            this.state = "rejected";
            this.reason = reason;

            if (this.catchCallback) {
                queueMicrotask(() => {
                    this.catchCallback(this.reason);
                });
            }
        };

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onFulfilled) {
        if (this.state === "fulfilled") {
            queueMicrotask(() => {
                onFulfilled(this.value);
            });
        } else {
            this.thenCallback = (v) => {
                queueMicrotask(() => {
                    onFulfilled(v);
                });
            };
        }
        return this;
    }

    catch(onRejected) {
        if (this.state === "rejected") {
            queueMicrotask(() => {
                onRejected(this.reason);
            });
        } else {
            this.catchCallback = (r) => {
                queueMicrotask(() => {
                    onRejected(r);
                });
            };
        }
        return this;
    }
}

const p = new MyPromise((resolve) => {
    resolve(42);
});

p.then((v) => {
    console.log(v);
});

const p2 = new MyPromise((resolve) => {
    setTimeout(() => resolve("ok"), 100);
});

setTimeout(() => {
    p2.then((v) => console.log(v));
}, 2000);

let b = new MyPromise((resolve, reject) => {
    reject("Smth went wrong");
})
    .then((result) => {
        console.log("Result:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

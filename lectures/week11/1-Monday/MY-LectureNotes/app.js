// function Obj(param1, param2) {
//     this.p1 = param1,
//     this.p2 = param2
// }


// class Obj {
//     constructor(p1, p2) {
//         this.p1 = p1,
//         this.p2 = p2
//     }
// }

// let ne = new Obj("this is first", 2)

// console.log(ne);

function swimmer({name}) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}
function runner({name}) {
    return {
        run: () => console.log(`${name} swam`)
    }
}
function jumper({name}) {
    return {
        jump: () => console.log(`${name} swam`)
    }
}

function runningSwimmingThing({name}) {
    return {
        ...swimmer(name),
        ...runner(name)
    }
}
function jumpingSwimmingThing({name}) {
    return {
        ...swimmer(name),
        ...jumper(name)
    }
}
function jumpingRunningThing({name}) {
    return {
        ...runner(name),
        ...jumper(name)
    }
}

const jumpingRunningThing = ({name}) => {
    return {
        ...runner(name),
        ...jumper(name)
    }
}
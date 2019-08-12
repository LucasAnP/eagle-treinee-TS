/*let message: string = "Trainee"
console.log(message)

let episode:number = 4
console.log("Aula do trainee nº"+episode)
episode = episode +1
console.log("Proximo episodio éº "+episode)

let favorite
favorite ="RSX-800"
favorite = 10
console.log("My favorite is ")

let suficienteParaRecord = function(parsecs:number):boolean{
    return parsecs < 12
}
let distance = 11
console.log(`Is ${distance}é suficiente?${suficienteParaRecord(distance)?'Yes':'No'}`)

let call = (name:String) =>console.log(`Do you copy,${name}?`)
call('R2')

function inc(speed:number, inc:number = 1):number{
    return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5)=${inc(5)}`)*/

import{spaceCraft,containerShip}from './base-ship'
import{mileniumFalcon}from './starfighters'
import * as _ from 'lodash'
console.log(_.pad("Typescript Examples",40,"="))
let ship = new spaceCraft('hyperDrive')
ship.jumpIntoHyperspace()

let falconn = new mileniumFalcon()

let goodForTheJob = (ship: containerShip) => ship.cargoContainers > 2
console.log(`Is falconn good for the job?${goodForTheJob(falconn)?`Yes`:`No`}`)
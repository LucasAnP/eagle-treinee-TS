import { containerShip,spaceCraft } from "./base-ship";

class mileniumFalcon extends spaceCraft implements containerShip{
    cargoContainers:number
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2
    }
    jumpIntoHyperspace(){
        if(Math.random()>=0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log("Failed to Jump into hyperspace")
        }
    }
}

export{mileniumFalcon}
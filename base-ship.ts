 class spaceCraft{
    constructor(public propulsor:String){
    }
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

 interface containerShip{
    cargoContainers:number
}

export{spaceCraft, containerShip}
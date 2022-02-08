class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weekProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weekProcessedLoad)

resourceProcessor.monthlyProcessedLoad = 600
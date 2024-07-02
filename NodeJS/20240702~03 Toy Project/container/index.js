class Container {
    services = [];

    register(name, definition, dependencies) {
        this.services[name] = { definition, dependencies };
    }

    get(name) {
        const service = this.services[name];
        if (!service.instance) {
            const dependencies = service.dependencies.map((el) => this.get(el));
            service.instance = new service.definition(...dependencies);
        }
        return service.instance;
    }
}

module.exports = new Container(); 
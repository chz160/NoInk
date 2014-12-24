var serviceLocator = function serviceLocator() {
    //defining a var instead of this (works for variable & function) will create a private definition
    var services = {};
    
    this.register = function (key, object) {
        if (!services[key]) {
            services[key] = object;
        }
    };
    
    this.resolve = function (key) {
        if (services[key]) {
            return services[key];
        }
        return null;
    };
    
    this.remove = function (key) {
        if (services[key]) {
            delete services[key];
        }
    };
    
    this.getSocketList = function () {
        return services;
    };
    
    if (serviceLocator.caller != serviceLocator.getInstance) {
        throw new Error("This object cannot be instanciated");
    }
}

serviceLocator.instance = null;

serviceLocator.getInstance = function () {
    if (this.instance === null) {
        this.instance = new serviceLocator();
    }
    return this.instance;
}

module.exports = serviceLocator.getInstance();
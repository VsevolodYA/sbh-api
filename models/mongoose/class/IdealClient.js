class IdealClient {

    static UpdateOrCreate(obj) {
        return this.update({userId: obj.userId}, obj, {upsert: true, setDefaultsOnInsert: true});
    }

    static load(options) {
        return this.findOne({userId: options.userId})
            .select(options.select)
            .exec();
    }

    static findIdealClient(clients) {
        let propsClient = {
            gender: {},
            maritalStatus: {},
            kids: {},
            employment: {},
            location: {},
            home: {},
            transit: {}
        };
    
        clients.forEach(function (client) {
            for (let prop in client) {
                if(!propsClient.hasOwnProperty(prop)) {
                    continue;
                }
        
                let value = client[prop];
        
                if(!propsClient[prop][value]) {
                    propsClient[prop][value] = 1;
                } else {
                    propsClient[prop][value]++;
                }
            }
        });
        console.log(propsClient)
        
        let propIdealClient = IdealClient.avgPropIdealClient(propsClient);
        
        console.log(propIdealClient);
        
        // return new Promise((resolve) => {
        //     let idealClient = null;
        //     clients.forEach(function(item) {
        //      
        //         console.log(idealClientParametr)
        //         // if(item.gender == idealClientParametr.gender && item.maritalStatus == idealClientParametr.maritalStatus &&
        //         // item.kids == idealClientParametr.kids && item.employment == idealClientParametr.employment && 
        //         // item.location == idealClientParametr.location && item.home == idealClientParametr.home && 
        //         // item.transit == idealClientParametr.transit) {
        //         //     idealClient = item;
        //         // }
        //     });
        //   
        //   
        // })
    }

    static avgPropIdealClient(propsClient) {
        let propIdealClient = {};
    
        for(let prop in propsClient) {
            let max = 0;
            let maxName = null;
           
            for(var key in propsClient[prop]) {
                if(propsClient[prop][key] >= max) {
                    maxName = key;
                    max = propsClient[prop][key];
                }
            }

            propIdealClient[prop] = maxName;
        }
       
        return propIdealClient;
    }
}

module.exports = IdealClient;
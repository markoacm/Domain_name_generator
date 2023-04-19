var pronoun = ['the','our','your','one'];
var adj = ['case', 'box', 'free', 'advanced', 'amazing'];
var noun = ['live', 'global', 'lesson', 'tech', 'builder', 'canvas'];
var extensions = ['com', 'net', 'io', 'org', 'us'];



    for (let i = 0; i < pronoun.length; i++) {
       
        for (let j =0; j < adj.length; j++) {
        
            for (let k = 0; k < noun.length; k++) {

                for (let l = 0; l < extensions.length; l++){

                    const domainNames= (pronoun[i] + adj[j] + noun[k] + "." + extensions[l]);
                
                    console.log(domainNames);
                }   
            }
        }
    }

    

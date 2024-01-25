


const parseEnv = () => {
    const envVars = process.env;
    let RSSVars = [];
    for (let key in envVars){
        if (key.startsWith('RSS_')){
            RSSVars.push(`${key}=${envVars[key]}`);
        }
    }
    const parsed = RSSVars.join('; ');
    console.log(parsed);
};

parseEnv();
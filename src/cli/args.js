const parseArgs = () => {

    let array = [];

    process.argv
    .map((prop_name, index ) => {
        if(prop_name.startsWith('--')){
              return (`${prop_name} is ${process.argv[index+1]}`);
        }
    }) 
    .forEach(element => {
        if (element !== undefined)
        array.push(element);
    });
        console.log(array.join(`,`));
    
    // Write your code here 
};

parseArgs();
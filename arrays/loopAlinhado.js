let times = [ 'Palmeiras', 'Corinthians', 'Santos', 'São Paulo']

for (let i = 0; i < times.length; i+= 1) {
    for (let j = 0; j < times.length; j += 1) {
        if  (i !== j)
        console.log(`${times [i]} x ${times[j]}`);
    }
    
}
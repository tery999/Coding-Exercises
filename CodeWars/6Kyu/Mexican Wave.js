function wave(str){
    let waveArr = [];

    for ( let i = 0 ; i < str.length; i ++) {
        if ( str[i] !== " ") {
            let curWave = str.split("");
            curWave[i] = curWave[i].toUpperCase();
            waveArr.push(curWave.join(""));
        }
    }

    return waveArr
  }

  console.log ( wave("he llo"));
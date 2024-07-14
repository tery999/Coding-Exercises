function add(a, b) {
    let first = BigInt(a)
    let second = BigInt(b);
    let result = BigInt( first+second );
    return result.toString();
  }

  console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
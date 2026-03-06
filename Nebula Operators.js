function stellar_fusion(data1, data2) {
    // Data streams collide like stars
    return data1.concat(data2);
}

let stream1 = [1, 2, 3, 4];
let stream2 = [5, 6, 7, 8];
let merged = stellar_fusion(stream1, stream2);
console.log("Merged stream: " + merged);

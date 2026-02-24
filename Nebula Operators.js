nebula_operator stellar_fusion(data1, data2) {
    // Data streams collide like stars
    return data1 + data2;
}

let stream1 = [1, 2, 3, 4];
let stream2 = [5, 6, 7, 8];
let merged = stellar_fusion(stream1, stream2);
print("Merged stream: " + merged);

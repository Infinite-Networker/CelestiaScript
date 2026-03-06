function create_constellation(stars, name) {
    console.log("Creating constellation: " + name);
    for (let i = 0; i < stars; i++) {
        console.log("⭐ Star " + (i + 1) + " placed in position");
    }
    console.log(name + " now shines in the night sky!");
}

create_constellation(5, "Cassiopeia");

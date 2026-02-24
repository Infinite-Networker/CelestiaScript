cosmic_function create_constellation(stars, name) {
    print("Creating constellation: " + name);
    for (let i = 0; i < stars; i++) {
        print("⭐ Star " + (i + 1) + " placed in position");
    }
    print(name + " now shines in the night sky!");
}

create_constellation(5, "Cassiopeia");

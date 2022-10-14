console.log("map.js connected")

class Borders {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }
    
    draw() {
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

function createMap() {
    // 10x11
    let fullMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];

    const barriers = [];

    fullMap.forEach((row, i) => {
        row.forEach((number, j) => {
            switch (number) {
                case 1:
                    barriers.push(
                        new Borders(
                            20 * j, 20 * i
                        )
                    )
                break 
            }
        }) 
    });

    barriers.forEach((barrier) => { 
        barrier.draw()

        // Collision Player and map

        if (mapCollisions(
            {   
                circle: player1,
                rectangle: barrier
            }
        )) {
            player1.speedX = 0;
            player1.speedY = 0;
        }
        if(mapCollisions(
            {
                circle: player2,
                rectangle: barrier
            }
        )) {
            player2.speedX = 0;
            player2.speedY = 0;
        }
    })
}
class Borders {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 25;
        this.image = image;
    }
    
    draw() {
        context.drawImage(this.image, this.x, this.y)
    }
}

class PowerUp {
    constructor({position}) {
        this.position = position;
        this.radius = 5;
      }
      draw() {
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2);
        context.fillStyle = "white";
        context.fill();
        context.closePath(); 
      }
}

const barriers = [];
const scores = [];
const powerUps = [];

function createMap() {
    // 10x11
    let fullMap = [
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 3],
        [6, , 0, 0, 0, 0, 0, 0, 0, 22, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [6, 0, 7, 1, 8, 0, 7, 1, 8, 0, 11, 0, 7, 1, 8, 0, 7, 8, 0, 6],
        [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [6, 0, 7, 1, 8, 0, 12, 0, 7, 1, 10, 1, 8, 0, 12, 0, 7, 8, 0, 6],
        [6, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 6],
        [6, 0, 7, 1, 3, 0, 13, 1, 8, 0, 11, 0, 7, 1, 14, 0, 7, 3, 0, 6],
        [6, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 0, 6],
        [6, 0, 12, 0, 6, 0, 11, 0, 2, 8, 0, 7, 3, 0, 5, 8, 0, 6, 0, 6],
        [6, 0, 6, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 6],
        [6, 0, 6, 0, 6, 0, 12, 0, 5, 1, 1, 1, 4, 0, 2, 8, 0, 6, 0, 6],
        [6, 0, 6, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 0, 6],
        [6, 0, 11, 0, 6, 0, 11, 0, 7, 1, 10, 1, 8, 0, 11, 0, 0, 6, 0, 6],
        [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6],
        [6, 0, 7, 1, 3, 0, 7, 1, 8, 0, 11, 0, 7, 1, 1, 1, 1, 3, 0, 6],
        [6, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 0, 6],
        [6, 0, 12, 0, 0, 0, 12, 0, 7, 1, 10, 1, 8, 0, 12, 0, 0, 0, 0, 6],
        [6, 0, 5, 1, 1, 1, 4, 0, 0, 0, 11, 0, 0, 0, 5, 1, 1, 8, 0, 6],
        [6, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 6],
        [5, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 15, 1, 1, 1, 1, 1, 1, 4]
    ];

    function getImage(src) {
        const image = new Image();
        image.src = src;
        return image;
    }
    
    fullMap.forEach((row, i) => {
        row.forEach((number, j) => {
            switch (number) { 
                case 0:
                    scores.push(new Score (
                        {
                            position: {
                                x: (j * 25 + (25 / 2)),
                                y: (i * 25 + (25 / 2))
                            }
                        }
                    ))
                    break
                case 1:
                    barriers.push(
                        new Borders(
                            25 * j, 25 * i, getImage('./img/map/pipeHorizontal.png')
                        )
                    )
                break 
                case 22:
                    powerUps.push (
                        new PowerUp({
                            position: {
                                x: (j * 25 + (25 / 2)),
                                y: (i * 25 + (25 / 2))
                            }
                        })
                    )
                break 
                case 2:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeCorner1.png')
                    )
                )
                break 
                case 3:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeCorner2.png')
                    )
                )
                break 
                case 4:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeCorner3.png')
                    )
                )
                break 
                case 5:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeCorner4.png')
                    )
                )
                break 
                case 6:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeVertical.png')
                    )
                )
                break 
                case 7:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/capLeft.png')
                    )
                )
                break 
                case 8:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/capRight.png')
                    )
                )
                break 
                case 9:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/block.png')
                    )
                )
                break 
                case 10:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeConnectorDownwards.png')
                    )
                )
                break 
                case 11:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/capBottom.png')
                    )
                )
                break 
                case 12:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/capTop.png')
                    )
                )
                break 
                case 13:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeConnectorRight.png')
                    )
                )
                break 
                case 14:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeConnectorLeft.png')
                    )
                )
                break 
                case 15:
                barriers.push(
                    new Borders(
                        25 * j, 25 * i, getImage('./img/map/pipeConnectorTop.png')
                    )
                )
                break
            }
        }) 
    });

}
createMap();

namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    newcoin.ay = 0
    if (newcoin.image.equals(img`
        . . . . . . . . 
        . . 2 2 2 2 . . 
        . 2 4 4 2 2 2 . 
        . 2 4 2 2 2 2 . 
        . 2 2 2 2 4 2 . 
        . 2 2 2 4 4 2 . 
        . . 2 2 2 2 . . 
        . . . . . . . . 
        `)) {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
        turns(false)
    } else {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
    }
})
function turns (red_turn: boolean) {
    if (red_turn) {
        newcoin = sprites.create(img`
            . . . . . . . . 
            . . 2 2 2 2 . . 
            . 2 4 4 2 2 2 . 
            . 2 4 2 2 2 2 . 
            . 2 2 2 2 4 2 . 
            . 2 2 2 4 4 2 . 
            . . 2 2 2 2 . . 
            . . . . . . . . 
            `, SpriteKind.coin)
    } else {
        newcoin = sprites.create(img`
            . . . . . . . . 
            . . 5 5 5 5 . . 
            . 5 1 1 5 5 5 . 
            . 5 1 5 5 5 5 . 
            . 5 5 5 5 1 5 . 
            . 5 5 5 1 1 5 . 
            . . 5 5 5 5 . . 
            . . . . . . . . 
            `, SpriteKind.coin)
    }
    tiles.placeOnTile(newcoin, tiles.getTileLocation(2, 0))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftcollum < tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column)) {
        tiles.placeOnTile(newcoin, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.row)))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (right_collum < tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column)) {
        tiles.placeOnTile(newcoin, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) + 1, tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.row)))
    }
})
function doSomething (list: any[]) {
    text_list = ["", "b"]
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftcollum <= tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) && right_collum <= tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column)) {
        tiles.placeOnTile(newcoin, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) - 0, tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.row)))
        newcoin.z = 100
        newcoin.setVelocity(0, 50)
    }
})
let text_list: string[] = []
let newcoin: Sprite = null
let right_collum = 0
let leftcollum = 0
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 70
    export const ARCADE_SCREEN_HEIGHT = 64
}
tiles.loadMap(tiles.createMap(tilemap`level4`))
turns(true)
leftcollum = 0
right_collum = 0

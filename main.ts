namespace SpriteKind {
    export const coin = SpriteKind.create()
}
function red_turn (is_red_turn: boolean) {
    if (is_red_turn) {
        newcoin = sprites.create(img`
            8 8 8 8 8 8 8 8 
            8 8 2 2 2 2 8 8 
            8 2 4 4 2 2 2 8 
            8 2 4 2 2 2 2 8 
            8 2 2 2 2 4 2 8 
            8 2 2 2 4 4 2 8 
            8 8 2 2 2 2 8 8 
            8 8 8 8 8 8 8 8 
            `, SpriteKind.coin)
    } else {
        newcoin = sprites.create(img`
            8 8 8 8 8 8 8 8 
            8 8 5 5 5 5 8 8 
            8 5 1 1 5 5 5 8 
            8 5 1 5 5 5 5 8 
            8 5 5 5 5 1 5 8 
            8 5 5 5 1 1 5 8 
            8 8 5 5 5 5 8 8 
            8 8 8 8 8 8 8 8 
            `, SpriteKind.coin)
    }
    tiles.placeOnTile(newcoin, tiles.getTileLocation(4, 0))
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftcollum <= tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) && right_collum <= tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column)) {
        tiles.placeOnTile(newcoin, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.column) - 0, tiles.locationXY(tiles.locationOfSprite(newcoin), tiles.XY.row)))
        newcoin.z = 100
        newcoin.setVelocity(0, 50)
    }
})
scene.onHitWall(SpriteKind.coin, function (sprite, location) {
    red = img`
        8 8 8 8 8 8 8 8 
        8 8 2 2 2 2 8 8 
        8 2 4 4 2 2 2 8 
        8 2 4 2 2 2 2 8 
        8 2 2 2 2 4 2 8 
        8 2 2 2 4 4 2 8 
        8 8 2 2 2 2 8 8 
        8 8 8 8 8 8 8 8 
        `
    yellow = img`
        8 8 8 8 8 8 8 8 
        8 8 5 5 5 5 8 8 
        8 5 1 1 5 5 5 8 
        8 5 1 5 5 5 5 8 
        8 5 5 5 5 1 5 8 
        8 5 5 5 1 1 5 8 
        8 8 5 5 5 5 8 8 
        8 8 8 8 8 8 8 8 
        `
    newcoin.setVelocity(0, 0)
    tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Top), newcoin.image)
    tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), true)
    reds_turn = !(reds_turn)
    red_turn(reds_turn)
})
let yellow: Image = null
let red: Image = null
let newcoin: Sprite = null
let reds_turn = false
let right_collum = 0
let leftcollum = 0
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 70
    export const ARCADE_SCREEN_HEIGHT = 64
}
tiles.loadMap(tiles.createMap(tilemap`level4`))
leftcollum = 0
right_collum = 0
reds_turn = true
red_turn(reds_turn)

namespace SpriteKind {
    export const coin = SpriteKind.create()
}
function turns (red_turn: boolean) {
    if (red_turn) {
        mySprite = sprites.create(img`
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
        mySprite = sprites.create(img`
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
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 0))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftcollum < tiles.locationOfSprite(null)) {
    	
    }
})
let mySprite: Sprite = null
let leftcollum = 0
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 70
    export const ARCADE_SCREEN_HEIGHT = 64
}
tiles.loadMap(tiles.createMap(tilemap`level4`))
turns(true)
leftcollum = 0
let right_collum = 0

/// <reference path = "../DTS/pixi.d.ts"/>
/// <reference path = "../DTS/matter.d.ts"/>
namespace surya_1{
    export let Texture = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    CreateGraphics: PIXI.Graphics,
    loader = PIXI.Loader.shared,
    app: PIXI.Application,
    tickerShared = PIXI.Ticker.shared,
    Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body =Matter.Body,
    WorldObject:any = {},
    score:number = 0;
}